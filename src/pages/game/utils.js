export function getRandomItemFromArray(array) {
  let randIndex = Math.floor(Math.random() * array.length);
  let randId = array[randIndex]?.id;
  return array.find((item) => item.id == randId) || null;
}

// Generate n random ids of a large list
export function getRandomAnswers(list, n, realAnswer) {
  let answers = [];
  while (answers.length < n) {
    if (answers.length >= list.length) {
      break;
    }
    let randomIndex = Math.floor(Math.random() * list.length);
    if (!answers.some((answer) => answer.id === list[randomIndex].id)) {
      //
      answers.push(list[randomIndex]);
    }
  }
  if (!answers.some((answer) => answer.id == realAnswer.id)) {
    //
    let index = Math.floor(Math.random() * answers.length);
    answers = [...answers.slice(0, index), realAnswer, ...answers.slice(index)];
  }
  return answers;
}

//old
// export function getRandomAnswers(list, n, realAnswer) {
//   let ids = [];
//   let answers = [];
//   while (ids.length < n) {
//     if (ids.length >= list.length) {
//       break;
//     }
//     let randomIndex = Math.floor(Math.random() * list.length);
//     if (ids.indexOf(list[randomIndex].id) === -1) {
//       ids.push(list[randomIndex].id);
//       answers.push(list[randomIndex]);
//     }
//   }
//   if (!ids.includes(realAnswer.id)) {
//     let index = Math.floor(Math.random() * ids.length);
//     ids = [
//       ...ids.slice(0, list[index].id),
//       realAnswer.id,
//       ...ids.slice(list[index].id),
//     ];
//     answers = [...answers.slice(0, index), realAnswer, ...answers.slice(index)];
//   }
//   return answers;
// }
