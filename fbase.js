function rafat() {



    var email = document.getElementById("exampleInputEmail1").value;
    var name = document.getElementById("exampleInputPassword1").value;
  
    firebase.database().ref('User/' + email).set({
  
  
      email: email,
      name: name
    }, function (error) {
      if (error) {
        alert("Failed");
      } else {
        alert("DONE");
  
  
      }
    });
  } 