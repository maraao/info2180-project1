/* Add your JavaScript to this file */
   
window.onload = function validateEmail(email) {
    var email = document.getElementByID("email").value;
    email.addEventListener('submit', function (element) {
    if (email ==null || email == "") {
        console.log ("Please enter a valid email address")
    } else {
        var accept = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
        if (accept.test(email));
        console.log(message)
    } 
}    
