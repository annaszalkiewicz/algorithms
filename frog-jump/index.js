const frogJmp = (X, Y, D) => {
  console.log(Math.ceil((Y - X)/D));
  return Math.ceil((Y - X)/D);
}

frogJmp(10, 85, 30);