export function showPlanetModal(planet) {
  document.getElementById("planetImage").src = `/images/${planet.name}.jpg`;

  document.getElementById("planetName").innerText = planet.name;

  document.getElementById("planetDescription").innerText = planet.description;

  document.getElementById("planetModal").style.display = "flex";
}

export function setupModal() {
  document.getElementById("closeModal").onclick = () => {
    document.getElementById("planetModal").style.display = "none";
  };
}
