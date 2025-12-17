// Question #3
let userPassword = "";

function checkPasswordStrength(userPassword){

    let totalPassword = userPassword.length;
    
        if(totalPassword < 6){
             return "Weak";
        }
        else if(totalPassword < 10 && totalPassword> 6){
            return "Medium";
        }
        else if(totalPassword> 10){
            return "Strong";
        }   
}

console.log(checkPasswordStrength(userPassword));