const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weeksdays = document.querySelector('.weeks__days');
let currentDay = new Date().getDay();

week.forEach((day) => {
    let weekDay = document.createElement('p');
    if (day == week[currentDay - 1]){
        weekDay.className = "currDay";
    } else if (day == "Saturday" || day == "Sunday"){
        weekDay.className = "weekend";
    } else {
        weekDay.className = "justDay";
    }
    weekDay.textContent = day;
    weeksdays.append(weekDay);
})