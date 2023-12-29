
$(".donate-form-offline").hide();
$(".donate-form-card").show();




function DoSomething(){
if ($("#offlinecheck").prop("checked", true)){
  $(".donate-form-offline").show();
  $(".donate-form-card").hide();
}
          
}
function DoSomething1(){
  if ($("#creditcheck").prop("checked", true)){
    $(".donate-form-offline").hide();
    $(".donate-form-card").show();
  }          
  }

// let donate = []
// let donateJson = JSON.stringify(donate)
// localStorage.setItem('donate',donateJson)

//Add to donate database whenever anyone clicks submit
let submit = document.querySelector('.submit')
function donate(){
        let donate = JSON.parse(localStorage.getItem('donate'));
        var profile = [];
        var fname = document.getElementById("inputFname").value;
        var lname = document.getElementById("inputLname").value;
        var company = document.getElementById("inputCompanyName").value;
        var mail = document.getElementById("inputEmail").value;
        var zip = document.getElementById("inputZip").value;
        var amount = document.getElementById("value").value;
        if (donate_validation(fname, lname, mail, amount)){
          profile.push({
            fname: fname, 
            lname: lname, 
            company: company,
            mail: mail, 
            zip: zip,
            amount: amount});
          donate.push(profile)
          console.log(donate)
          let donateJson = JSON.stringify(donate)
          localStorage.setItem('donate', donateJson)
          alert("Donate Recorded!")
        } else{
          alert("Please filled in all the required field")
        }
};

function donate1(){
  let donate = JSON.parse(localStorage.getItem('donate'));
  var profile = [];
  var fname = document.getElementById("inputFname").value;
  var lname = document.getElementById("inputLname").value;
  var company = document.getElementById("inputCompanyName").value;
  var mail = document.getElementById("inputEmail").value;
  var zip = document.getElementById("inputZip").value;
  var amount = document.getElementById("value1").value;
  if (donate_validation(fname, lname, mail, amount)){
    profile.push({
      fname: fname, 
      lname: lname, 
      company: company,
      mail: mail, 
      zip: zip,
      amount: amount});
    donate.push(profile)
    console.log(donate)
    let donateJson = JSON.stringify(donate)
    localStorage.setItem('donate', donateJson)
    alert("Donate Recorded!")
  } else{
    alert("Please filled in all the required field")
  }
 
};

function donate_validation(a,b,c,d){
  if (a == "" || b==""||c==""|| d==""){
    return false;
  } else{
    return true;
  }
}




