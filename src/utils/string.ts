type SpliceParams = {
  value: string;
  start: number;
  delCount: number;
  newSubStr: string;
}

/**
 * {JSDoc}
 *
 * The splice() method changes the content of a string by removing a range of
 * characters and/or adding new characters.
 *
 * @param {number} start Index at which to start changing the string.
 * @param {number} delCount An integer indicating the number of old chars to remove.
 * @param {string} newSubStr The String that is spliced in.
 * @return {string} A new string with the spliced substring.
 */
export function splice({ value, start, delCount, newSubStr }: SpliceParams) {
  return value.slice(0, start) + newSubStr + value.slice(start + Math.abs(delCount));
};

