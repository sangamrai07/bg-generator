var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("main-color");
var random = document.getElementById("random-color");

css.textContent = "linear-gradient(to right," + color1.value + "," + color2.value+ ")";

function setgradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value+ ")";
    css.textContent = "linear-gradient(to right," + color1.value + "," + color2.value+ ")";

}

function random1() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
function random2(){
    body.style.background = "linear-gradient(to right," + random1() + "," + random1()+ ")";
    css.textContent = "linear-gradient(to right," + random1() + "," + random1() + ")";
}

color1.addEventListener("input",setgradient);

color2.addEventListener("input",setgradient);
random.addEventListener("click",random2);


