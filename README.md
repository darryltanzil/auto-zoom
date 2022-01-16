
# FuZe Chrome Extension - (automatic zoom link opener)

## Description
Developed for the NwHacks hackathon, FuZe attempts to automate a mundane problem that plagues university student and office worker alike in the pandemic era - forgetting to open a zoom link.


## Features

#### New Tab Page
With our extension comes a redesigned new tab page! Developed using pure HTML, CSS, and JavaScript, this simple yet effective page minimizes distractions that may hinder, in order to bring to focus what really matters. By automatically opening Zoom links at each of their corresponding times, this page ensures that no Zoom meeting will be missed.

#### Zoom Pop-up
Our intuitive Zoom Pop-up page completely removes the hassle of frantically searching for a zoom link on Canvas right before the start of class. One can simply fill in the form on the pop-up, add all of their Zoom links for the semester, and have them appear in an organized table on their new tab page, where they can be easily accessed.


## Installation
By downloading this repository (and possibly later the Google Store), and uploading the directory as an unpacked extension, students will be able to use both the pop-up, as well as the new tab page. The new tab page will appear whenever a new tab is opened, and the Zoom pop-up can be shown by clicking the FuZe icon that appears in the top right bar of the browser window.


## Creation Process
This project was a collaborative effort between a team of 4 programmers using Github's built-in Pull/Commit/Push mechanism.

#### Design
The framework and styling of this automatic zoom link opener, including the pop-up and the new tab page, were created entirely using HTML, CSS and JavaScript. The back-end of this project utilizes the chrome.storage API to store data submitted by a user from an HTML form on the Zoom pop-up (class name, zoom link, time, days). The data is then retrieved and shown on the new tab page in a table. From there, an EventListener keeps track of the current time on the user's device, and automatically opens the correct Zoom link at the correct time in a new tab.


## Future Endeavours
  - Carousel to display all the classes that students are enrolled in on any given day of the week.
  - Similar features to the Zoom pop-up and link table for assignments.
  - A corresponding mobile application.
  - Add a feature to allow users to edit and remove existing links.
