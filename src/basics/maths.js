import { SocketAddress } from "net"

/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (diameter === 0) {
    return diameter
  }
  if (!Number.isNaN(diameter) && diameter > 0) {
    return diameter = (4 / 3) * Math.PI * ((diameter / 2) ** 3)
  } else {
    throw new Error
  }
}


/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (!Number.isNaN(n) && typeof n === "number") {
    return n = (Math.round(n * 10) / 10)
  } else {
    throw new Error
  }
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  for (const grade of grades) {
    if (typeof grade !== "number" || Number.isNaN(grade)) {
      throw new Error("Le tableau contient une valeur invalide.");
    }
  }

  return grades.reduce((total, grade) => total + grade) / grades.length;
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
}
