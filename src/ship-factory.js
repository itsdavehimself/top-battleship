function Ship(shipLength) {
  const ship = {
    shipLength,
    hits: 0,
    isSunk: false,
  }

  return { ship }
}

export default Ship;