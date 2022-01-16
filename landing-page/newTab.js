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
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var today = new Date();
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
        var day = today.getDay();
        document.getElementById("date").innerHTML = date;
        document.getElementById("day").innerHTML = days[day];
        currentDate();
        checkForTime();
    }, 1000)
}


function checkForTime() {
    var today_ = new Date();
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.values(items);
           for(var i = 0; i < allKeys.length; i++) {
               var cube = allKeys[i];
               stringtoAdd = stringtoAdd + "<tr>";
                if (cube[1] == today_.format("H:MM")) {
                    window.open(cube[0], '_blank');
                }
           }
    });
}


currentDate();

function changeBackground() {
    var imgNumber = Math.floor((Math.random() * 5));
    var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
    document.body.style.background = "url('background-images/" + images[imgNumber] + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 227%";
    document.body.style.backgroundPosition = "center";

}

changeBackground();

document.querySelector('#enterName').addEventListener("click", function() {
        var today = new Date();
        var hour = today.getHours();
        
        var name = document.querySelector("#name").value;

        if (hour < 12) {
            greeting = "morning";
        }

        else if (hour >= 12 && hour < 18) {
            greeting = "afternoon";
        }

        else {
            greeting = "evening";
        }

        document.querySelector('h2').innerHTML = "Good " + greeting + ", " + name + "!";

        document.querySelector("#name").classList.add("hidden");
        document.querySelector("#enterName").classList.add("hidden");
    })
