/* 
Given two strings, return true if the first string can be
built from the letters in the 2nd string.

Ignore case.

.indexOf will only tell you if the letter is found one time.
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether neededChars can be built using the chars of availableChars.
 * - Time: O(n + m) -> O(n) linear, n = neededChars length,
 *    m = availableChars length.
 * - Space: O(m) -> O(n) since it's still linear just call it n for simplicity.
 * @param {string} neededCharacters
 * @param {string} availableCharacters
 * @returns {boolean}
 */
function canBuildS1FromS2(neededCharacters, availableCharacters) {
  if (availableCharacters.length < neededCharacters.length) {
    return false;
  }

  const availableCharacterCounts = new Map();

  for (const availableCharacter of availableCharacters) {
    const availableCharacterLowerCase = availableCharacter.toLowerCase();

    if (availableCharacterCounts.has(availableCharacterLowerCase) === false) {
      availableCharacterCounts.set(availableCharacterLowerCase, 0);
    }

    const availableCount = availableCharacterCounts.get(
      availableCharacterLowerCase
    );
    availableCharacterCounts.set(
      availableCharacterLowerCase,
      availableCount + 1
    );
  }

  for (const neededCharacter of neededCharacters) {
    const neededCharacterLowerCase = neededCharacter.toLowerCase();
    const availableCount = availableCharacterCounts.get(
      neededCharacterLowerCase
    );

    // Only compare availableCount with > after confirming it's not undefined.
    const isCharacterAvailable =
      availableCharacterCounts.has(neededCharacterLowerCase) &&
      availableCount > 0;

    if (isCharacterAvailable) {
      availableCharacterCounts.set(
        neededCharacterLowerCase,
        availableCount - 1
      );
    } else {
      return false;
    }
  }
  return true;
}

function myCanBuildS1FromS2(str1 = '', str2 = '') {
  const freqTable = {};
  for (const char of str2) {
    if (freqTable.hasOwnProperty(char.toLowerCase())) {
      freqTable[char.toLowerCase()]++;
    } else {
      freqTable[char.toLowerCase()] = 1;
    }
  }

  const str1LowerCase = str1.toLowerCase();
  for (const char of str1LowerCase) {
    if (!freqTable.hasOwnProperty(char) || freqTable[char] < 1) {
      return false;
    } else {
      freqTable[char]--
    }
  }
  return true;
}

console.log(myCanBuildS1FromS2(strA1, strB1));
console.log(myCanBuildS1FromS2(strA2, strB2));
console.log(myCanBuildS1FromS2(strA3, strB3));
console.log(myCanBuildS1FromS2(strA4, strB4));
console.log(myCanBuildS1FromS2(strA5, strB5));

export { canBuildS1FromS2 };
