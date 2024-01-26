const add = document.querySelector(`#addition`);
const one = document.querySelector(`#first`);
const two = document.querySelector(`#second`);
const resultValue = document.querySelector(`#resultValue`);
add.addEventListener(`click`, () => {
  const valueOne = +one.value;
  const valueTwo = +two.value;
  const result1 = valueOne + valueTwo;
  console.log(valueOne + valueTwo);

  resultValue.innerHTML = result1;
});

console.log(
  " ******************************************************************"
);
const add1 = document.querySelector(`#substraction`);
const one1 = document.querySelector(`#first`);
const two1 = document.querySelector(`#second`);
const resultValue1 = document.querySelector(`#resultValue`);
add1.addEventListener(`click`, () => {
  const valueOne = -one1.value;
  const valueTwo = -two1.value;
  const result1 = valueOne - valueTwo;
  console.log(valueOne - valueTwo);

  resultValue.innerHTML = result1;
});
console.log(
  " ******************************************************************"
);

const add2 = document.querySelector(`#multiplicaton`);
const one2 = document.querySelector(`#first`);
const two2 = document.querySelector(`#second`);
const resultValue2 = document.querySelector(`#resultValue`);
add2.addEventListener(`click`, () => {
  const valueOne = one2.value;
  const valueTwo = two2.value;
  const result1 = valueOne * valueTwo;
  console.log(valueOne * valueTwo);

  resultValue.innerHTML = result1;
});
console.log(
  " ******************************************************************"
);

const add3 = document.querySelector(`#division`);
const one3 = document.querySelector(`#first`);
const two3 = document.querySelector(`#second`);
const resultValue3 = document.querySelector(`#resultValue`);
add3.addEventListener(`click`, () => {
  const valueOne = one3.value;
  const valueTwo = two3.value;
  const result1 = valueOne / valueTwo;
  console.log(valueOne / valueTwo);

  resultValue.innerHTML = result1;
});
console.log(
  " ******************************************************************"
);

const add4 = document.querySelector(`#Clear`);
const one4 = document.querySelector(`#first`);
const two4 = document.querySelector(`#second`);
const resultValue4 = document.querySelector(`#resultValue`);
add4.addEventListener(`click`, () => {
  one4.value = "";
  two4.value = "";
  const result1 = 0;
  console.log(0);
  resultValue.innerHTML = result1;
});
