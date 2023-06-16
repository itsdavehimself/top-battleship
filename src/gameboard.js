import Ship from "./ship-factory";
import Cell from "./cell";

function Gameboard() {
  const rows = 10;
  const columns = 10;
  const board = [];
  const placedShips = [];
  const movesMade = [];
  const successfulHits = [];
  const missedShots = [];
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

  const reset = () => {
    placedShips.length = 0;
    movesMade.length = 0;
    successfulHits.length = 0;
    missedShots.length = 0;
    allSunk = false;
    makeBoard();
  };

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
        if (startPos[0] + i > 9 || board[startPos[0] + i][startPos[1]].getValue() !== 0) {
          validMove = false;
          return null;
          }
        }
      for (let i = 0; i < length; i += 1) {
        if (validMove) {
          board[startPos[0] + i][startPos[1]].markCell(shipType);
        }
      }
      } else {
      for (let i = 0; i < length; i += 1) {
        if (board[startPos[0]][startPos[1] + i] === undefined || board[startPos[0]][startPos[1] + i].getValue() !== 0) {
          validMove = false;
          return null;
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
      return newShip
    }

    const getSunkShips = () => {
      const sunkShips = placedShips.filter(ship => ship.sunk === true);
      return sunkShips.map(ship => ship.shipType);
    }

    const receiveAttack = (coordinates) => {
      if (!movesMade.find(moves => moves.toString() === coordinates.toString())) {
        if (board[coordinates[0]][coordinates[1]].getValue() !== 0) {
          const shipType = board[coordinates[0]][coordinates[1]].getValue();
          const hitShip = placedShips.find(ship => ship.shipType === shipType);
          hitShip.hit();
          movesMade.push(coordinates);
          successfulHits.push(coordinates);
          getSunkShips();
          checkIfAllSunk();
          return 'hit';
        }
        movesMade.push(coordinates);
        missedShots.push(coordinates);
        return 'miss';
      }
      return undefined
    };

  return { getBoard, placeShip, receiveAttack, reportSunk, movesMade, placedShips, reset, getSunkShips}
}

export default Gameboard;