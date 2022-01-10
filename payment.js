function validateForm() {
    let v= document.getElementById("volumes").value;
    let x = document.getElementById("name").value;
    let y = document.getElementById("card_number").value;
    let z = document.getElementById("card_type").value;
    let p = document.getElementById("exp_date").value;
    let q = document.getElementById("cvv").value;
    if (v=="" && x == "" && y == "" && z == "" && p == "" && q == "") {
      alert("Information must be filled out");
      return false;
    }
    if (v!="" && x != "" && y != "" && z != "" && p != "" && q != "") {
        alert("BDT "+200*v+" has been cut from your credit card");
        alert("Thanks for shopping!")
        return true;
      }
      if (v!="" || x != "" || y != "" || z != "" || p != "" || q != "") {
        alert("please fill the information");
        return false;
      }
  }