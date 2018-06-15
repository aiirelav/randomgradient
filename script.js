var cont = document.getElementById("container");
var currentID = 0;
var prevID = 0;

function createDivs(){
for(var i = 0; i<100; i++)
{
	var d = document.createElement('div');
	d.setAttribute('class', 'cell');
	d.setAttribute("id", (i+1).toString());
	cont.appendChild(d);
}
console.log("olala");
}

createDivs();


function getRandomNumber(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
}

function setRandomGradient(){
	currentID = getRandomNumber(1, 101);
	var getDiv = document.getElementById(currentID);
	getDiv.style.backgroundImage = 'linear-gradient(to right, rgb(' + getRandomNumber(0,256) + ',' + getRandomNumber(0,256)+ ',' + getRandomNumber(0,256) + '), rgb(' +
    + getRandomNumber(0,256) + ',' + getRandomNumber(0,256)+ ',' + getRandomNumber(0,256) + ')';
   
   console.log("working");
   console.log('linear-gradient(to right, rgb(' + getRandomNumber(0,255) + ',' + getRandomNumber(0,255)+ ',' + getRandomNumber(0,255) + '), rgb(' +
    + getRandomNumber(0,255) + ',' + getRandomNumber(0,255)+ ',' + getRandomNumber(0,255) + ')');
   if(prevID!==0) {var prev = document.getElementById(prevID);
                   prev.style.backgroundImage = 'none';}
    prevID = currentID;
}

setRandomGradient();

setInterval(setRandomGradient, 1000);