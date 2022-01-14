

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
  // retrieveinfos();
}
function retrieveinfos(){
  let ref=firebase.database().ref('User');
  ref.on('value',gotdata);
}
function gotdata(data){
  let info=data.val();
  let keys=Object.keys(info);
  for(let i=0;i<keys.length;i++){
    let infodata=keys[i];
    let name=info[infodata].name;
    let email=info[infodata].email;
    
    let infores=document.querySelector('.inforesults');
    infores.innerHTML += `<div><center>
      <p><strong>Name: </strong>${name} <br/>
      <a><strong>email: </strong>${email}</a><br/>
      </p>
      </center>
    </div>`;
  }
}





