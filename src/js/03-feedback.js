import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

fillData()

form.addEventListener(
  'input',throttle(() => saveData(), 500));
form.addEventListener("submit", onSubmit)

function saveData() {
    const userData = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function fillData() {
     const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
     form.email.value = savedData.email ?? '';
     form.message.value = savedData.message ?? '';
}

function onSubmit(e) {
    e.preventDefault()
    if (form.email.value.trim() === '' || form.message.value.trim() === '') {
      return;
    } else {
        const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
        console.log(savedData);
      localStorage.removeItem(STORAGE_KEY);
      form.reset();
    }
}
