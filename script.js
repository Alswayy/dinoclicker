// Завантаження прогресу з localStorage
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let pointsPerClick = localStorage.getItem('pointsPerClick') ? parseInt(localStorage.getItem('pointsPerClick')) : 1;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 10;

// Оновлення відображення очок на сторінці
document.getElementById('score').innerText = score;
document.getElementById('upgrade-cost').innerText = upgradeCost;

// Функція для додавання очок
function addScore() {
  score += pointsPerClick;
  document.getElementById('score').innerText = score;
  localStorage.setItem('score', score); // Збереження очок у localStorage
}

// Функція для покращення
function upgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    pointsPerClick += 1;
    upgradeCost = Math.floor(upgradeCost * 1.5);

    document.getElementById('score').innerText = score;
    document.getElementById('upgrade-cost').innerText = upgradeCost;

    // Збереження всіх змін у localStorage
    localStorage.setItem('score', score);
    localStorage.setItem('pointsPerClick', pointsPerClick);
    localStorage.setItem('upgradeCost', upgradeCost);
  }
}
