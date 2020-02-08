var myVar = setInterval(myTimer, 1000);
    function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString(); //tempo
    var c = d.toLocaleDateString(); //Data
    document.getElementById("dataHora").innerHTML = c + " " + t;
}

function chanceColor(color){
    document.getElementById("home").style.background = color;
} 
                