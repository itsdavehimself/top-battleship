/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM-gameboards.js":
/*!*******************************!*\
  !*** ./src/DOM-gameboards.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearBoard: () => (/* binding */ clearBoard),\n/* harmony export */   displayWinner: () => (/* binding */ displayWinner),\n/* harmony export */   hitOrMiss: () => (/* binding */ hitOrMiss),\n/* harmony export */   placeShipInstructions: () => (/* binding */ placeShipInstructions),\n/* harmony export */   placementBoardRender: () => (/* binding */ placementBoardRender),\n/* harmony export */   renderBoards: () => (/* binding */ renderBoards),\n/* harmony export */   shipIndicator: () => (/* binding */ shipIndicator)\n/* harmony export */ });\nconst userDiv = document.querySelector(\".user-board\");\nconst CPUDiv = document.querySelector(\".cpu-board\");\nconst placeShipDiv = document.querySelector(\".place-ship-info\");\nconst shiftBtnDiv = document.querySelector(\".shift-info\");\nconst playAgainDiv = document.querySelector(\".play-again\");\nconst enemyShips = document.querySelector(\".cpu-placed-ships\");\nfunction displayWinner(winner) {\n  placeShipDiv.replaceChildren();\n  const winnerMsg = document.createElement(\"p\");\n  if (winner === \"user\") {\n    winnerMsg.textContent = \"Congratulations, you win!\";\n  } else {\n    winnerMsg.textContent = \"You lost all your ships. Game over.\";\n  }\n  placeShipDiv.appendChild(winnerMsg);\n  const playAgainBtn = document.createElement(\"button\");\n  playAgainBtn.classList.add(\"play-again-btn\");\n  playAgainBtn.textContent = \"Play again?\";\n  playAgainDiv.appendChild(playAgainBtn);\n}\nfunction renderBoards(userBoard, cpuBoard) {\n  placeShipDiv.replaceChildren();\n  shiftBtnDiv.replaceChildren();\n  const attackInfo = document.createElement(\"p\");\n  attackInfo.textContent = \"Click on the enemy board to attack\";\n  placeShipDiv.appendChild(attackInfo);\n  userBoard.getBoard().forEach((row, rowIndex) => {\n    row.forEach((cell, cellIndex) => {\n      const cellButton = document.createElement(\"button\");\n      const cellValue = cell.getValue();\n      cellButton.classList.add(\"user-board-button\");\n      cellButton.dataset.cellRow = `${rowIndex}`;\n      cellButton.dataset.cellColumn = `${cellIndex}`;\n      cellButton.dataset.cellValue = `${cellValue}`;\n      if (cell.getValue() > 0) {\n        cellButton.classList.add(\"user-placed-ship\");\n      }\n      userDiv.appendChild(cellButton);\n    });\n  });\n  cpuBoard.getBoard().forEach((row, rowIndex) => {\n    row.forEach((cell, cellIndex) => {\n      const cellButton = document.createElement(\"button\");\n      const cellValue = cell.getValue();\n      cellButton.classList.add(\"cpu-board-button\");\n      cellButton.dataset.cellRow = `${rowIndex}`;\n      cellButton.dataset.cellColumn = `${cellIndex}`;\n      cellButton.dataset.cellValue = `${cellValue}`;\n      if (cell.getValue() > 0) {\n        cellButton.classList.add(\"cpu-placed-ship\");\n      }\n      CPUDiv.appendChild(cellButton);\n    });\n  });\n}\nfunction placementBoardRender(userBoard, cpuBoard, length) {\n  let lastHoveredCell = null;\n  const handleUserBoardHoverCtrl = cell => {\n    const {\n      row,\n      column\n    } = cell;\n    for (let j = column; j < column + length; j += 1) {\n      const adjacentButton = document.querySelector(`.user-board-button[data-cell-row=\"${row}\"][data-cell-column=\"${j}\"]`);\n      if (adjacentButton) {\n        adjacentButton.classList.add(\"ship-placement\");\n      }\n    }\n  };\n  const handleUserBoardHover = cell => {\n    const {\n      row,\n      column\n    } = cell;\n    for (let i = row; i < row + length; i += 1) {\n      const adjacentButton = document.querySelector(`.user-board-button[data-cell-row=\"${i}\"][data-cell-column=\"${column}\"]`);\n      if (adjacentButton) {\n        adjacentButton.classList.add(\"ship-placement\");\n      }\n    }\n  };\n  const refreshBoard = () => {\n    const allButtons = document.querySelectorAll(\".user-board-button\");\n    allButtons.forEach(button => {\n      button.classList.remove(\"ship-placement\");\n    });\n  };\n  const handleMouseOver = e => {\n    const button = e.target;\n    const row = Number(button.dataset.cellRow);\n    const column = Number(button.dataset.cellColumn);\n    const cell = {\n      row,\n      column\n    };\n    lastHoveredCell = cell;\n    if (e.shiftKey) {\n      refreshBoard();\n      handleUserBoardHoverCtrl(cell);\n    } else {\n      refreshBoard();\n      handleUserBoardHover(cell);\n    }\n  };\n  const handleClick = () => {\n    lastHoveredCell = null;\n  };\n  const handleKeyDown = event => {\n    if (event.key === \"Shift\") {\n      if (lastHoveredCell) {\n        refreshBoard();\n        handleUserBoardHoverCtrl(lastHoveredCell);\n      }\n    }\n  };\n  const handleKeyUp = event => {\n    if (event.key === \"Shift\") {\n      if (lastHoveredCell) {\n        refreshBoard();\n        handleUserBoardHover(lastHoveredCell);\n      }\n    }\n  };\n  userBoard.getBoard().forEach((row, rowIndex) => {\n    row.forEach((cell, cellIndex) => {\n      const cellButton = document.createElement(\"button\");\n      const cellValue = cell.getValue();\n      cellButton.classList.add(\"user-board-button\");\n      cellButton.dataset.cellRow = `${rowIndex}`;\n      cellButton.dataset.cellColumn = `${cellIndex}`;\n      cellButton.dataset.cellValue = `${cellValue}`;\n      cellButton.addEventListener(\"mouseover\", handleMouseOver);\n      cellButton.addEventListener(\"mouseout\", refreshBoard);\n      cellButton.addEventListener(\"click\", handleClick);\n      if (cell.getValue() > 0) {\n        cellButton.classList.add(\"user-placed-ship\");\n      }\n      userDiv.appendChild(cellButton);\n    });\n  });\n  window.addEventListener(\"keydown\", handleKeyDown);\n  window.addEventListener(\"keyup\", handleKeyUp);\n  cpuBoard.getBoard().forEach((row, rowIndex) => {\n    row.forEach((cell, cellIndex) => {\n      const cellButton = document.createElement(\"button\");\n      const cellValue = cell.getValue();\n      cellButton.classList.add(\"cpu-board-button\");\n      cellButton.dataset.cellRow = `${rowIndex}`;\n      cellButton.dataset.cellColumn = `${cellIndex}`;\n      cellButton.dataset.cellValue = `${cellValue}`;\n      if (cell.getValue() > 0) {\n        cellButton.classList.add(\"cpu-placed-ship\");\n      }\n      CPUDiv.appendChild(cellButton);\n    });\n  });\n}\nfunction clearBoard() {\n  userDiv.replaceChildren();\n  CPUDiv.replaceChildren();\n}\nfunction hitOrMiss(coordinateX, coordinateY) {\n  let isCPU = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  if (isCPU) {\n    const cell = document.querySelector(`.user-board-button[data-cell-row = \"${coordinateX}\"][data-cell-column = \"${coordinateY}\"]`);\n    if (cell.classList.contains(\"user-placed-ship\")) {\n      cell.classList.add(\"hit\");\n    } else {\n      cell.classList.add(\"miss\");\n    }\n  } else {\n    const cell = document.querySelector(`.cpu-board-button[data-cell-row = \"${coordinateX}\"][data-cell-column = \"${coordinateY}\"]`);\n    if (cell.classList.contains(\"cpu-placed-ship\")) {\n      cell.classList.add(\"hit\");\n    } else {\n      cell.classList.add(\"miss\");\n    }\n  }\n}\nfunction placeShipInstructions(ship) {\n  placeShipDiv.replaceChildren();\n  shiftBtnDiv.replaceChildren();\n  playAgainDiv.replaceChildren();\n  const ctrlInfo = document.createElement(\"p\");\n  ctrlInfo.textContent = \"Hold shift to rotate\";\n  shiftBtnDiv.appendChild(ctrlInfo);\n  const placeShipText = document.createElement(\"p\");\n  if (ship === 5) {\n    placeShipText.textContent = \"Click on your board to place your carrier\";\n  } else if (ship === 4) {\n    placeShipText.textContent = \"Click on your board to place your battleship\";\n  } else if (ship === 3) {\n    placeShipText.textContent = \"Click on your board to place your destroyer\";\n  } else if (ship === 2) {\n    placeShipText.textContent = \"Click on your board to place your submarine\";\n  } else {\n    placeShipText.textContent = \"Click on your board to place your patrol boat\";\n  }\n  placeShipDiv.appendChild(placeShipText);\n}\nfunction shipIndicator(sunkShipsArr, player) {\n  const containerClasses = {\n    1: `${player}-carrier-container`,\n    2: `${player}-battleship-container`,\n    3: `${player}-destroyer-container`,\n    4: `${player}-submarine-container`,\n    5: `${player}-patrol-boat-container`\n  };\n  Object.entries(containerClasses).forEach(_ref => {\n    let [shipNum, containerClass] = _ref;\n    const container = document.getElementsByClassName(containerClass)[0];\n    const ships = Array.from(container.getElementsByClassName(\"user-ship\"));\n    if (sunkShipsArr.includes(parseInt(shipNum, 10))) {\n      ships.forEach(ship => ship.classList.add(\"sunk\"));\n    } else {\n      ships.forEach(ship => ship.classList.remove(\"sunk\"));\n    }\n  });\n}\n\n\n//# sourceURL=webpack://top-battleship/./src/DOM-gameboards.js?");

/***/ }),

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Cell() {\n  let value = 0;\n  const markCell = shipType => {\n    value = shipType;\n  };\n  const getValue = () => value;\n  return {\n    getValue,\n    markCell\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);\n\n//# sourceURL=webpack://top-battleship/./src/cell.js?");

/***/ }),

/***/ "./src/game-controller.js":
/*!********************************!*\
  !*** ./src/game-controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-gameboards */ \"./src/DOM-gameboards.js\");\n\n\n\nfunction Game() {\n  const user = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Player One\", false);\n  const cpu = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"CPU\", true);\n  const userBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const cpuBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  let isGameOver = false;\n  let isShiftPressed = false;\n  let winner = null;\n  const updateBoard = () => {\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.clearBoard)();\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(userBoard, cpuBoard);\n  };\n  const shipPlacementBoard = (length, orientation) => {\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.clearBoard)();\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.placementBoardRender)(userBoard, cpuBoard, length, orientation);\n  };\n  const cpuShipPlacer = () => {\n    const randomCoordinates = () => {\n      const x = Math.floor(Math.random() * 9);\n      const y = Math.floor(Math.random() * 9);\n      return [x, y];\n    };\n    const directionGenerator = () => {\n      const direction = Math.floor(Math.random() * 2);\n      if (direction === 0) {\n        return \"horizontal\";\n      }\n      return \"vertical\";\n    };\n    const placeCPUCarrier = () => {\n      const carrier = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 5, 1);\n      if (carrier === null) {\n        placeCPUCarrier();\n      }\n      return carrier;\n    };\n    const placeCPUBattleship = () => {\n      const battleship = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 4, 2);\n      if (battleship === null) {\n        placeCPUBattleship();\n      }\n      return battleship;\n    };\n    const placeCPUDestroyer = () => {\n      const destroyer = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 3, 3);\n      if (destroyer === null) {\n        placeCPUDestroyer();\n      }\n      return destroyer;\n    };\n    const placeCPUSubmarine = () => {\n      const submarine = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 3, 4);\n      if (submarine === null) {\n        placeCPUSubmarine();\n      }\n      return submarine;\n    };\n    const placeCPUPatrolBoat = () => {\n      const patrolBoat = cpuBoard.placeShip(randomCoordinates(), directionGenerator(), 2, 5);\n      if (patrolBoat === null) {\n        placeCPUPatrolBoat();\n      }\n      return patrolBoat;\n    };\n    placeCPUCarrier();\n    placeCPUBattleship();\n    placeCPUDestroyer();\n    placeCPUSubmarine();\n    placeCPUPatrolBoat();\n    updateBoard();\n  };\n  function getUserMove() {\n    return new Promise(resolve => {\n      const CPUDiv = document.querySelectorAll(\".cpu-board-button\");\n      const clickHandler = div => {\n        resolve([Number(div.dataset.cellRow), Number(div.dataset.cellColumn)]);\n        div.disabled = true;\n        div.removeEventListener(\"click\", clickHandler);\n      };\n      CPUDiv.forEach(div => div.addEventListener(\"click\", () => clickHandler(div)));\n    });\n  }\n  async function gameTurn() {\n    const userInput = await getUserMove();\n    user.takeTurn(cpuBoard, userInput);\n    const cpuSunkShips = cpuBoard.getSunkShips();\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.shipIndicator)(cpuSunkShips, \"cpu\");\n    cpu.takeTurn(userBoard);\n    const userSunkShips = userBoard.getSunkShips();\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.shipIndicator)(userSunkShips, \"user\");\n    if (cpuBoard.reportSunk()) {\n      winner = \"user\";\n      isGameOver = true;\n    }\n    if (userBoard.reportSunk()) {\n      winner = \"cpu\";\n      isGameOver = true;\n    }\n  }\n  function userShipCoordinates() {\n    return new Promise(resolve => {\n      const UserDiv = document.querySelectorAll(\".user-board-button\");\n      const clickHandler = div => {\n        resolve([Number(div.dataset.cellRow), Number(div.dataset.cellColumn)]);\n        div.removeEventListener(\"click\", clickHandler);\n      };\n      UserDiv.forEach(div => div.addEventListener(\"click\", () => clickHandler(div)));\n      const handleKeyDown = event => {\n        if (event.key === \"Shift\") {\n          isShiftPressed = true;\n        }\n      };\n      const handleKeyUp = event => {\n        if (event.key === \"Shift\") {\n          isShiftPressed = false;\n        }\n      };\n      window.addEventListener(\"keydown\", handleKeyDown);\n      window.addEventListener(\"keyup\", handleKeyUp);\n    });\n  }\n  async function userCarrierPlacer() {\n    const userCarrierPosition = await userShipCoordinates();\n    const orientation = isShiftPressed ? \"horizontal\" : \"vertical\";\n    const userCarrier = userBoard.placeShip(userCarrierPosition, orientation, 5, 1);\n    if (userCarrier === null) {\n      return userCarrierPlacer();\n    }\n    shipPlacementBoard(4, isShiftPressed);\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.placeShipInstructions)(4);\n    return true;\n  }\n  async function userBattleshipPlacer() {\n    const userCarrierPosition = await userShipCoordinates();\n    const orientation = isShiftPressed ? \"horizontal\" : \"vertical\";\n    const userCarrier = userBoard.placeShip(userCarrierPosition, orientation, 4, 2);\n    if (userCarrier === null) {\n      return userBattleshipPlacer();\n    }\n    shipPlacementBoard(3, isShiftPressed);\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.placeShipInstructions)(3);\n    return true;\n  }\n  async function userDestroyerPlacer() {\n    const userCarrierPosition = await userShipCoordinates();\n    const orientation = isShiftPressed ? \"horizontal\" : \"vertical\";\n    const userCarrier = userBoard.placeShip(userCarrierPosition, orientation, 3, 3);\n    if (userCarrier === null) {\n      return userDestroyerPlacer();\n    }\n    shipPlacementBoard(3, isShiftPressed);\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.placeShipInstructions)(2);\n    return true;\n  }\n  async function userSubmarinePlacer() {\n    const userCarrierPosition = await userShipCoordinates();\n    const orientation = isShiftPressed ? \"horizontal\" : \"vertical\";\n    const userCarrier = userBoard.placeShip(userCarrierPosition, orientation, 3, 4);\n    if (userCarrier === null) {\n      return userSubmarinePlacer();\n    }\n    shipPlacementBoard(2, isShiftPressed);\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.placeShipInstructions)(1);\n    return true;\n  }\n  async function userPatrolBoatPlacer() {\n    const userCarrierPosition = await userShipCoordinates();\n    const orientation = isShiftPressed ? \"horizontal\" : \"vertical\";\n    const userCarrier = userBoard.placeShip(userCarrierPosition, orientation, 2, 5);\n    if (userCarrier === null) {\n      return userPatrolBoatPlacer();\n    }\n    updateBoard();\n    return true;\n  }\n  const resetGame = () => {\n    isGameOver = false;\n    isShiftPressed = false;\n    winner = null;\n    userBoard.reset();\n    cpuBoard.reset();\n    user.reset();\n    cpu.reset();\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.shipIndicator)(cpuBoard.getSunkShips(), \"cpu\");\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.shipIndicator)(userBoard.getSunkShips(), \"user\");\n    shipPlacementBoard(5, isShiftPressed);\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.placeShipInstructions)(5);\n    placeShipPhase();\n  };\n  const runGame = async () => {\n    while (!isGameOver) {\n      await gameTurn();\n    }\n    (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.displayWinner)(winner);\n    const playAgainBtn = document.querySelector(\".play-again-btn\");\n    playAgainBtn.addEventListener(\"click\", resetGame);\n  };\n  async function placeShipPhase() {\n    const isUserCarrier = await userCarrierPlacer();\n    const isUserBattleship = await userBattleshipPlacer();\n    const isUserDestroyer = await userDestroyerPlacer();\n    const isUserSubmarine = await userSubmarinePlacer();\n    const isUserPatrolBoat = await userPatrolBoatPlacer();\n    if (isUserCarrier && isUserBattleship && isUserDestroyer && isUserSubmarine && isUserPatrolBoat) {\n      cpuShipPlacer();\n      runGame();\n    }\n  }\n  shipPlacementBoard(5, isShiftPressed);\n  (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_2__.placeShipInstructions)(5);\n  return {\n    placeShipPhase\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://top-battleship/./src/game-controller.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-factory */ \"./src/ship-factory.js\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ \"./src/cell.js\");\n\n\nfunction Gameboard() {\n  const rows = 10;\n  const columns = 10;\n  const board = [];\n  const placedShips = [];\n  const movesMade = [];\n  const successfulHits = [];\n  const missedShots = [];\n  let allSunk = false;\n  const makeBoard = () => {\n    for (let i = 0; i < rows; i += 1) {\n      board[i] = [];\n      for (let j = 0; j < columns; j += 1) {\n        board[i].push((0,_cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n      }\n    }\n  };\n  makeBoard();\n  const reset = () => {\n    placedShips.length = 0;\n    movesMade.length = 0;\n    successfulHits.length = 0;\n    missedShots.length = 0;\n    allSunk = false;\n    makeBoard();\n  };\n  const getBoard = () => board;\n  const checkIfAllSunk = () => {\n    if (placedShips.every(obj => obj.sunk === true)) {\n      allSunk = true;\n    }\n  };\n  const reportSunk = () => allSunk;\n  const placeShip = (startPos, direction, length, shipType) => {\n    let validMove = true;\n    if (direction === 'vertical') {\n      for (let i = 0; i < length; i += 1) {\n        if (startPos[0] + i > 9 || board[startPos[0] + i][startPos[1]].getValue() !== 0) {\n          validMove = false;\n          return null;\n        }\n      }\n      for (let i = 0; i < length; i += 1) {\n        if (validMove) {\n          board[startPos[0] + i][startPos[1]].markCell(shipType);\n        }\n      }\n    } else {\n      for (let i = 0; i < length; i += 1) {\n        if (board[startPos[0]][startPos[1] + i] === undefined || board[startPos[0]][startPos[1] + i].getValue() !== 0) {\n          validMove = false;\n          return null;\n        }\n      }\n      for (let i = 0; i < length; i += 1) {\n        if (validMove) {\n          board[startPos[0]][startPos[1] + i].markCell(shipType);\n        }\n      }\n    }\n    const newShip = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length, shipType);\n    placedShips.push(newShip);\n    return newShip;\n  };\n  const getSunkShips = () => {\n    const sunkShips = placedShips.filter(ship => ship.sunk === true);\n    return sunkShips.map(ship => ship.shipType);\n  };\n  const receiveAttack = coordinates => {\n    if (!movesMade.find(moves => moves.toString() === coordinates.toString())) {\n      if (board[coordinates[0]][coordinates[1]].getValue() !== 0) {\n        const shipType = board[coordinates[0]][coordinates[1]].getValue();\n        const hitShip = placedShips.find(ship => ship.shipType === shipType);\n        hitShip.hit();\n        movesMade.push(coordinates);\n        successfulHits.push(coordinates);\n        getSunkShips();\n        checkIfAllSunk();\n        return 'hit';\n      }\n      movesMade.push(coordinates);\n      missedShots.push(coordinates);\n      return 'miss';\n    }\n    return undefined;\n  };\n  return {\n    getBoard,\n    placeShip,\n    receiveAttack,\n    reportSunk,\n    movesMade,\n    placedShips,\n    reset,\n    getSunkShips\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://top-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-controller */ \"./src/game-controller.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst newGame = (0,_game_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nnewGame.placeShipPhase();\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_gameboards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-gameboards */ \"./src/DOM-gameboards.js\");\n\nfunction Player(name, isCPU) {\n  const comparePreviousMove = (arr, coordinates) => {\n    for (let i = 0; i < arr.length; i += 1) {\n      if (arr[i][0] === coordinates[0] && arr[i][1] === coordinates[1]) return true;\n    }\n    return false;\n  };\n  function getRandomCoordinates(enemyGameboard) {\n    let x;\n    let y;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n    } while (comparePreviousMove(enemyGameboard.movesMade, [x, y]));\n    return [x, y];\n  }\n  function getAdjacentCoordinates(enemyGameboard, coordinates) {\n    const x = coordinates[0];\n    const y = coordinates[1];\n    const adjacentCoordinates = [];\n    if (x > 0) {\n      const upCoordinate = [x - 1, y];\n      if (!comparePreviousMove(enemyGameboard.movesMade, upCoordinate)) {\n        adjacentCoordinates.push(upCoordinate);\n      }\n    }\n    if (x < 9) {\n      const downCoordinate = [x + 1, y];\n      if (!comparePreviousMove(enemyGameboard.movesMade, downCoordinate)) {\n        adjacentCoordinates.push(downCoordinate);\n      }\n    }\n    if (y > 0) {\n      const leftCoordinate = [x, y - 1];\n      if (!comparePreviousMove(enemyGameboard.movesMade, leftCoordinate)) {\n        adjacentCoordinates.push(leftCoordinate);\n      }\n    }\n    if (y < 9) {\n      const rightCoordinate = [x, y + 1];\n      if (!comparePreviousMove(enemyGameboard.movesMade, rightCoordinate)) {\n        adjacentCoordinates.push(rightCoordinate);\n      }\n    }\n    return adjacentCoordinates;\n  }\n  function tryVertical(enemyGameboard, firstCoordinate, secondCoordinate) {\n    const y = firstCoordinate[1];\n    const smallerX = Math.min(firstCoordinate[0], secondCoordinate[0]);\n    const largerX = Math.max(firstCoordinate[0], secondCoordinate[0]);\n    const possibleNextMoves = [];\n    if (smallerX > 0) {\n      const upCoordinate = [smallerX - 1, y];\n      if (!comparePreviousMove(enemyGameboard.movesMade, upCoordinate)) {\n        possibleNextMoves.push(upCoordinate);\n      }\n    }\n    if (largerX < 9) {\n      const downCoordinate = [largerX + 1, y];\n      if (!comparePreviousMove(enemyGameboard.movesMade, downCoordinate)) {\n        possibleNextMoves.push(downCoordinate);\n      }\n    }\n    return possibleNextMoves;\n  }\n  function tryHorizontal(enemyGameboard, firstCoordinate, secondCoordinate) {\n    const x = firstCoordinate[0];\n    const smallerY = Math.min(firstCoordinate[1], secondCoordinate[1]);\n    const largerY = Math.max(firstCoordinate[1], secondCoordinate[1]);\n    const possibleNextMoves = [];\n    if (smallerY > 0) {\n      const leftCoordinate = [x, smallerY - 1];\n      if (!comparePreviousMove(enemyGameboard.movesMade, leftCoordinate)) {\n        possibleNextMoves.push(leftCoordinate);\n      }\n    }\n    if (largerY < 9) {\n      const rightCoordinate = [x, largerY + 1];\n      if (!comparePreviousMove(enemyGameboard.movesMade, rightCoordinate)) {\n        possibleNextMoves.push(rightCoordinate);\n      }\n    }\n    return possibleNextMoves;\n  }\n  const player = {\n    name,\n    lastShot: null,\n    lastCoordinates: null,\n    hitCoordinates: [],\n    hitShipOrientation: null,\n    takeTurn(enemyGameboard, coordinates) {\n      if (isCPU) {\n        if (this.hitShipOrientation === null) {\n          if (this.lastShot === null || this.lastShot === 'miss') {\n            if (this.hitCoordinates.length === 1) {\n              const adjacentCoordinates = getAdjacentCoordinates(enemyGameboard, this.hitCoordinates[0]);\n              if (adjacentCoordinates.length > 0) {\n                const randomIndex = Math.floor(Math.random() * adjacentCoordinates.length);\n                const nextTarget = adjacentCoordinates[randomIndex];\n                this.lastCoordinates = nextTarget;\n              } else {\n                const CPUCoordinates = getRandomCoordinates(enemyGameboard);\n                this.lastCoordinates = CPUCoordinates;\n                this.hitCoordinates = [];\n              }\n            } else {\n              const CPUCoordinates = getRandomCoordinates(enemyGameboard);\n              this.lastCoordinates = CPUCoordinates;\n            }\n          } else {\n            const adjacentCoordinates = getAdjacentCoordinates(enemyGameboard, this.lastCoordinates);\n            if (adjacentCoordinates.length > 0) {\n              const randomIndex = Math.floor(Math.random() * adjacentCoordinates.length);\n              const nextTarget = adjacentCoordinates[randomIndex];\n              this.lastCoordinates = nextTarget;\n            } else {\n              const CPUCoordinates = getRandomCoordinates(enemyGameboard);\n              this.lastCoordinates = CPUCoordinates;\n            }\n          }\n        } else if (this.hitShipOrientation === 'horizontal') {\n          const horizontalMoves = tryHorizontal(enemyGameboard, this.hitCoordinates[this.hitCoordinates.length - 2], this.hitCoordinates[this.hitCoordinates.length - 1]);\n          if (horizontalMoves.length === 1) {\n            const nextTarget = horizontalMoves[0];\n            this.lastCoordinates = nextTarget;\n          } else if (horizontalMoves.length === 0) {\n            const CPUCoordinates = getRandomCoordinates(enemyGameboard);\n            this.lastCoordinates = CPUCoordinates;\n            this.hitShipOrientation = null;\n            this.hitCoordinates = [];\n          } else {\n            const randomIndex = Math.floor(Math.random() * 2);\n            const nextTarget = horizontalMoves[randomIndex];\n            this.lastCoordinates = nextTarget;\n          }\n        } else if (this.hitShipOrientation === 'vertical') {\n          const verticalMoves = tryVertical(enemyGameboard, this.hitCoordinates[this.hitCoordinates.length - 2], this.hitCoordinates[this.hitCoordinates.length - 1]);\n          if (verticalMoves.length === 1) {\n            const nextTarget = verticalMoves[0];\n            this.lastCoordinates = nextTarget;\n          } else if (verticalMoves.length === 0) {\n            const CPUCoordinates = getRandomCoordinates(enemyGameboard);\n            this.lastCoordinates = CPUCoordinates;\n            this.hitShipOrientation = null;\n            this.hitCoordinates = [];\n          } else {\n            const randomIndex = Math.floor(Math.random() * 2);\n            const nextTarget = verticalMoves[randomIndex];\n            this.lastCoordinates = nextTarget;\n          }\n        }\n        const currentHit = enemyGameboard.receiveAttack(this.lastCoordinates);\n        this.lastShot = currentHit;\n        if (this.lastShot === 'hit') {\n          this.hitCoordinates.push(this.lastCoordinates);\n          if (this.hitCoordinates.length === 2) {\n            const [hit1, hit2] = this.hitCoordinates;\n            if (hit1[0] === hit2[0]) {\n              this.hitShipOrientation = 'horizontal';\n            } else if (hit1[1] === hit2[1]) {\n              this.hitShipOrientation = 'vertical';\n            }\n          }\n        }\n        (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_0__.hitOrMiss)(this.lastCoordinates[0], this.lastCoordinates[1], isCPU);\n      } else {\n        enemyGameboard.receiveAttack(coordinates);\n        (0,_DOM_gameboards__WEBPACK_IMPORTED_MODULE_0__.hitOrMiss)(coordinates[0], coordinates[1]);\n      }\n    },\n    reset() {\n      this.lastShot = null;\n      this.lastCoordinates = null;\n      this.hitCoordinates = [];\n      this.hitShipOrientation = null;\n    }\n  };\n  return player;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://top-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship-factory.js":
/*!*****************************!*\
  !*** ./src/ship-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(shipLength, shipType) {\n  const ship = {\n    shipLength,\n    shipType,\n    hits: 0,\n    sunk: false,\n    hit() {\n      this.hits += 1;\n      this.isSunk();\n    },\n    isSunk() {\n      if (this.hits === this.shipLength) {\n        this.sunk = true;\n      }\n    }\n  };\n  return ship;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://top-battleship/./src/ship-factory.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ \"./src/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Thin.ttf */ \"./src/Roboto-Thin.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Medium.ttf */ \"./src/Roboto-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Light.ttf */ \"./src/Roboto-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Bold.ttf */ \"./src/Roboto-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Black.ttf */ \"./src/Roboto-Black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  font-weight: 100;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n  font-weight: 900;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  color: #1f271b;\n  font-family: \"Roboto\";\n}\n\nh1 {\n  font-size: 3rem;\n  margin: 0;\n}\n\n.title {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 18px;\n}\n\n.main-container {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.info-container {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.instructions {\n  display: grid;\n  gap: 12px;\n}\n\n.place-ship-info {\n  display: grid;\n  font-size: 1.5rem;\n  justify-content: center;\n  align-items: center;\n  height: 28px;\n}\n\n.place-ship-info > p {\n  margin: 0;\n  padding: 0;\n}\n\n.shift-info {\n  display: grid;\n  font-size: 1rem;\n  justify-content: center;\n  align-items: center;\n  height: 18px;\n}\n\n.shift-info > p {\n  margin: 0;\n  padding: 0;\n}\n\n.play-again {\n  display: grid;\n  height: 40px;\n  justify-content: center;\n  align-items: center;\n}\n\n.play-again-btn {\n  width: 120px;\n  height: 40px;\n  border: none;\n  border-radius: 4px;\n  font-size: 1.05rem;\n  transition: 0.2s;\n}\n\n.play-again-btn:hover {\n  cursor: pointer;\n  background-color: #dcebf1;\n}\n\n.play-again-btn:active {\n  transform: scale(0.95);\n}\n\n.fleet-title {\n  display: grid;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n}\n\n.fleet-title > p {\n  margin: 0;\n  padding: 0;\n  font-size: 1.3rem;\n  color: #1f271b;\n}\n\n.game-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n}\n\n.user-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n\n.ships-remaining {\n  display: grid;\n  height: 300px;\n  justify-content: end;\n  align-items: center;\n  padding-top: 100px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n.ships-remaining#cpu-remaining {\n  display: grid;\n  height: 300px;\n  justify-content: start;\n  align-items: center;\n  padding-top: 100px;\n  padding-left: 20px;\n  gap: 10px;\n}\n\n.cpu-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n\n.remaining-header {\n  display: grid;\n  align-self: end;\n}\n\n.remaining-icons {\n  display: grid;\n  gap: 4px;\n  grid-template-rows: repeat(5, 12px);\n  align-self: start;\n}\n\n.user-carrier-container,\n.user-battleship-container,\n.user-destroyer-container,\n.user-submarine-container,\n.user-patrol-boat-container,\n.cpu-carrier-container,\n.cpu-battleship-container,\n.cpu-destroyer-container,\n.cpu-submarine-container,\n.cpu-patrol-boat-container {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1px;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-ship {\n  height: 10px;\n  width: 10px;\n  background-color: #386c82;\n}\n\n.user-ship.sunk {\n  height: 10px;\n  width: 10px;\n  background-color: #dcebf1;\n}\n\n.user-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  justify-self: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.cpu-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  justify-self: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-board-button {\n  height: 48px;\n  width: 48px;\n  border: none;\n  border-radius: 4px;\n  justify-self: center;\n  align-self: center;\n  background-color: #dcebf1;\n}\n\n.cpu-board-button {\n  height: 48px;\n  width: 48px;\n  border: none;\n  border-radius: 4px;\n  justify-self: center;\n  align-self: center;\n}\n\n.user-placed-ship {\n  background-color: #386c82;\n}\n\n.cpu-placed-ship.revealed {\n  background-color: #386c82;\n}\n\n.hit {\n  background-color: #f25f5c;\n}\n\n.miss {\n  background-color: #1f271b;\n}\n\n.cpu-board-button:hover {\n  cursor: crosshair;\n  background-color: darkgray;\n}\n\n.hit:hover {\n  cursor: not-allowed;\n  background-color: #f25f5c;\n}\n\n.miss:hover {\n  cursor: not-allowed;\n  background-color: #1f271b;\n}\n\n.user-board-button.miss:hover {\n  cursor: default;\n}\n\n.ship-placement {\n  background-color: #2f475b;\n}\n\n.ship-placement:hover {\n  cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Roboto-Black.ttf":
/*!******************************!*\
  !*** ./src/Roboto-Black.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54a3321c780d7b357843.ttf\";\n\n//# sourceURL=webpack://top-battleship/./src/Roboto-Black.ttf?");

/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35eab922fdbe4b5324d4.ttf\";\n\n//# sourceURL=webpack://top-battleship/./src/Roboto-Bold.ttf?");

/***/ }),

/***/ "./src/Roboto-Light.ttf":
/*!******************************!*\
  !*** ./src/Roboto-Light.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67102731a93fd827b382.ttf\";\n\n//# sourceURL=webpack://top-battleship/./src/Roboto-Light.ttf?");

/***/ }),

/***/ "./src/Roboto-Medium.ttf":
/*!*******************************!*\
  !*** ./src/Roboto-Medium.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2699aefade440f0e338f.ttf\";\n\n//# sourceURL=webpack://top-battleship/./src/Roboto-Medium.ttf?");

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"160d7a6ac26376e5e977.ttf\";\n\n//# sourceURL=webpack://top-battleship/./src/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/Roboto-Thin.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Thin.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ecf36d10d43e2996afe.ttf\";\n\n//# sourceURL=webpack://top-battleship/./src/Roboto-Thin.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;