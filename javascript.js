function Grow() {
    document.getElementById('box').style.display="block";
    document.getElementById('box').style.width="250px";
    document.getElementById('box').style.height="200px"
}

function Blue() {
    document.getElementById('box').style.display="block";
    document.getElementById('box').style.backgroundColor="blue"; 
}

function Fade() {
    document.getElementById('box').style.display="block";
    document.getElementById('box').style.opacity="0.5"
}

function Reset() {
    document.getElementById('box').style.display="block";
    document.getElementById('box').style.height="150px"; 
    document.getElementById('box').style.width="150px"; 
    document.getElementById('box').style.margin="25px";
    document.getElementById('box').style.opacity="1.0";
    document.getElementById('box').style.backgroundColor="orange";
    document.getElementById('Press').style.display="block";
    document.getElementById('Show').style.display="none";
    document.getElementById('Press').innerHTML="Press the buttons to change the box!";
}

function ClickMe() {
    document.getElementById('box').style.display="block";
    document.getElementById('Show').style.display="none";
    document.getElementById('Press').style.display="block";
    document.getElementById('Press').innerHTML="Hello there!";
}

function DoNot() {
    document.getElementById('Show').style.display="block";
    document.getElementById('Press').style.display="none";
    document.getElementById('box').style.display="none";
}