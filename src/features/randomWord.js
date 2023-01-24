// Create a function component that will generate a random word
const randomWord = (array) => {
  const randomNumber = Math.floor(Math.random() * 77414);
  return array[randomNumber].toUpperCase().split("");
};
// Create a function component that will return an array of hyphens depending on a word that it takes as an argument
const hyphens = (word) => word.map(() => "-");
// Export the functions
export { randomWord, hyphens };
