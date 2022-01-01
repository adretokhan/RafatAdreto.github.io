function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}








function show() {

  
  
  var email= document.getElementById("exampleInputEmail1").value;
  var name = document.getElementById("exampleInputPassword1").value;

   firebase.database().ref('User/' + email).set({
          
          
          email : email,
          name : name
        }, function(error) {
          if (error) {
            alert("Failed");
          } else {
              alert("DONE");
            
         
          }
        });
} 