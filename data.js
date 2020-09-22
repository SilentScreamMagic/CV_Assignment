var fnamevalue ="Bryan";
var mnamevalue ="";
var lnamevalue="";
var gendervalue ="";
var numbervalue ="";
var emailvalue ="";
var addressvalue= "";


function valid(){
    
    var fname = document.getElementById("first").value;
    var mname = document.getElementById("middle").value;
    var lname = document.getElementById("last").value;
    var gender = document.getElementById("gender").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
   var message ="";
    

    if (fname == ""){
        message = message+"The first name field cannot be empty\n";
    }else{
        
        if (/^[a-zA-Z-]{1,}$/.test(fname)==false){
            message=message+"The first name must not contain numbers\n";
        }
    }
   
    if (mname == ""){
        message = message+ "The middle name field cannot be empty\n";
    }else{
        if (/^[a-zA-Z-]{1,}$/.test(mname)==false){
            message=message+"The middle name must not contain numbers\n";
        }
    }
    
    if (lname == ""){
        message = message+ "The last name field cannot be empty\n";
    }else {
        if (/^[a-zA-Z-]{1,}$/.test(lname)==false){
        message = message+"The last name must not contain numbers\n";
        }
    }
    
    if (gender == ""){
        message = message+ "The gender field cannot be empty\n";
    }

    
    if (number == ""){
        message = message+ "The phone number field cannot be empty\n";
    }else{
        
        if (/^0[0-9]{9}$/.test(number)==false){
            message=message+"Number must not contain letters\n";
        }
    }
    
    if (email == ""){
        message = message+ "The email field cannot be empty\n";
    }else{
        if (/[a-zA-Z.-].[a-zA-Z.-]+@ashesi.edu.gh/.test(email)==false){
            message=message+"Email must be an ashesi email\n";
        }
    }
    if(address==""){
        message = message+ "The address field cannot be empty\n";
    }

    if(message==""){
        
        localStorage.setItem("fname", fname);
        localStorage.setItem("mname", mname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("gender", gender);
        localStorage.setItem("number", number);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
       

        
        return true;
    }else{
        alert(message);
        return false;
    }
}

    function assign(){
        
        var name = document.getElementById("name");
        var address = document.getElementById("address");
        var number = document.getElementById("number");
        var email = document.getElementById("email");
        name.innerHTML = localStorage.getItem("fname")+ " "+localStorage.getItem("mname")+" "+ localStorage.getItem("lname");
        address.innerHTML=localStorage.getItem("address");
        number.innerHTML=localStorage.getItem("number");
        email.innerHTML=localStorage.getItem("email");

}
