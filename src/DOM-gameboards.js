const userDiv = document.querySelector('.user-board');
const CPUDiv = document.querySelector('.cpu-board');

function renderBoards(userBoard, cpuBoard) {
  userBoard.getBoard().forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellButton = document.createElement('button');
      const cellValue = cell.getValue();
      cellButton.classList.add('user-board-button');
      cellButton.dataset.cellRow = `${rowIndex}`;
      cellButton.dataset.cellColumn = `${cellIndex}`;
      cellButton.dataset.cellValue = `${cellValue}`;

      if (cell.getValue() > 0) {
        cellButton.classList.add('user-placed-ship');
      }
      userDiv.appendChild(cellButton)
    })
  })

  cpuBoard.getBoard().forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellButton = document.createElement('button');
      const cellValue = cell.getValue();
      cellButton.classList.add('cpu-board-button');
      cellButton.dataset.cellRow = `${rowIndex}`;
      cellButton.dataset.cellColumn = `${cellIndex}`;
      cellButton.dataset.cellValue = `${cellValue}`;
      if (cell.getValue() > 0) {
        cellButton.classList.add('cpu-placed-ship');
      }
      CPUDiv.appendChild(cellButton);
    })
  })
};

function clearBoard() {
  userDiv.replaceChildren();
  CPUDiv.replaceChildren();
};

export { renderBoards, clearBoard }