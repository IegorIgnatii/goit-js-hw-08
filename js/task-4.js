const regFormElem = document.querySelector('.login-form');
regFormElem.addEventListener('submit', formSubmission);

function formSubmission(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  console.log({ email: email, password: password });
  form.reset();
}
