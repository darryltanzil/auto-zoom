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
                if (cube[2].concat(":00") == today_.format("HH:MM:ss")) {
                    window.open(cube[1], '_blank');
                }
                else{
                    console.log(cube[2].concat(":00") + "==" + today_.format("HH:MM:ss"));
                }
           }
    });
}


currentDate();

function changeBackground() {
    var imgNumber = Math.floor((Math.random() * 4));
    var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
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

    var dateFormat = function () {
        var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            timezoneClip = /[^-+\dA-Z]/g,
            pad = function (val, len) {
                val = String(val);
                len = len || 2;
                while (val.length < len) val = "0" + val;
                return val;
            };
    
        // Regexes and supporting functions are cached through closure
        return function (date, mask, utc) {
            var dF = dateFormat;
    
            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                mask = date;
                date = undefined;
            }
    
            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date;
            if (isNaN(date)) throw SyntaxError("invalid date");
    
            mask = String(dF.masks[mask] || mask || dF.masks["default"]);
    
            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) == "UTC:") {
                mask = mask.slice(4);
                utc = true;
            }
    
            var	_ = utc ? "getUTC" : "get",
                d = date[_ + "Date"](),
                D = date[_ + "Day"](),
                m = date[_ + "Month"](),
                y = date[_ + "FullYear"](),
                H = date[_ + "Hours"](),
                M = date[_ + "Minutes"](),
                s = date[_ + "Seconds"](),
                L = date[_ + "Milliseconds"](),
                o = utc ? 0 : date.getTimezoneOffset(),
                flags = {
                    d:    d,
                    dd:   pad(d),
                    ddd:  dF.i18n.dayNames[D],
                    dddd: dF.i18n.dayNames[D + 7],
                    m:    m + 1,
                    mm:   pad(m + 1),
                    mmm:  dF.i18n.monthNames[m],
                    mmmm: dF.i18n.monthNames[m + 12],
                    yy:   String(y).slice(2),
                    yyyy: y,
                    h:    H % 12 || 12,
                    hh:   pad(H % 12 || 12),
                    H:    H,
                    HH:   pad(H),
                    M:    M,
                    MM:   pad(M),
                    s:    s,
                    ss:   pad(s),
                    l:    pad(L, 3),
                    L:    pad(L > 99 ? Math.round(L / 10) : L),
                    t:    H < 12 ? "a"  : "p",
                    tt:   H < 12 ? "am" : "pm",
                    T:    H < 12 ? "A"  : "P",
                    TT:   H < 12 ? "AM" : "PM",
                    Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                    o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                    S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                };
    
            return mask.replace(token, function ($0) {
                return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
        };
    }();
    
    // Some common format strings
    dateFormat.masks = {
        "default":      "ddd mmm dd yyyy HH:MM:ss",
        shortDate:      "m/d/yy",
        mediumDate:     "mmm d, yyyy",
        longDate:       "mmmm d, yyyy",
        fullDate:       "dddd, mmmm d, yyyy",
        shortTime:      "h:MM TT",
        mediumTime:     "h:MM:ss TT",
        longTime:       "h:MM:ss TT Z",
        isoDate:        "yyyy-mm-dd",
        isoTime:        "HH:MM:ss",
        isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };
    
    // Internationalization strings
    dateFormat.i18n = {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
    };
    
    // For convenience...
    Date.prototype.format = function (mask, utc) {
        return dateFormat(this, mask, utc);
    };

function shootHTML() {
    chrome.storage.sync.get(['current_code'], function(result) {
        if (result.current_code) {
            document.getElementById("class_monday").innerHTML = result.current_code;
        }
        else {
            document.getElementById("class_monday").innerHTML = "<p>Add some classes to view them here!</p>";
        }
    });
}

shootHTML();
    