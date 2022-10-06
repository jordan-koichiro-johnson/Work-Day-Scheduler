

var today = moment()

var hour = moment().format("H")



$("#currentDay").text(today.format("MMM, Do, YYYY, h A"))

$(`#${hour}`).css('background-color', 'green')


var timeClass = 9;


while (timeClass < hour) {
    
    $(`#${timeClass}`).css('background-color', 'silver')

    console.log(timeClass)
    
    
    timeClass ++
}

timeClass ++

while (timeClass > hour && timeClass < 18) {
    $(`#${timeClass}`).css('background-color', 'red')
    console.log(timeClass);
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
    console.log(eventObj.name)
}

for  (i=9; i<18; i++) {
    (function () {
        var b = $(`.${i}button`)[0]
        console.log(b)
        var e = $(`#${i}Event`)[0]
        b.addEventListener("click", function () {saveEvent(e);}, false)
        console.log("function ran")
    }());
}