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

  const player = {
    name,
    lastShot: null,
    lastCoordinates: null,
    hitCoordinates: [],
    takeTurn(enemyGameboard, coordinates) {
      if (isCPU) {
        if (this.lastShot === null || this.lastShot === 'miss') {
          const CPUCoordinates = getRandomCoordinates(enemyGameboard)
          this.lastCoordinates = CPUCoordinates
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
        const currentHit = enemyGameboard.receiveAttack(this.lastCoordinates)
        this.lastShot = currentHit;
        console.log(this.lastShot)
        console.log(this.lastCoordinates);
        console.log(this.hitCoordinates);
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