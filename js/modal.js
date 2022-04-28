(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  function onOpenModal() {
    window.addEventListener('keydown', onEscPress);
    toggleModal();
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscPress);
    toggleModal();
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }

  function onEscPress(event) {
    isEscKey = event.code === 'Escape';
    if (isEscKey) {
      onCloseModal();
    }
  }
})();
