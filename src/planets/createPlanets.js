
import * as BABYLON from "@babylonjs/core";

import { planetData } from "./planetData";
import { applyGravity } from "../physics/gravity";
import { showPlanetModal } from "../ui/modal";

export function createPlanets(
  scene,
  sun,
  speedState
) {

  const planets = [];

  // ================= SUN BODY =================
  const sunBody = {
    mesh: sun,

    mass: 10000,

    velocity:
      new BABYLON.Vector3(0, 0, 0),
  };

  // ================= CREATE PLANETS =================
  planetData.forEach((data) => {
    // PLANET MESH
    const planet = BABYLON.MeshBuilder.CreateSphere(
      data.name,
      {
        diameter: data.size,
      },
      scene,
    );

    const material = new BABYLON.StandardMaterial(
      data.name + "Material",
      scene,
    );

    material.diffuseColor = data.color;
    planet.material = material;

    // INITIAL POSITION
    planet.position.x = data.distance;

    // INITIAL SPEED
    const orbitalSpeed = data.speed;

    // PLANET OBJECT
    const planetObject = {
      mesh: planet,

      mass: data.mass,

      velocity: new BABYLON.Vector3(0, 0, orbitalSpeed),

      angle: data.angle,

      name: data.name,

      description: data.description,

      isDragging: false,
    };

    planets.push(planetObject);

    // ================= DRAG SYSTEM =================

    const dragBehavior = new BABYLON.PointerDragBehavior({
      dragPlaneNormal: new BABYLON.Vector3(0, 1, 0),
    });

    planet.addBehavior(dragBehavior);

    // INICIO DRAG
    dragBehavior.onDragStartObservable.add(() => {
      planetObject.isDragging = true;
    });

    // FIN DRAG
    dragBehavior.onDragEndObservable.add(() => {
      planetObject.isDragging = false;
    });

    // VELOCIDAD DE LANZAMIENTO
    let lastPosition = planet.position.clone();

    dragBehavior.onDragObservable.add(() => {
      const currentPosition = planet.position.clone();

      const throwVelocity = currentPosition.subtract(lastPosition);

      planetObject.velocity = throwVelocity.scale(0.2);

      lastPosition = currentPosition;
    });

    // ================= CLICK EVENT =================
    planet.actionManager = new BABYLON.ActionManager(scene);

    planet.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,

        () => {
          // OPEN MODAL
          showPlanetModal(planetObject);

          // OPEN EDITOR
          window.dispatchEvent(
            new CustomEvent("planetSelected", {
              detail: planetObject,
            }),
          );
        },
      ),
    );
    });

  // ================= MAIN LOOP =================
  scene.onBeforeRenderObservable.add(() => {
    const speed = speedState?.value ?? 1;

    planets.forEach((planet) => {
      if (planet.isDragging) return;

      applyGravity(planet, sunBody);

      planet.mesh.position.addInPlace(planet.velocity.scale(speed));
    });
  });


  // ================= RETURN =================
  return planets;

}
