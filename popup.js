
// post the data to chrome.storage 
function postData() {
    
    // select input value 
    var _class = document.getElementById("class").value;
    var link = document.getElementById("link").value;
    var time = document.getElementById("time").value;

    // adds class, [link, time] to json
    chrome.storage.sync.set({_class: [link, time]}, function() {
        console.log(`${_class} is set to ${value}`);
    });

    alert("test");
}

document.addEventListener('DOMContentLoaded', function() {
    var submit = document.getElementById('submit');
    // onClick's logic below:
    submit.addEventListener('click', function() {
        console.log("test");
    });
});

