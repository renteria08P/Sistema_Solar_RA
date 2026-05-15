import * as BABYLON from "@babylonjs/core";

import { planetData } from "./planetData";
import { applyGravity } from "../physics/gravity";
import { showPlanetModal } from "../ui/modal";

export function createPlanets(scene, sun, speedState) {
  const planets = [];

  // SUN BODY (para física)
  const sunBody = {
    mesh: sun,
    mass: 10000,
    velocity: new BABYLON.Vector3(0, 0, 0),
  };

  // CREAR PLANETAS
  planetData.forEach((data) => {
    const planet = BABYLON.MeshBuilder.CreateSphere(
      data.name,
      { diameter: data.size },
      scene,
    );

    const material = new BABYLON.StandardMaterial(
      data.name + "Material",
      scene,
    );

    material.diffuseColor = data.color;
    planet.material = material;

    // posición inicial en órbita
    planet.position.x = data.distance;

    const orbitalSpeed = Math.sqrt(sunBody.mass / data.distance) * 0.03;

    const planetObject = {
      mesh: planet,
      mass: data.size * 10,
      velocity: new BABYLON.Vector3(0, 0, orbitalSpeed),
      name: data.name,
      description: data.description,
    };

    planets.push(planetObject);

    // CLICK EVENT
    planet.actionManager = new BABYLON.ActionManager(scene);

    planet.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, () => {
        showPlanetModal(planetObject);
      }),
    );
  });

  // ANIMACIÓN (loop principal)
  scene.onBeforeRenderObservable.add(() => {
    const speed = speedState?.value ?? 1;

    planets.forEach((planet) => {
      applyGravity(planet, sunBody);

      planet.mesh.position.addInPlace(planet.velocity.scale(speed));
    });
  });
}
