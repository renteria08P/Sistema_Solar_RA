export function setupControls(speedState, planets) {
  // ================= BOTONES =================

  const minusButton = document.getElementById("minusBtn");

  const plusButton = document.getElementById("plusBtn");

  const resetButton = document.getElementById("resetBtn");

  const speedValue = document.getElementById("speedValue");

  // ================= VALIDACIÓN =================

  if (!minusButton || !plusButton || !resetButton || !speedValue) {
    console.error("No se encontraron controles UI");

    return;
  }

  // ================= UPDATE UI =================

  const updateUI = () => {
    speedValue.innerText = speedState.value.toFixed(1) + "x";

    // animación visual

    speedValue.classList.add("active");

    setTimeout(() => {
      speedValue.classList.remove("active");
    }, 150);
  };

  // ================= SPEED - =================

  minusButton.onclick = () => {
    speedState.value = Math.max(0.2, speedState.value - 0.2);

    updateUI();

    console.log("Velocidad:", speedState.value);
  };

  // ================= SPEED + =================

  plusButton.onclick = () => {
    speedState.value = Math.min(10, speedState.value + 0.2);

    updateUI();

    console.log("Velocidad:", speedState.value);
  };

  // ================= RESET =================

  resetButton.onclick = () => {
    location.reload();
  };

  // ================= INIT =================

  updateUI();
}
