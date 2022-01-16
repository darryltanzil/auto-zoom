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

function changeBackground() {
    var imgNumber = Math.floor((Math.random() * 6) + 1);
    var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
    $('html').css({'background-image': 'url(background-images/' + images[imgNumber]});
}

changeBackground();

document.getElementById("enterName").addEventListener("click", function() {
    var name = getElementById("name").value;
    document.querySelector("h2").innerHTML = "Good " + timeGreeting + ", " + name + "!";
})