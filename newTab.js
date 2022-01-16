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
