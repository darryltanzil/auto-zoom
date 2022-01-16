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
        var date = today.toLocaleDateString();
        var day = today.getDay();
        document.getElementById("date").innerHTML = date;
        document.getElementById("day").innerHTML = days[day];
        currentDate();
    }, 1000)
}

currentDate();

function changeBackground() {
    var imgNumber = Math.floor((Math.random() * 4));
    var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
    $('html').css({'background-image': 'url(background-images/' + images[imgNumber],
                });
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
