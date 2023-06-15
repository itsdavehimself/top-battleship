import Ship from "./ship-factory";
import Cell from "./cell";

function Gameboard() {
  const rows = 10;
  const columns = 10;
  const board = [];
  const placedShips = [];
  const movesMade = [];
  let allSunk = false;

  const makeBoard = () => {
    for (let i = 0; i < rows; i += 1) {
      board[i] = [];
      for (let j = 0; j < columns; j += 1) {
        board[i].push(Cell());
      }
    }
  }

  makeBoard();

  const getBoard = () => board;

  const checkIfAllSunk = () => {
    if (placedShips.every(obj => obj.sunk === true)) {
      allSunk = true;
    }
  }

  const reportSunk = () => allSunk

  const placeShip = (startPos, direction, length, shipType) => {
    let validMove = true;
    if (direction === 'vertical') {
      for (let i = 0; i < length; i += 1) {
        if (board[startPos[0] + i][startPos[1]].getValue() !== 0) {
          validMove = false;
          return;
          }
        }
      for (let i = 0; i < length; i += 1) {
        if (validMove) {
          board[startPos[0] + i][startPos[1]].markCell(shipType);
        }
      }
      } else {
      for (let i = 0; i < length; i += 1) {
        if (board[startPos[0]][startPos[1] + i].getValue() !== 0) {
          validMove = false;
          return;
          }
        }
      for (let i = 0; i < length; i += 1) {
        if (validMove) {
          board[startPos[0]][startPos[1] + i].markCell(shipType);
        }
      }
      }
      const newShip = Ship(length, shipType);
      placedShips.push(newShip);
    }

  const receiveAttack = (coordinates) => {
    if (!movesMade.find(moves => moves.toString() === coordinates.toString())) {
      if (board[coordinates[0]][coordinates[1]].getValue() !== 0) {
        const shipType = board[coordinates[0]][coordinates[1]].getValue()
        const hitShip = placedShips.find(ship => ship.shipType === shipType)
        hitShip.hit();
        movesMade.push(coordinates);
        checkIfAllSunk();
      } else {
        movesMade.push(coordinates);
      };
    }
  }

  return { getBoard, placeShip, receiveAttack }
}

export default Gameboard;