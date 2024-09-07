function createCelestialObjects() {
  const starsContainer = document.querySelector(".stars");
  const galaxiesContainer = document.querySelector(".galaxies");
  const shootingStarsContainer = document.querySelector(".shooting-stars");
  const asteroidBelt = document.querySelector(".asteroid-belt");

  const starCount = 1000;
  const galaxyCount = 50;
  const shootingStarCount = 5;
  const asteroidCount = 100;

  const galaxyColors = ["#FFD700", "#87CEEB", "#FFA500", "#FF69B4", "#00CED1"];

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = star.style.height = `${Math.random() * 2}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 2}s`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    starsContainer.appendChild(star);
  }

  for (let i = 0; i < galaxyCount; i++) {
    const galaxy = document.createElement("div");
    galaxy.className = "galaxy";
    const size = Math.random() * 20 + 5;
    galaxy.style.width = `${size}px`;
    galaxy.style.height = `${size / 2}px`;
    galaxy.style.left = `${Math.random() * 100}%`;
    galaxy.style.top = `${Math.random() * 100}%`;
    galaxy.style.backgroundColor =
      galaxyColors[Math.floor(Math.random() * galaxyColors.length)];
    galaxy.style.transform = `rotate(${Math.random() * 360}deg)`;
    galaxiesContainer.appendChild(galaxy);
  }

  for (let i = 0; i < shootingStarCount; i++) {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.left = `${Math.random() * 100}%`;
    shootingStar.style.top = `${Math.random() * 100}%`;
    shootingStar.style.animationDelay = `${Math.random() * 5}s`;
    shootingStarsContainer.appendChild(shootingStar);
  }

  for (let i = 0; i < asteroidCount; i++) {
    const asteroid = document.createElement("div");
    asteroid.className = "asteroid";
    asteroid.style.width = asteroid.style.height = `${Math.random() * 3 + 1}px`;
    asteroid.style.animationDuration = `${Math.random() * 10 + 10}s`;
    asteroid.style.animationDelay = `${Math.random() * 10}s`;
    asteroidBelt.appendChild(asteroid);
  }
}

window.addEventListener("load", createCelestialObjects);
