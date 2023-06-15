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

  const player = {
    name,
    takeTurn(enemyGameboard, coordinates) {
      if (isCPU) {
        const CPUCoordinates = getRandomCoordinates(enemyGameboard)
        enemyGameboard.receiveAttack(CPUCoordinates)
      } else {
        enemyGameboard.receiveAttack(coordinates)
      }
    }
  }
  return player
}

export default Player;