// modal
export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

//modal buttonClose
Modal.buttonClose.onclick = () => {
  Modal.close()
}

//event fechar popup com ESC
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}