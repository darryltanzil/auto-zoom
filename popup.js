<<<<<<< HEAD
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
=======
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
>>>>>>> bd766d8f71e1f1f79e2d7261b87e713901e12b64
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}