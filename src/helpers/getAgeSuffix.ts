export function getAgeSuffix(age: number) {
  if (age === 1) {
    return "год";
  } else if (age >= 2 && age <= 4) {
    return "года";
  } else {
    return "лет";
  }
}
