//array for colours
const colours = ["green","red","rgba(133,122,200","#f15025"];

const button = document.getElementById("btn");
const colourText = document.querySelector(".colour");

//event listener

button.addEventListener("click",function(){

    //console.log(document.body);
    document.body.style.backgroundColor = colours[getRandomNumber()];

    colourText.textContent = colours[getRandomNumber()];

})
    //generate Random Number
function getRandomNumber(){

    const randomNumber = Math.floor(Math.random()*colours.length);
    return randomNumber;
}