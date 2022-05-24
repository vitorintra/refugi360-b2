const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const alertForm = () => {
  alert(`Enviou\nEmail: ${emailInput.value}\nPassword: ${passwordInput.value}`);
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  alertForm()
});
