import getRefs from '';
import apiService from '';

const refs = getRefs();

refs.modalList.addEventListener('click', onModalOpen);

function onModalOpen(e) {
  let card = e.target.closest;
}

//  refs.lightbox.classList.add('is-open');
//  document.body.classList.add('is-hidden');

function renderCard(card) {
  refs.modalList.innerHTML = modalTpl(card);
}
