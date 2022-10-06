

var today = moment()

var hour = moment().format("H")

var dailyActivities = []

$("#currentDay").text(today.format("MMM, Do, YYYY, h A"))

$(`#${hour}`).css('background-color', 'green')


var timeClass = 9;


while (timeClass < hour) {
    
    $(`#${timeClass}`).css('background-color', 'silver')

  
    
    
    timeClass ++
}

timeClass ++

while (timeClass > hour && timeClass < 18) {
    $(`#${timeClass}`).css('background-color', 'red')
   
    timeClass ++
}



// for (i=9; i < 18; i++) {
    
//     var buttonClass = i;
    
//     $(`.${i}button`).on("click", saveClick)

// }

// function saveClick(event) {
    
//     event.preventDefault
//     console.log("click")
//     console.log(event)
    
//     let currentTime = event.currentTarget.name
//     console.log(currentTime)
//     var eventAtTime = $(`#${buttonClass}Event`).val()
//     console.log(`#${buttonClass}Event`)
//     console.log(eventAtTime);
// }

function saveEvent(eventObj) {
    // console.log(eventObj.name)
    var eventAtTime = eventObj.value
    // console.log(eventAtTime)
    // console.log(eventObj.parentElement)
    // let pEl = document.createElement("p")
    // eventObj.parentElement.prepend(pEl)
    // pEl.innerText = eventAtTime
    // console.log(pEl.innerText)
    let dailyActivitiesObject = {
        time: eventObj.name,
        activity: eventAtTime
    }
    dailyActivities.unshift(dailyActivitiesObject)
    console.log(dailyActivities)
    localStorage.setItem(dailyActivities[0].time, dailyActivities[0].activity)
    localStorage.removeItem(dailyActivities[0])
}


function weFocusing(focusThing) {
    focusThing.focus()
}

for  (i=9; i<18; i++){


    let storageActivities = localStorage.getItem(`${i}Event`)
    console.log(storageActivities)
    let classActivities = $(`#${i}Event`)[0]
    console.log(classActivities)
    classActivities.value = storageActivities
}

for  (i=9; i<18; i++) {
    (function () {
        var b = $(`.${i}button`)[0]
      
        var e = $(`#${i}Event`)[0]
        b.addEventListener("click", function () {saveEvent(e);}, false)
    
        e.parentElement.addEventListener("click", function () {weFocusing(e);}, false)
    }())
}

