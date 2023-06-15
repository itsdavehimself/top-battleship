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

}

export default Game;