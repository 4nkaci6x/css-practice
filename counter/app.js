let count = 0;

const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const resetBtn = document.querySelector('.reset');
let counter = document.querySelector('.counter');

plusBtn.addEventListener('click', () => {
  count += 1;
  counter.textContent = count;
});

minusBtn.addEventListener('click', () => {
  if (count === 0) return;
  count -= 1;
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});
