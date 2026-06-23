const controller = new Controller();

document.getElementById('generate-btn').addEventListener('click', () => {
  controller.generate();
});

document.getElementById('save-btn').addEventListener('click', () => {
  controller.saveUser();
});

document.getElementById('load-btn').addEventListener('click', () => {
  controller.loadUser();
});

document.getElementById('error-close').addEventListener('click', () => {
  controller.view.hideError();
});

controller.loadSavedNames();
controller.generate();
