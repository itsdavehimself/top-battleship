import Player from "./player";
import Gameboard from "./gameboard";
import {
  renderBoards,
  clearBoard,
  placementBoardRender,
  placeShipInstructions,
  displayWinner,
  shipIndicator,
} from "./DOM-gameboards";

function Game() {
  const user = Player("Player One", false);
  const cpu = Player("CPU", true);
  const userBoard = Gameboard();
  const cpuBoard = Gameboard();
  let isGameOver = false;
  let isShiftPressed = false;
  let winner = null;

  const updateBoard = () => {
    clearBoard();
    renderBoards(userBoard, cpuBoard);
  };

  const shipPlacementBoard = (length, orientation) => {
    clearBoard();
    placementBoardRender(userBoard, cpuBoard, length, orientation);
  };

  const cpuShipPlacer = () => {
    const randomCoordinates = () => {
      const x = Math.floor(Math.random() * 9);
      const y = Math.floor(Math.random() * 9);
      return [x, y];
    };

    const directionGenerator = () => {
      const direction = Math.floor(Math.random() * 2);
      if (direction === 0) {
        return "horizontal";
      }
      return "vertical";
    };

    const placeCPUCarrier = () => {
      const carrier = cpuBoard.placeShip(
        randomCoordinates(),
        directionGenerator(),
        5,
        1
      );
      if (carrier === null) {
        placeCPUCarrier();
      }
      return carrier;
    };

    const placeCPUBattleship = () => {
      const battleship = cpuBoard.placeShip(
        randomCoordinates(),
        directionGenerator(),
        4,
        2
      );
      if (battleship === null) {
        placeCPUBattleship();
      }
      return battleship;
    };

    const placeCPUDestroyer = () => {
      const destroyer = cpuBoard.placeShip(
        randomCoordinates(),
        directionGenerator(),
        3,
        3
      );
      if (destroyer === null) {
        placeCPUDestroyer();
      }
      return destroyer;
    };

    const placeCPUSubmarine = () => {
      const submarine = cpuBoard.placeShip(
        randomCoordinates(),
        directionGenerator(),
        3,
        4
      );
      if (submarine === null) {
        placeCPUSubmarine();
      }
      return submarine;
    };

    const placeCPUPatrolBoat = () => {
      const patrolBoat = cpuBoard.placeShip(
        randomCoordinates(),
        directionGenerator(),
        2,
        5
      );
      if (patrolBoat === null) {
        placeCPUPatrolBoat();
      }
      return patrolBoat;
    };

    placeCPUCarrier();
    placeCPUBattleship();
    placeCPUDestroyer();
    placeCPUSubmarine();
    placeCPUPatrolBoat();
    updateBoard();
  };

  function getUserMove() {
    return new Promise((resolve) => {
      const CPUDiv = document.querySelectorAll(".cpu-board-button");
      const clickHandler = (div) => {
        resolve([Number(div.dataset.cellRow), Number(div.dataset.cellColumn)]);
        div.disabled = true;
        div.removeEventListener("click", clickHandler);
      };
      CPUDiv.forEach((div) =>
        div.addEventListener("click", () => clickHandler(div))
      );
    });
  }

  async function gameTurn() {
    const userInput = await getUserMove();
    user.takeTurn(cpuBoard, userInput);
    const cpuSunkShips = cpuBoard.getSunkShips();
    shipIndicator(cpuSunkShips, "cpu");
    cpu.takeTurn(userBoard);
    const userSunkShips = userBoard.getSunkShips();
    shipIndicator(userSunkShips, "user");
    if (cpuBoard.reportSunk()) {
      winner = "user";
      isGameOver = true;
    }
    if (userBoard.reportSunk()) {
      winner = "cpu";
      isGameOver = true;
    }
  }

  function userShipCoordinates() {
    return new Promise((resolve) => {
      const UserDiv = document.querySelectorAll(".user-board-button");
      const clickHandler = (div) => {
        resolve([Number(div.dataset.cellRow), Number(div.dataset.cellColumn)]);
        div.removeEventListener("click", clickHandler);
      };
      UserDiv.forEach((div) =>
        div.addEventListener("click", () => clickHandler(div))
      );
      const handleKeyDown = (event) => {
        if (event.key === "Shift") {
          isShiftPressed = true;
        }
      };

      const handleKeyUp = (event) => {
        if (event.key === "Shift") {
          isShiftPressed = false;
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
    });
  }

  async function userCarrierPlacer() {
    const userCarrierPosition = await userShipCoordinates();
    const orientation = isShiftPressed ? "horizontal" : "vertical";
    const userCarrier = userBoard.placeShip(
      userCarrierPosition,
      orientation,
      5,
      1
    );
    if (userCarrier === null) {
      return userCarrierPlacer();
    }
    shipPlacementBoard(4, isShiftPressed);
    placeShipInstructions(4);
    return true;
  }

  async function userBattleshipPlacer() {
    const userCarrierPosition = await userShipCoordinates();
    const orientation = isShiftPressed ? "horizontal" : "vertical";
    const userCarrier = userBoard.placeShip(
      userCarrierPosition,
      orientation,
      4,
      2
    );
    if (userCarrier === null) {
      return userBattleshipPlacer();
    }
    shipPlacementBoard(3, isShiftPressed);
    placeShipInstructions(3);
    return true;
  }

  async function userDestroyerPlacer() {
    const userCarrierPosition = await userShipCoordinates();
    const orientation = isShiftPressed ? "horizontal" : "vertical";
    const userCarrier = userBoard.placeShip(
      userCarrierPosition,
      orientation,
      3,
      3
    );
    if (userCarrier === null) {
      return userDestroyerPlacer();
    }
    shipPlacementBoard(3, isShiftPressed);
    placeShipInstructions(2);
    return true;
  }

  async function userSubmarinePlacer() {
    const userCarrierPosition = await userShipCoordinates();
    const orientation = isShiftPressed ? "horizontal" : "vertical";
    const userCarrier = userBoard.placeShip(
      userCarrierPosition,
      orientation,
      3,
      4
    );
    if (userCarrier === null) {
      return userSubmarinePlacer();
    }
    shipPlacementBoard(2, isShiftPressed);
    placeShipInstructions(1);
    return true;
  }

  async function userPatrolBoatPlacer() {
    const userCarrierPosition = await userShipCoordinates();
    const orientation = isShiftPressed ? "horizontal" : "vertical";
    const userCarrier = userBoard.placeShip(
      userCarrierPosition,
      orientation,
      2,
      5
    );
    if (userCarrier === null) {
      return userPatrolBoatPlacer();
    }
    updateBoard();
    return true;
  }

  const resetGame = () => {
    isGameOver = false;
    isShiftPressed = false;
    winner = null;
    userBoard.reset();
    cpuBoard.reset();
    user.reset();
    cpu.reset();
    shipIndicator(cpuBoard.getSunkShips(), "cpu");
    shipIndicator(userBoard.getSunkShips(), "user");
    shipPlacementBoard(5, isShiftPressed);
    placeShipInstructions(5);
    placeShipPhase();
  };

  const runGame = async () => {
    while (!isGameOver) {
      await gameTurn();
    }
    displayWinner(winner);
    const playAgainBtn = document.querySelector(".play-again-btn");
    playAgainBtn.addEventListener("click", resetGame);
  };

  async function placeShipPhase() {
    const isUserCarrier = await userCarrierPlacer();
    const isUserBattleship = await userBattleshipPlacer();
    const isUserDestroyer = await userDestroyerPlacer();
    const isUserSubmarine = await userSubmarinePlacer();
    const isUserPatrolBoat = await userPatrolBoatPlacer();
    if (
      isUserCarrier &&
      isUserBattleship &&
      isUserDestroyer &&
      isUserSubmarine &&
      isUserPatrolBoat
    ) {
      cpuShipPlacer();
      runGame();
    }
  }

  shipPlacementBoard(5, isShiftPressed);
  placeShipInstructions(5);

  return { placeShipPhase };
}

export default Game;
