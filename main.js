// Initialize Firebase
var config = {
  apiKey: "AIzaSyBr8o5hNEj50OQbcnNn0FhrppL6BUuGOVE",
  authDomain: "contactform-4f2e0.firebaseapp.com",
  databaseURL: "https://contactform-4f2e0.firebaseio.com",
  projectId: "contactform-4f2e0",
  storageBucket: "contactform-4f2e0.appspot.com",
  messagingSenderId: "883752019670"
};
firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
  e.preventDefault();
  //get values
  var name = getinputVal('name');
  var company = getinputVal('company');
  var email = getinputVal('email');
  var phone = getinputVal('phone');
  var message = getinputVal('message');

  //Save message
  saveMessage(name,company,email,phone,message);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  //Clear form
  document.getElementById('contactForm').reset();
}

//Function to get form values
function getinputVal(id){
  return document.getElementById(id).value;
}

//Save message
function saveMessage(name,company,email,phone,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  })
}