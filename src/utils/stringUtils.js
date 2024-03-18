export const camelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const formatTitle = (title) => {
  // Check if the string contains more than one word separated by camelCase
  if (title.match(/[A-Z]/g)) {
    // Split the words by the uppercase letter
    const words = title.split(/(?=[A-Z])/);
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    // Join the words with spaces and return the result
    return capitalizedWords.join(" ");
  } else {
    // If it's a single word, capitalize only the first letter
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  }
};
