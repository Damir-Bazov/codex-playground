// Ждём, пока страница загрузится
window.addEventListener('DOMContentLoaded', () => {
  // Берём элементы из разметки
  const circle = document.getElementById('circle');
  const gameArea = document.getElementById('game-area');
  const scoreLabel = document.getElementById('score');

  // Тут будет храниться количество очков
  let score = 0;

  // Обновляем текст "Очки: ..."
  const updateScoreLabel = () => {
    scoreLabel.textContent = `Очки: ${score}`;
  };

  // Перемещаем круг в случайное место внутри зоны
  const moveCircleToRandomPosition = () => {
    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const circleWidth = circle.offsetWidth;
    const circleHeight = circle.offsetHeight;

    // чтобы круг не вылезал за края
    const maxLeft = Math.max(areaWidth - circleWidth, 0);
    const maxTop = Math.max(areaHeight - circleHeight, 0);

    // случайные координаты
    const nextLeft = Math.random() * maxLeft;
    const nextTop = Math.random() * maxTop;

    // применяем
    circle.style.left = `${nextLeft}px`;
    circle.style.top = `${nextTop}px`;
  };

  // Что делаем при клике по кругу
  const handleCircleClick = () => {
    score += 1;               // +1 очко
    updateScoreLabel();       // обновили надпись
    moveCircleToRandomPosition(); // перепрыгнули
  };

  // Вешаем обработчик
  circle.addEventListener('click', handleCircleClick);

  // Поставим круг в случайное место при первом запуске
  moveCircleToRandomPosition();
});
