
setTimeout(openSignUpBox, 3000);

// Display signup box after initial pause
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

// Validating Empty Field
function check_empty() {
  if (document.getElementById('email').value == "") {
    alert("Please enter email");
  } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
  }
}


/* Invoke script after multiple pages visited

In order to complete this I was going to add a cookie that checked the number of visits/pages.

It would look similar to this:

if (document.cookie.indexOf('visited=true') >= 5)
   {
      var thirtyDays = 1000*60*60*24*30;
      var expires = new Date((new Date()).valueOf() + thirtyDays);
      document.cookie = "visited=true;expires=" + expires.toUTCString();
   }

});


*/