//hex colours

const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

//hex colour
//# followed by 6 characters
//#f15025
const button = document.getElementById("btn");
const colourText = document.querySelector(".colour");

//event listener

button.addEventListener("click",function(){

    //console.log(document.body);
   
    //generate Random Number
    
    let hexColour = "#";
    for(let i = 0; i<6; i++){

        hexColour+=hex[getRandomNumber()];
    }
    //change background colour
    document.body.style.backgroundColor = hexColour;
    colourText.textContent = hexColour;

})

function getRandomNumber(){

    const randomNumber = Math.floor(Math.random()*hex.length);
    return randomNumber;
}