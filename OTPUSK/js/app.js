const countdown = document.querySelector('.timer');
const departure = new Date('2023-09-28:00:00');

function getSecondsToVacation() {
    let now = new Date();
    let departure = new Date(2023, 7, 28);

    console.log("now " + now);
    console.log(departure);

    let res = departure - now;

    let seconds = Math.round(res / 1000);
    
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

  
}

// Обновляем счетчик каждую секунду
setInterval(getSecondsToVacation, 1000);






// let now = new Date();
// let departure = new Date(2023, 7, 28);

// console.log("now " + now);
// console.log(departure);

// let res = departure - now;

// return Math.round(res / 1000);