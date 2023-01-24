// 1)написати фукцію стрілку, яка приймає джерельний масив
// і повертає масив з двох значень,
// які є мінімальним і максимальним значенням джерельного масиву
// якщо джерельний масив порожній, то функція повертає порожній масив

const arr = [1, 2, 3, 4, 5];

const getSum = (arr) => {
  if (arr.length === 0) {
    return "";
  }
  return [Math.min(...arr), Math.max(...arr)];
};

console.log(getSum(arr));

// 2)написати функцію стрілку, яка приймає безліч аргументів
// і повертає результат їх множення, якщо аргументів не має - повертає null

const getMultipleArgs = (...args) =>
  args.length === 0 ? null : args.reduce((acc, arg) => acc * arg);

console.log(getMultipleArgs(7, 2));

// 3)переписати функцію, що нижче на функцію стрілку
// function askUser(quetion){
// const userInput = confirm(quetion);
// if(userInput){
// return 'ok';
// }
// return 'error';
// }

const askUser = (quetion) => (confirm(quetion) ? "ok" : "error");

console.log(askUser());