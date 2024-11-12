function ran(){
    return Math.floor(Math.random()*8)+1;
}

let otp={"o":ran(),"s":ran(),"t":ran(),"f":ran(),"fi":ran()};
console.log(otp);
 
function test(){
    document.querySelector('.test-window').style="display:block";
}

