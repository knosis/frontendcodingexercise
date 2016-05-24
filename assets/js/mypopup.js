
// Display signup box after initial pause
setTimeout(openSignUpBox, 3000);

// Count visits
VisitCounter();

//Launch pop up modal
function openSignUpBox() {
  createPopUp();
  document.getElementById('modal-shadow').style.display = "block";
}


// Construct SignUpBox

function createPopUp() {

  var container = document.getElementById('signUpBox');

  var form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', '#')
  form.id = 'form';
  form.name = "name";

  var label = document.createElement('label');
  label.innerHTML = "You seem to like our website! Why not sign up for our email list? We'll send you updates whenever something changes!";

  var input = document.createElement('input');
  input.id = 'email';
  input.email = 'email';
  input.name = 'email';
  input.placeholder = 'email';
  input.type = 'text';

  var button = document.createElement('a');
  button.id = 'submit';
  button.innerHTML = "ok!"

  // no painting yet
  container.appendChild(form);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);
}


//Count page visits. Launch form after 5 visits

function VisitCounter() {

  var visits = GetCookie('counter');

  if (!visits) {
    visits = 1;
  } else if (parseInt(visits) === 5) {
    openSignUpBox();
  } else {
    visits = parseInt(visits) + 1;
  }
}

