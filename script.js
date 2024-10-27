'use strict';
let i;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

const closedModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnClosedModal.addEventListener('click', closedModal);

overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closedModal();
    }
  }
});
