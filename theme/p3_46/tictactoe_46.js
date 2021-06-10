const resetBtn = document.querySelector('#reset');
const allLi = document.querySelectorAll('#board li');
const body = document.querySelector('#body');


console.log('allLi', allLi);

const reset = () => {
  allLi.forEach((li) => {
    li.textContent = "+";
    li.classList = "";
  })
};

resetBtn.addEventListener('click', reset);
