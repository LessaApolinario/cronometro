export function padZero(number) {
  if (Number(number) > 0 && Number(number) < 10) {
    return number.toString().padStart(number.length + 1, "0")
  }

  return number
}