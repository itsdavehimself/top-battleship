function Gameboard() {
  const rows = 10;
  const columns = 10;
  const board = [];

  const makeBoard = () => {
    for (let i = 0; i < rows; i += 1) {
      board[i] = [];
      for (let j = 0; j < columns; j += 1) {
        board[i].push(0);
      }
    }
  }

  makeBoard();

  const getBoard = () => board;

  return { getBoard, board }
}

export default Gameboard;