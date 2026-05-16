export function setupControls(
  speedState,
  planets
) {

  // ================= BOTONES =================
  const minusButton =
    document.getElementById("minusBtn");

  const plusButton =
    document.getElementById("plusBtn");

  const speedValue =
    document.getElementById("speedValue");

  // ================= SLIDER MASA =================
  const earthMassSlider =
    document.getElementById("earthMass");

  // VALIDACIÓN
  if (
    !minusButton ||
    !plusButton ||
    !speedValue
  ) return;

  // ================= BUSCAR TIERRA =================
  const earth = planets.find(
    (p) => p.name === "Earth"
  );

  // ================= UPDATE UI =================
  const updateUI = () => {

    speedValue.innerText =
      speedState.value.toFixed(1) + "x";

    // animación
    speedValue.classList.add("active");

    setTimeout(() => {
      speedValue.classList.remove("active");
    }, 150);

  };

  // ================= SPEED - =================
  minusButton.onclick = () => {

    speedState.value =
      Math.max(
        0.2,
        speedState.value - 0.2
      );

    updateUI();

  };

  // ================= SPEED + =================
  plusButton.onclick = () => {

    speedState.value += 0.2;

    updateUI();

  };

  // ================= MASS CONTROL =================
  if (earthMassSlider && earth) {

    earthMassSlider.oninput = () => {

      earth.mass =
        Number(earthMassSlider.value);

      console.log(
        "Nueva masa Tierra:",
        earth.mass
      );

    };

  }

  // INIT UI
  updateUI();
}