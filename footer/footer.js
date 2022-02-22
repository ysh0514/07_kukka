const count = document.querySelector('.count');
const onlyPc = document.querySelector('.onlyPc');

function countCheck() {
  if (count.textContent === '0') {
    count.style.display = 'none';
  }
}

countCheck();
