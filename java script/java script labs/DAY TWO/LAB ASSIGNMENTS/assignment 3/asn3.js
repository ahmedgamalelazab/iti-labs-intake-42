

var todayDate = new Date();

var daysInWeek = [

    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'

];

document.write(
    `<h1>${daysInWeek[todayDate.getDay()]}</h1>`
);



