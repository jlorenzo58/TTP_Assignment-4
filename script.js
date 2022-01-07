//1) When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
button1=document.body.getElementsByClassName("button1")[0];
button1.onclick = function() {
    document.getElementById("text").innerText = "I'm right";
}
button2=document.body.getElementsByClassName("button2")[0];
button2.onclick = function(){
    document.getElementById("text").innerText = "No, I'm right!";
}

//2) When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!
let hover=document.getElementById("hover-text");
hover.onmouseover = function(){
    alert("Hey, I told you not to hover over me!");
}

//4) checks that the password is 12345678. if the password is incorrect, send an alert message. Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page
function validatePassword(){
    event.preventDefault();
    let header=document.querySelector("h1");
    let password = document.getElementById("inputPassword").value;
    if(password!="12345678"){
        alert("Incorrect Password!");
    }
    else{
        header.innerText="The password entered was correct. Have a great day."
    }
}
