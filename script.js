var today = moment()
var hour = moment().format("H")
var dailyActivities = []

$("#currentDay").text(today.format("MMM, Do, YYYY, h A"))

$(`#${hour}`).css('background-color', 'green')

var timeClass = 9;

// set background equal to color depending on time

while (timeClass < hour) {
    $(`#${timeClass}`).css('background-color', 'silver')
    
    timeClass ++
}

timeClass ++

while (timeClass > hour && timeClass < 18) {
    $(`#${timeClass}`).css('background-color', 'red')
   
    timeClass ++
}

// put existing value into an array which is saved to local storage

function saveEvent(eventObj) {
    var eventAtTime = eventObj.value
    let dailyActivitiesObject = {
        time: eventObj.name,
        activity: eventAtTime
    }
    dailyActivities.unshift(dailyActivitiesObject)
    localStorage.setItem(dailyActivities[0].time, dailyActivities[0].activity)
    localStorage.removeItem(dailyActivities[0])
}

// focus on form on div click

function weFocusing(focusThing) {
    focusThing.focus()
}

//add local storage to page on page load

for  (i=9; i<18; i++){
    let storageActivities = localStorage.getItem(`${i}Event`)
    let classActivities = $(`#${i}Event`)[0] 
    classActivities.value = storageActivities
}

// create event listeners

for  (i=9; i<18; i++) {
    (function () {
        var b = $(`.${i}button`)[0]
        var e = $(`#${i}Event`)[0]
        b.addEventListener("click", function () {saveEvent(e);}, false)
        e.parentElement.addEventListener("click", function () {weFocusing(e);}, false)
    }())
}

