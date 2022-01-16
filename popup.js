// post the data to chrome.storage 
function postData() {

    // select input value 
    var _class = document.getElementById("class").value;
    var form_link = document.getElementById("link").value;
    var form_time = document.getElementById("time").value;
    var mon = (document.getElementById("monday").checked === true)? "Mondays " : "";
    var tue = (document.getElementById("tuesday").checked === true)? "Tuesdays " : "";
    var wed = (document.getElementById("wednesday").checked === true)? "Wednesdays " : "";
    var thu = (document.getElementById("thursday").checked === true)? "Thursdays " : "";
    var fri = (document.getElementById("friday").checked === true)? "Fridays " : "";

    // adds class, [link, time] to json
    chrome.storage.sync.set({[_class] : [form_link, form_time, mon, tue, wed, thu, fri, _class]}, function() {
        alert(`${_class} is set to ${form_link}, at ${form_time}, on ${mon + tue + wed + thu + fri}`);
    });
    getData();
}

function getData() {
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.values(items);
        alert(allKeys);
           for(var i = 0; i < allKeys.length; i++) {
               var cube = allKeys[i];
               for(var j = 0; j <= 7; j++) {
                   alert("cube[" + i + "][" + j + "] = " + cube[j]);
               }
           }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var submit = document.getElementById('submit');
    // onClick's logic below:
    submit.addEventListener('click', function() {
        postData()
    });
});