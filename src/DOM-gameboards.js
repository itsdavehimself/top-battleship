const userDiv = document.querySelector(".user-board");
const CPUDiv = document.querySelector(".cpu-board");
const placeShipDiv = document.querySelector(".place-ship-info");
const shiftBtnDiv = document.querySelector(".shift-info");
const playAgainDiv = document.querySelector(".play-again");
const enemyShips = document.querySelector(".cpu-placed-ships");

function displayWinner(winner) {
  placeShipDiv.replaceChildren();
  const winnerMsg = document.createElement("p");
  if (winner === "user") {
    winnerMsg.textContent = "Congratulations, you win!";
  } else {
    winnerMsg.textContent = "You lost all your ships. Game over.";
  }
  placeShipDiv.appendChild(winnerMsg);
  const playAgainBtn = document.createElement("button");
  playAgainBtn.classList.add("play-again-btn");
  playAgainBtn.textContent = "Play again?";
  playAgainDiv.appendChild(playAgainBtn);
}

function renderBoards(userBoard, cpuBoard) {
  placeShipDiv.replaceChildren();
  shiftBtnDiv.replaceChildren();
  const attackInfo = document.createElement("p");
  attackInfo.textContent = "Click on the enemy board to attack";
  placeShipDiv.appendChild(attackInfo);

  userBoard.getBoard().forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellButton = document.createElement("button");
      const cellValue = cell.getValue();
      cellButton.classList.add("user-board-button");
      cellButton.dataset.cellRow = `${rowIndex}`;
      cellButton.dataset.cellColumn = `${cellIndex}`;
      cellButton.dataset.cellValue = `${cellValue}`;

      if (cell.getValue() > 0) {
        cellButton.classList.add("user-placed-ship");
      }
      userDiv.appendChild(cellButton);
    });
  });

  cpuBoard.getBoard().forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellButton = document.createElement("button");
      const cellValue = cell.getValue();
      cellButton.classList.add("cpu-board-button");
      cellButton.dataset.cellRow = `${rowIndex}`;
      cellButton.dataset.cellColumn = `${cellIndex}`;
      cellButton.dataset.cellValue = `${cellValue}`;
      if (cell.getValue() > 0) {
        cellButton.classList.add("cpu-placed-ship");
      }
      CPUDiv.appendChild(cellButton);
    });
  });
}

function placementBoardRender(userBoard, cpuBoard, length) {
  let lastHoveredCell = null;

  const handleUserBoardHoverCtrl = (cell) => {
    const { row, column } = cell;

    for (let j = column; j < column + length; j += 1) {
      const adjacentButton = document.querySelector(
        `.user-board-button[data-cell-row="${row}"][data-cell-column="${j}"]`
      );
      if (adjacentButton) {
        adjacentButton.classList.add("ship-placement");
      }
    }
  };

  const handleUserBoardHover = (cell) => {
    const { row, column } = cell;

    for (let i = row; i < row + length; i += 1) {
      const adjacentButton = document.querySelector(
        `.user-board-button[data-cell-row="${i}"][data-cell-column="${column}"]`
      );
      if (adjacentButton) {
        adjacentButton.classList.add("ship-placement");
      }
    }
  };

  const refreshBoard = () => {
    const allButtons = document.querySelectorAll(".user-board-button");
    allButtons.forEach((button) => {
      button.classList.remove("ship-placement");
    });
  };

  const handleMouseOver = (e) => {
    const button = e.target;
    const row = Number(button.dataset.cellRow);
    const column = Number(button.dataset.cellColumn);
    const cell = { row, column };
    lastHoveredCell = cell;

    if (e.shiftKey) {
      refreshBoard();
      handleUserBoardHoverCtrl(cell);
    } else {
      refreshBoard();
      handleUserBoardHover(cell);
    }
  };

  const handleClick = () => {
    lastHoveredCell = null;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Shift") {
      if (lastHoveredCell) {
        refreshBoard();
        handleUserBoardHoverCtrl(lastHoveredCell);
      }
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Shift") {
      if (lastHoveredCell) {
        refreshBoard();
        handleUserBoardHover(lastHoveredCell);
      }
    }
  };

  userBoard.getBoard().forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellButton = document.createElement("button");
      const cellValue = cell.getValue();
      cellButton.classList.add("user-board-button");
      cellButton.dataset.cellRow = `${rowIndex}`;
      cellButton.dataset.cellColumn = `${cellIndex}`;
      cellButton.dataset.cellValue = `${cellValue}`;

      cellButton.addEventListener("mouseover", handleMouseOver);
      cellButton.addEventListener("mouseout", refreshBoard);
      cellButton.addEventListener("click", handleClick);

      if (cell.getValue() > 0) {
        cellButton.classList.add("user-placed-ship");
      }
      userDiv.appendChild(cellButton);
    });
  });

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  cpuBoard.getBoard().forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellButton = document.createElement("button");
      const cellValue = cell.getValue();
      cellButton.classList.add("cpu-board-button");
      cellButton.dataset.cellRow = `${rowIndex}`;
      cellButton.dataset.cellColumn = `${cellIndex}`;
      cellButton.dataset.cellValue = `${cellValue}`;
      if (cell.getValue() > 0) {
        cellButton.classList.add("cpu-placed-ship");
      }
      CPUDiv.appendChild(cellButton);
    });
  });
}

function clearBoard() {
  userDiv.replaceChildren();
  CPUDiv.replaceChildren();
}

function hitOrMiss(coordinateX, coordinateY, isCPU = false) {
  if (isCPU) {
    const cell = document.querySelector(
      `.user-board-button[data-cell-row = "${coordinateX}"][data-cell-column = "${coordinateY}"]`
    );
    if (cell.classList.contains("user-placed-ship")) {
      cell.classList.add("hit");
    } else {
      cell.classList.add("miss");
    }
  } else {
    const cell = document.querySelector(
      `.cpu-board-button[data-cell-row = "${coordinateX}"][data-cell-column = "${coordinateY}"]`
    );
    if (cell.classList.contains("cpu-placed-ship")) {
      cell.classList.add("hit");
    } else {
      cell.classList.add("miss");
    }
  }
}

function placeShipInstructions(ship) {
  placeShipDiv.replaceChildren();
  shiftBtnDiv.replaceChildren();
  playAgainDiv.replaceChildren();
  const ctrlInfo = document.createElement("p");
  ctrlInfo.textContent = "Hold shift to rotate";
  shiftBtnDiv.appendChild(ctrlInfo);
  const placeShipText = document.createElement("p");
  if (ship === 5) {
    placeShipText.textContent = "Click on your board to place your carrier";
  } else if (ship === 4) {
    placeShipText.textContent = "Click on your board to place your battleship";
  } else if (ship === 3) {
    placeShipText.textContent = "Click on your board to place your destroyer";
  } else if (ship === 2) {
    placeShipText.textContent = "Click on your board to place your submarine";
  } else {
    placeShipText.textContent = "Click on your board to place your patrol boat";
  }
  placeShipDiv.appendChild(placeShipText);
}

function shipIndicator(sunkShipsArr, player) {
  const containerClasses = {
    1: `${player}-carrier-container`,
    2: `${player}-battleship-container`,
    3: `${player}-destroyer-container`,
    4: `${player}-submarine-container`,
    5: `${player}-patrol-boat-container`,
  };

  Object.entries(containerClasses).forEach(([shipNum, containerClass]) => {
    const container = document.getElementsByClassName(containerClass)[0];
    const ships = Array.from(container.getElementsByClassName("user-ship"));
    if (sunkShipsArr.includes(parseInt(shipNum, 10))) {
      ships.forEach((ship) => ship.classList.add("sunk"));
    } else {
      ships.forEach((ship) => ship.classList.remove("sunk"));
    }
  });
}

export {
  renderBoards,
  clearBoard,
  hitOrMiss,
  placementBoardRender,
  placeShipInstructions,
  displayWinner,
  shipIndicator,
};
