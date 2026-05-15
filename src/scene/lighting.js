import { HemisphericLight, Vector3 } from "@babylonjs/core";

export function createLight(scene) {
  return new HemisphericLight("light", new Vector3(0, 1, 0), scene);
}
