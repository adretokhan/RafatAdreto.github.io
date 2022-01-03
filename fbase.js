

function rafat() {
  


    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
  
    firebase.database().ref('User/' + name).set({
  
  
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





  