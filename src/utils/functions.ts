/**
 * Capitalizes the first character in the given string.
 *
 * @param {string} str A string.
 * @returns {string} The string with first character capitalized.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
