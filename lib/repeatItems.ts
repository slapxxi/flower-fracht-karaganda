export function repeatItems<T>(collection: T[], count: number): T[] {
  let result = [];
  for (let index = 0; index < count; index++) {
    result.push(...collection);
  }
  return result;
}
