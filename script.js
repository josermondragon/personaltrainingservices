// time-clock at the bottom in the sidenav 
setInterval(myTimer, 1000);

function myTimer() {
    const t = new Date();
    document.getElementById("time").innerHTML = t.toLocaleTimeString();
}

setInterval(myTimer2, 1000);

function myTimer2() {
    const t2 = new Date();
    document.getElementById("date").innerHTML = t2.toLocaleDateString();
}