export const _sample = <T>(xs: T[]): T =>
  xs[Math.floor(Math.random() * xs.length)];

function sample<T>(xs: T[], n: number): T[];
function sample<T>(xs: T[]): T;
function sample<T>(xs: T[], n: 1): T;
function sample<T>(xs: T[], n = 1) {
  if (n === 1) return _sample(xs);

  return [...new Array(n)].map(() => {
    return _sample(xs);
  });
}

export { sample };
