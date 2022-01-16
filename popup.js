
// post the data to chrome.storage 
function postData() {
    
    // select input value 
    var class = document.getElementById("class").value;
    var link = document.getElementById("link").value;
    var time = document.getElementById("time").value;

    // adds class, [link, time] to json
    chrome.storage.sync.set({class: [link, time]}, function() {
        console.log(`${class} is set to ${value}`);
    });

}


