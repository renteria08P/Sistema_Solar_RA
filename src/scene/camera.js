import { ArcRotateCamera, Vector3 } from "@babylonjs/core";

export function createCamera(scene, canvas) {
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 2.5,
    120,
    Vector3.Zero(),
    scene,
  );

  camera.attachControl(canvas, true);

  return camera;
}
