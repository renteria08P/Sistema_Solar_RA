export function setupControls(speedState) {
  const minusButton = document.getElementById("minusBtn");
  const plusButton = document.getElementById("plusBtn");
  const speedValue = document.getElementById("speedValue");

  if (!minusButton || !plusButton || !speedValue) return;

  const updateUI = () => {
    speedValue.innerText = speedState.value.toFixed(1) + "x";

    // activar animación
    speedValue.classList.add("active");

    setTimeout(() => {
      speedValue.classList.remove("active");
    }, 150);
  };

  minusButton.onclick = () => {
    speedState.value = Math.max(0.2, speedState.value - 0.2);
    updateUI();
  };

  plusButton.onclick = () => {
    speedState.value += 0.2;
    updateUI();
  };

  updateUI();
}
