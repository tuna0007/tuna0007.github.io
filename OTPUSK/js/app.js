const countdown = document.querySelector('.timer');
const departure = new Date('2023-09-28:00:00');

function getSecondsToVacation() {
    let now = new Date();
    let departure = new Date(2023, 7, 28);
    let res = departure - now;
    let seconds = Math.round(res / 1000);
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(getSecondsToVacation, 1000);

