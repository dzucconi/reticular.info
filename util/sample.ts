export const sample = <T>(xs: T[], n: number = 1) => {
  let length = xs.length;

  const result = new Array(n);
  const taken = new Array(length);

  if (n > length) {
    throw new RangeError("More elements taken than available");
  }

  while (n--) {
    const x = Math.floor(Math.random() * length);
    result[n] = xs[x in taken ? taken[x] : x];
    taken[x] = --length in taken ? taken[length] : length;
  }

  return result;
};
