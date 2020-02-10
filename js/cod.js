var myVar = setInterval(myTimer, 1000);
    function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString(); //tempo
    var c = d.toLocaleDateString(); //Data
    document.getElementById("dataHora").innerHTML = c + " " + t;
}

function chanceColor(color){
    document.getElementById("home").style.background = color;
    document.getElementById("myNav").style.background = color;
} 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNav").style.top = "0";
    document.getElementById("myNav").style.transition = "all 0.3s ease";
  } else {
    document.getElementById("myNav").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}

                