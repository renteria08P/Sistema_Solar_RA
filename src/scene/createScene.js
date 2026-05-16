import * as BABYLON from "@babylonjs/core";

import { createPlanets } from "../planets/createPlanets";

export function createScene(
  engine,
  canvas,
  speedState
) {

  const scene =
    new BABYLON.Scene(engine);

  // ================= BACKGROUND COLOR =================
  scene.clearColor =
    new BABYLON.Color3(0, 0, 0);

  // ================= CAMERA =================
  const camera =
    new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 2.5,
      120,
      BABYLON.Vector3.Zero(),
      scene,
    );

  camera.attachControl(canvas, true);

  // ================= LIGHT =================
  new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  // ================= SUN =================
  const sun =
    BABYLON.MeshBuilder.CreateSphere(
      "sun",
      { diameter: 10 },
      scene
    );

  const sunMaterial =
    new BABYLON.StandardMaterial(
      "sunMaterial",
      scene
    );

  sunMaterial.emissiveColor =
    new BABYLON.Color3(1, 0.5, 0);

  sun.material = sunMaterial;

  // ================= BACKGROUND =================
  const background =
    new BABYLON.Layer(
      "bg",
      "/images/Stars.jpg",
      scene,
      true
    );

  background.texture.uScale = 2;
  background.texture.vScale = 2;

  // ================= GLOW =================
  const glowLayer =
    new BABYLON.GlowLayer(
      "glow",
      scene
    );

  glowLayer.intensity = 0.7;

  // ================= PLANETS =================
  const planets =
    createPlanets(
      scene,
      sun,
      speedState
    );

  // ================= RETURN =================
  return {
    scene,
    planets
  };

}