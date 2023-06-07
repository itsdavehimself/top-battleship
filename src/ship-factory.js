function Ship(shipLength) {
  const ship = {
    shipLength,
    hits: 0,
    sunk: false,
    hit() {
      this.hits += 1;
      this.isSunk();
    },
    isSunk() {
      if (this.hits === this.shipLength) {
        this.sunk = true;
      }
    }
  }

  return ship
}

export default Ship;