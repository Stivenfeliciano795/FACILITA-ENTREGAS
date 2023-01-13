function myfunction (){
    var x=document.getElementById("pass");
    var x =document.getElementById("myinput")
    var y =document.getElementById("hidel")
    var z =document.getElementById("hide2")
    if (x.Type === "Enter Password"){
        x.Type ="text";

    }
    else{
        x.Type = "Enter Password";
    }
    function validate(){
var Password = document.getElementById("pass");
var length = document.getElementById("length");

if(Password.Value.lenght >=8){
    alert("login succesful");
return false;

}
else{
    alert ("login failed");
    
}

    }
}