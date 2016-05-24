
setTimeout(openSignUpBox, 3000);

// Display signup box after initial pause
function openSignUpBox() {
  document.getElementById('modal-shadow').style.display = "block";
}


// Construct SignUpBox

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