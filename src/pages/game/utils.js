export function getRandomItemFromArray(array) {
  let randIndex = Math.floor(Math.random() * array.length);
  let randId = array[randIndex]?.id;
  return array.find((item) => item.id == randId) || null;
}
