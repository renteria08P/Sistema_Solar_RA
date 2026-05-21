let selectedPlanet = null;

export function setupPlanetEditor() {
  // ================= ELEMENTOS =================

  const panel = document.getElementById("planetEditor");

  const planetTitle = document.getElementById("editorPlanetName");

  const massSlider = document.getElementById("planetMass");

  const massValue = document.getElementById("planetMassValue");

  // ================= FUNCIÓN =================

  const updateEditor = (planet) => {
    if (!planet) return;

    selectedPlanet = planet;

    // mostrar panel
    panel.style.display = "block";

    // nombre
    planetTitle.innerText = planet.name;

    // MASS
    massSlider.value = planet.mass;

    massValue.innerText = planet.mass.toFixed(2);
  };

  // ================= MASS EVENT =================

  massSlider.oninput = () => {
    if (!selectedPlanet) return;

    selectedPlanet.mass = Number(massSlider.value);

    massValue.innerText = selectedPlanet.mass.toFixed(2);
  };

  // ================= RETURN =================

  return {
    updateEditor,
  };
}
