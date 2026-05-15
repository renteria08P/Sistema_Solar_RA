import "./styles/style.css";

import * as BABYLON from "@babylonjs/core";

import { createScene } from "./scene/createScene";
import { setupModal } from "./ui/modal";
import { setupControls } from "./ui/controls";

// ================= DOM READY =================
window.addEventListener("DOMContentLoaded", () => {
  // CANVAS
  const canvas = document.getElementById("renderCanvas");

  // ENGINE
  const engine = new BABYLON.Engine(canvas, true);

  // SPEED STATE
  const speedState = {
    value: 1,
  };

  // SCENE
  const scene = createScene(engine, canvas, speedState);

  // UI
  setupModal();
  setupControls(speedState);

  // RENDER LOOP
  engine.runRenderLoop(() => {
    scene.render();
  });

  // RESIZE
  window.addEventListener("resize", () => {
    engine.resize();
  });
});
