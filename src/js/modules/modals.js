const modals = () => {
  function bindModal(trigger, modal, close) {
    trigger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      modal.style.dispaly = 'block';
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    })

  }
  const callEngineerBtn = document.querySelector('.popup_engineer_btn');
};

export default modals;