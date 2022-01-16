// post the data to chrome.storage 
function postData() {
    
    // select input value 
    var _class = document.getElementById("class").value;
    var form_link = document.getElementById("link").value;
    var form_time = document.getElementById("time").value;

    // adds class, [link, time] to json
    chrome.storage.sync.set({course: [form_link, form_time]}, function() {
        console.log(`${_class} is set to ${form_link}, at ${form_time}`);
    });
    
    getData();
}

function getData() {
    chrome.storage.sync.get(['key'], function(result) {
        console.log('Value currently is ' + result.key);
      });
}

document.addEventListener('DOMContentLoaded', function() {
    var submit = document.getElementById('submit');
    // onClick's logic below:
    submit.addEventListener('click', function() {
        postData()
    });
});