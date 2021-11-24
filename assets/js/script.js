// Clock Variables
let digEl = document.querySelector('.digital'), 
sEl = document.querySelector('.p_s'), 
mEl = document.querySelector('.p_m'),
hEl = document.querySelector('.p_h');

// Cronometer Variables
let zeroTime =new Date('0 00:00:00'),
timer

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //Relogio Digital
    digEl.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    //Relogio Analogico
    sDeg = ((360/60) * second) - 90;
    mDeg = ((360/60) * minute) - 90;
    hDeg = ((360/12) * hour) + ((30/60) * minute) - 90;

    sEl.style.transform = `rotate(${sDeg}deg)`
    mEl.style.transform = `rotate(${mDeg}deg)`
    hEl.style.transform = `rotate(${hDeg}deg)`

}
function fixZero(time) {return time < 10 ? `0${time}` : time;}


// Cronometro

function startCronos() {
    cronometer();
    timer = setInterval(cronometer, 1);
    
    
}

function stopCronos() {
    clearInterval(timer);
}

function restartCronos() {
    numero = new Date('2020-01-01 00:00:00')
    document.querySelector('.crono--timer').innerHTML = '00:00:00.000';
}

function cronometer() {
    let h = zeroTime.getHours();
    let m = zeroTime.getMinutes();
    let s = zeroTime.getSeconds();
    let mls = zeroTime.getMilliseconds();

    zeroTime.setMilliseconds(zeroTime.getMilliseconds() + 1) 
    document.querySelector('.crono--timer').innerHTML = `${fixZero(h)}:${fixZero(m)}:${fixZero(s)}.${fixMLS(mls)}`;
}

function fixMLS(mils) {
    if(mils < 10) {
        return `00${mils}`
    }
    else if (mils > 10 && mils < 100) {
        return `0${mils}`
    }
    else if(mils > 100) {
        return mils
    } else 
        return '000'
}

//Atualiza o relogio a cada 1 segundo
setInterval(updateClock, 1000)
updateClock();

//Events
document.querySelector('.start').addEventListener('click', startCronos);
document.querySelector('.stop').addEventListener('click', stopCronos);
document.querySelector('.restart').addEventListener('click', restartCronos);