window.addEventListener('DOMContentLoaded', () => {
  const circle = document.getElementById('circle');
  const gameArea = document.getElementById('game-area');
  const scoreLabel = document.getElementById('score');

  let score = 0;
  let timeLeft = 30;
  let isGameActive = false;
  let timerInterval;

  const updateScoreLabel = () => {
    scoreLabel.textContent = `Очки: ${score}`;
  };

  const moveCircleToRandomPosition = () => {
    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;
    const circleWidth = circle.offsetWidth;
    const circleHeight = circle.offsetHeight;

    const maxLeft = Math.max(areaWidth - circleWidth, 0);
    const maxTop = Math.max(areaHeight - circleHeight, 0);

    const nextLeft = Math.random() * maxLeft;
    const nextTop = Math.random() * maxTop;

    circle.style.left = `${nextLeft}px`;
    circle.style.top = `${nextTop}px`;
  };

  const handleCircleClick = () => {
    if (!isGameActive) return;
    score += 1;
    updateScoreLabel();
    moveCircleToRandomPosition();
  };

  const startGame = () => {
    score = 0;
    timeLeft = 30;
    isGameActive = true;
    updateScoreLabel();
    moveCircleToRandomPosition();

    scoreLabel.textContent = `Очки: ${score} | Время: ${timeLeft}`;

    timerInterval = setInterval(() => {
      timeLeft--;
      scoreLabel.textContent = `Очки: ${score} | Время: ${timeLeft}`;
      if (timeLeft <= 0) endGame();
    }, 1000);
  };

  const endGame = () => {
    isGameActive = false;
    clearInterval(timerInterval);
    circle.style.display = 'none';
    scoreLabel.innerHTML = `⏰ Время вышло!<br>Твой результат: ${score} очков`;
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Играть снова';
    restartBtn.style.marginTop = '12px';
    restartBtn.style.padding = '10px 18px';
    restartBtn.style.border = 'none';
    restartBtn.style.borderRadius = '10px';
    restartBtn.style.background = '#f97316';
    restartBtn.style.color = '#fff';
    restartBtn.style.cursor = 'pointer';
    restartBtn.style.fontSize = '16px';
    restartBtn.addEventListener('click', () => {
      restartBtn.remove();
      circle.style.display = 'block';
      startGame();
    });
    scoreLabel.appendChild(restartBtn);
  };

  circle.addEventListener('click', handleCircleClick);
  moveCircleToRandomPosition();
  startGame();
});
