export const foldl = <T, U>(fn: (previous: T) => (current: U) => T) => (acc: T) => (arr: U[]): T => {
  const l = arr.length
  if (0 === l) return acc
  const curr = arr[l - 1]
  const nextArr = arr.slice(0, l - 1)
  return foldl(fn)(fn(acc)(curr))(nextArr)
}

export const last = <T>(arr: T[]): T => arr[arr.length - 1]
