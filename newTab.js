function currentTime() {
    setTimeout(function() {
        var today = new Date();
        var time = today.toLocaleTimeString();
        document.getElementById("time").innerHTML = time;
        currentTime();
    }, 1000)
}

currentTime();

function currentDate() {
    setTimeout(function() {
        var today = new Date();
        var date = today.toLocaleDateString();
        document.getElementById("date").innerHTML = date;
        currentDate();
    }, 1000)
}

currentDate();