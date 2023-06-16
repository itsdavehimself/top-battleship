import { hitOrMiss } from "./DOM-gameboards";

function Player(name, isCPU) {
  const comparePreviousMove = (arr, coordinates) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][0] === coordinates[0] && arr[i][1] === coordinates[1])
      return true
    }
    return false
  }

  function getRandomCoordinates(enemyGameboard) {
    let x;
    let y;

    do {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    } while (comparePreviousMove(enemyGameboard.movesMade, [x, y]))
    
    return [x, y]
  }

  function getAdjacentCoordinates(enemyGameboard, coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];
    const adjacentCoordinates = [];

    if (x > 0) {
      const upCoordinate = [x - 1, y];
      if(!comparePreviousMove(enemyGameboard.movesMade, upCoordinate)) {
        adjacentCoordinates.push(upCoordinate);
      }
    }

    if (x < 9) {
      const downCoordinate = [x + 1, y];
      if(!comparePreviousMove(enemyGameboard.movesMade, downCoordinate)) {
        adjacentCoordinates.push(downCoordinate);
      }
    }

    if (y > 0) {
      const leftCoordinate = [x, y - 1];
      if(!comparePreviousMove(enemyGameboard.movesMade, leftCoordinate)) {
        adjacentCoordinates.push(leftCoordinate);
      }
    }

    if (y < 9) {
      const rightCoordinate = [x, y + 1];
      if(!comparePreviousMove(enemyGameboard.movesMade, rightCoordinate)) {
        adjacentCoordinates.push(rightCoordinate);
      }
    }
  
    return adjacentCoordinates;

  }

  function tryVertical(enemyGameboard, firstCoordinate, secondCoordinate) {
    const y = firstCoordinate[1];
    const smallerX = Math.min(firstCoordinate[0], secondCoordinate[0]);
    const largerX = Math.max(firstCoordinate[0], secondCoordinate[0]);
    const possibleNextMoves = [];

    if (smallerX > 0) {
      const upCoordinate = [smallerX - 1, y];
      if(!comparePreviousMove(enemyGameboard.movesMade, upCoordinate)) {
        possibleNextMoves.push(upCoordinate);
      }
    }
    
    if (largerX < 9) {
      const downCoordinate = [largerX + 1, y];
      if(!comparePreviousMove(enemyGameboard.movesMade, downCoordinate)) {
        possibleNextMoves.push(downCoordinate);
      }
    }
    
    return possibleNextMoves;
  }

  function tryHorizontal(enemyGameboard, firstCoordinate, secondCoordinate) {
    const x = firstCoordinate[0];
    const smallerY = Math.min(firstCoordinate[1], secondCoordinate[1]);
    const largerY = Math.max(firstCoordinate[1], secondCoordinate[1]);
    const possibleNextMoves = [];

    if (smallerY > 0) {
      const leftCoordinate = [x, smallerY - 1];
      if(!comparePreviousMove(enemyGameboard.movesMade, leftCoordinate)) {
        possibleNextMoves.push(leftCoordinate);
      }
    }
    
    if (largerY < 9) {
      const rightCoordinate = [x, largerY + 1];
      if(!comparePreviousMove(enemyGameboard.movesMade, rightCoordinate)) {
        possibleNextMoves.push(rightCoordinate);
      }
    }

    return possibleNextMoves;
  }

  const player = {
    name,
    lastShot: null,
    lastCoordinates: null,
    hitCoordinates: [],
    hitShipOrientation: null,
    takeTurn(enemyGameboard, coordinates) {
      if (isCPU) {
        if (this.hitShipOrientation === null) { 
          if (this.lastShot === null || this.lastShot === 'miss') { 
            if (this.hitCoordinates.length === 1) { 
              const adjacentCoordinates = getAdjacentCoordinates(enemyGameboard, this.hitCoordinates[0]); 
            if (adjacentCoordinates.length > 0) { 
              const randomIndex = Math.floor(Math.random() * adjacentCoordinates.length); 
              const nextTarget = adjacentCoordinates[randomIndex];
              this.lastCoordinates = nextTarget;
            } else { 
              const CPUCoordinates = getRandomCoordinates(enemyGameboard); 
              this.lastCoordinates = CPUCoordinates;
              this.hitCoordinates = []; 
            }
            } else { 
              const CPUCoordinates = getRandomCoordinates(enemyGameboard)
              this.lastCoordinates = CPUCoordinates
            }
          } else { 
            const adjacentCoordinates = getAdjacentCoordinates(enemyGameboard, this.lastCoordinates); 
            if (adjacentCoordinates.length > 0) { 
              const randomIndex = Math.floor(Math.random() * adjacentCoordinates.length); 
              const nextTarget = adjacentCoordinates[randomIndex];
              this.lastCoordinates = nextTarget;
            } else { 
              const CPUCoordinates = getRandomCoordinates(enemyGameboard); 
              this.lastCoordinates = CPUCoordinates;
            }
          }
        } else if (this.hitShipOrientation === 'horizontal') { 
          const horizontalMoves = tryHorizontal(enemyGameboard, this.hitCoordinates[this.hitCoordinates.length - 2], this.hitCoordinates[this.hitCoordinates.length - 1]);
          if (horizontalMoves.length === 1) {
            const nextTarget = horizontalMoves[0];
            this.lastCoordinates = nextTarget;
          } else if (horizontalMoves.length === 0) {
            const CPUCoordinates = getRandomCoordinates(enemyGameboard); 
            this.lastCoordinates = CPUCoordinates;
            this.hitShipOrientation = null;
            this.hitCoordinates = [];
          } else {
            const randomIndex = Math.floor(Math.random() * 2);
            const nextTarget = horizontalMoves[randomIndex];
            this.lastCoordinates = nextTarget;
          }
        } else if (this.hitShipOrientation === 'vertical') { 
          const verticalMoves = tryVertical(enemyGameboard, this.hitCoordinates[this.hitCoordinates.length - 2], this.hitCoordinates[this.hitCoordinates.length - 1]);
          if (verticalMoves.length === 1) {
            const nextTarget = verticalMoves[0];
            this.lastCoordinates = nextTarget;
          } else if (verticalMoves.length === 0) {
            const CPUCoordinates = getRandomCoordinates(enemyGameboard); 
            this.lastCoordinates = CPUCoordinates;
            this.hitShipOrientation = null;
            this.hitCoordinates = [];
          } else {
            const randomIndex = Math.floor(Math.random() * 2);
            const nextTarget = verticalMoves[randomIndex];
            this.lastCoordinates = nextTarget;
          }
        }
        const currentHit = enemyGameboard.receiveAttack(this.lastCoordinates)
        this.lastShot = currentHit;
        if (this.lastShot === 'hit') {
          this.hitCoordinates.push(this.lastCoordinates);
          if (this.hitCoordinates.length === 2) {
            const [hit1, hit2] = this.hitCoordinates;
            if (hit1[0] === hit2[0]) {
              this.hitShipOrientation = 'horizontal'
            } else if (hit1[1] === hit2[1]) {
              this.hitShipOrientation = 'vertical'
            }
          }
        } 
        hitOrMiss(this.lastCoordinates[0], this.lastCoordinates[1], isCPU)
      } else {
        enemyGameboard.receiveAttack(coordinates)
        hitOrMiss(coordinates[0], coordinates[1])
      }
    }
  }
  return player
}

export default Player;