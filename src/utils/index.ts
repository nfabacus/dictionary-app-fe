let debounceValueTimeout: NodeJS.Timeout;
export const debounceValue = (value: string, delay = 500) => {
  clearTimeout(debounceValueTimeout);
  return new Promise((resolve) => {
    debounceValueTimeout = setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

export const getCharPositions = (
  str: string,
  selectedChar: string
): number[] => {
  if (selectedChar.length > 1 || !str.length) return [];
  return str
    .split("")
    .map((char, i) => {
      if (char === "*") {
        return i;
      } else {
        return null;
      }
    })
    .filter((index) => index !== null) as number[];
};

function replaceWordCharsWithStarsByIndexPos(
  starPosArr: number[],
  word: string
) {
  return starPosArr.reduce((changedStr, index) => {
    if (changedStr[index]) {
      return (
        changedStr.substring(0, index) + "*" + changedStr.substring(index + 1)
      );
    }
    return changedStr;
  }, word);
}

export const filterWordsBySearchTerm = (
  searchTerm: string,
  targetIndexArr: string[]
) => {
  const starPosArr = getCharPositions(searchTerm, "*");
  const result = targetIndexArr.filter((word: string) => {
    if (starPosArr.length) {
      word = replaceWordCharsWithStarsByIndexPos(starPosArr, word);
    }
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord.startsWith(searchTerm);
  });
  return result;
};

export const convertListToIndexObject = (list: string[]) => {
  return list.reduce((acc: Record<string, string[]>, word: string) => {
    const firstChar = word.charAt(0);
    if (!acc[firstChar]) {
      acc[firstChar] = [word];
    } else {
      acc[firstChar].push(word);
    }
    return acc;
  }, {} as Record<string, any>);
};
