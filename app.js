//This function is work on state change.ex:loged in , if condition is exected loged out ,else condition is exectuted. 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("userdiv").style.display="block"
      document.getElementById("logindiv").style.display="none"

    } else {
        document.getElementById("userdiv").style.display="none"
        document.getElementById("logindiv").style.display="block"
    }
  });


function login(){
    var email = document.getElementById("email field").value;
    var psw = document.getElementById("psw field").value;
      alert(email)
    firebase.auth().signInWithEmailAndPassword(email, psw)
    .then((user) => {
      
   })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error:"+errorMessage)
  });
}