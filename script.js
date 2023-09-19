const items = ["Rock", "Paper", "Scissors"];

function computerChoice(arr) {
  const randomItem = Math.floor(Math.random() * arr.length);
  const item = arr[randomItem];
  return item;
}

const result = computerChoice(items);
console.log(result);

