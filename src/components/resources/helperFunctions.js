export const extractPokemonNumber = (url) => {
  // This RegExp is to match the pokemon number
  const numberPattern = /\/[0-9]+\//;
  const match = url.match(numberPattern);
  const number = match && match[0].replace(/\//g, '');
  return number;
}