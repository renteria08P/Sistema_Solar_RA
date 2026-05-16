
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
    const planet =
      BABYLON.MeshBuilder.CreateSphere(
        data.name,
        {
          diameter: data.size
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
    planet.position.x =
      data.distance;

    // INITIAL SPEED
    const orbitalSpeed =
      data.speed;

    // PLANET OBJECT
    const planetObject = {

      mesh: planet,

      mass: data.mass,

      velocity:
        new BABYLON.Vector3(
          0,
          0,
          orbitalSpeed
        ),

      angle: data.angle,

      name: data.name,

      description:
        data.description,

    };

    planets.push(planetObject);

    // ================= CLICK EVENT =================
    planet.actionManager =
      new BABYLON.ActionManager(
        scene
      );

    planet.actionManager.registerAction(

      new BABYLON.ExecuteCodeAction(

        BABYLON.ActionManager.OnPickTrigger,

        () => {

          // OPEN MODAL
          showPlanetModal(
            planetObject
          );

          // OPEN EDITOR
          window.dispatchEvent(

            new CustomEvent(
              "planetSelected",
              {
                detail: planetObject
              }
            )

          );

        },

      ),

    );

  });

  // ================= MAIN LOOP =================
  scene.onBeforeRenderObservable.add(
    () => {

      const speed =
        speedState?.value ?? 1;

      planets.forEach((planet) => {

        applyGravity(
          planet,
          sunBody
        );

        planet.mesh.position.addInPlace(

          planet.velocity.scale(
            speed
          )

        );

      });

    }
  );

  // ================= RETURN =================
  return planets;

}

