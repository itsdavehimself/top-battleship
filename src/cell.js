function Cell() {
  let value = 0;

  const markCell = (shipType) => {
    value = shipType;
  }

  const getValue = () => value;

  return { getValue, markCell }
}

export default Cell