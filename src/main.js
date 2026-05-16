import "./styles/style.css";

import * as BABYLON from "@babylonjs/core";

import { createScene } from "./scene/createScene";
import { setupModal } from "./ui/modal";
import { setupControls } from "./ui/controls";
import { setupPlanetEditor } from "./ui/planetEditor";

// ================= DOM READY =================
window.addEventListener("DOMContentLoaded", () => {

  // ================= CANVAS =================
  const canvas =
    document.getElementById("renderCanvas");

  // ================= ENGINE =================
  const engine =
    new BABYLON.Engine(canvas, true);

  // ================= SPEED STATE =================
  const speedState = {
    value: 1,
  };

  // ================= SCENE =================
  const {
    scene,
    planets
  } = createScene(
    engine,
    canvas,
    speedState
  );

  // ================= UI =================
  setupModal();

  setupControls(
    speedState,
    planets
  );

  // ================= PLANET EDITOR =================
  const editor =
    setupPlanetEditor();

  // escuchar selección
  window.addEventListener(
    "planetSelected",
    (event) => {

      editor.updateEditor(
        event.detail
      );

    }
  );

  // ================= RENDER LOOP =================
  engine.runRenderLoop(() => {
    scene.render();
  });

  // ================= RESIZE =================
  window.addEventListener("resize", () => {
    engine.resize();
  });

});