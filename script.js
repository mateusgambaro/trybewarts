const validLogin = 'tryber@teste.com';
const validPassword = '123456';

const login = document.querySelector('#input-login');
const password = document.querySelector('#input-password');

const loginButton = document.querySelector('#login-btn');

function isValidLogin() {
  if (login.value !== validLogin || password.value !== validPassword) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', isValidLogin);

const submitButton = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');

function checkedButton() {
  if (checkboxAgreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkboxAgreement.addEventListener('click', checkedButton);

const textArea = document.getElementById('textarea');
const countingChars = document.getElementById('counter');

textArea.addEventListener('input', () => {
  const remaining = 500 - textArea.value.length;
  countingChars.textContent = `${remaining}`;
});

const form = document.querySelector('#evaluation-form');
const name = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('#family');
const subjects = document.querySelectorAll('.subject');
const rating = document.querySelectorAll('#rate');
const comment = document.querySelector('#textarea');

function checkFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
}

function checkSubject() {
  let subjectList = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      subjectList += `${subjects[index].value}, `;
    }
  }
  return subjectList;
}

function checkRate() {
  for (let index = 0; index < rating.length; index += 1) {
    if (rating[index].checked) {
      return rating[index].value;
    }
  }
}

function submitForm() {
  form.innerHTML = '';
  form.innerHTML += `<p>Nome: ${name.value} ${lastName.value}</p>`;
  form.innerHTML += `<p>Email: ${email.value}</p>`;
  form.innerHTML += `<p>Casa: ${house.value}</p>`;
  form.innerHTML += `<p>Família: ${checkFamily()}</p>`;
  form.innerHTML += `<p>Matérias: ${checkSubject()}</p>`;
  form.innerHTML += `<p>Avaliação: ${checkRate()}</p>`;
  form.innerHTML += `<p>Observações: ${comment.value}</p>`;
}
submitButton.addEventListener('click', submitForm);
//  commit final Mateus
