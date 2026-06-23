const controller = new Controller();

document.getElementById('generate-btn').addEventListener('click', () => {
  controller.generate();
});

document.getElementById('error-close').addEventListener('click', () => {
  controller.view.hideError();
});

controller.generate();
