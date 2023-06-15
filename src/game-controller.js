import Player from "./player";
import Gameboard from "./gameboard";
import { renderBoards, clearBoard } from "./DOM-gameboards";

function Game() {
  const user = Player('Player One', false);
  const cpu = Player('CPU', true);
  const userBoard = Gameboard();
  const cpuBoard = Gameboard();
  const isGameOver = false;
  const isCtrlPressed = false;

  
  const updateBoard = () => {
    clearBoard();
    renderBoards(userBoard, cpuBoard);
  }

  const cpuShipPlacer = () => {
    const randomCoordinates = () => {
      const x = Math.floor(Math.random() * 9);
      const y = Math.floor(Math.random() * 9);
      return [x, y]
    }
    
    const directionGenerator = () => {
      const direction = Math.floor(Math.random() * 2);
      if (direction === 0) {
        return 'horizontal'
      }
      return 'vertical'
    }

    const placeCPUCarrier = () => {
      const carrier = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 5, 1);
      if (carrier === null) {
        placeCPUCarrier();
      }
      return carrier;
    }

    const placeCPUBattleship = () => {
      const battleship = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 4, 2);
      if (battleship === null) {
        placeCPUBattleship();
      }
      return battleship;
    }

    const placeCPUDestroyer = () => {
      const destroyer = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 3, 3);
      if (destroyer === null) {
        placeCPUDestroyer();
      }
      return destroyer;
    }

    const placeCPUSubmarine = () => {
      const submarine = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 3, 4);
      if (submarine === null) {
        placeCPUSubmarine();
      }
      return submarine;
    }

    const placeCPUPatrolBoat = () => {
      const patrolBoat = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 2, 5);
      if (patrolBoat === null) {
        placeCPUPatrolBoat();
      }
      return patrolBoat;
    }

    placeCPUCarrier();
    placeCPUBattleship();
    placeCPUDestroyer();
    placeCPUSubmarine();
    placeCPUPatrolBoat();
    updateBoard();
  }
 
}

export default Game;