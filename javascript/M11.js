import './styles.scss';


// const idInterval = setInterval(() => {
//     console.log('setInterval');
// }, 1500);

// const idTimeout = setTimeout((...prams) => {
//     console.log(prams);
//     clearInterval(idInterval);
// }, 5000, 'value1', 'value2');

// clearTimeout(idTimeout);

/*===========================================*/

// const date = new Date(new Date().getTime() - 10800000);

// console.log(date);

// // формат вывода
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// // Украина
// const localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk);

// const formatToMysql = (date) => {
//     let str = '';
//     str += date.getFullYear() + '-';
//     str += date.getMonth() + '-';
//     str += date.getDate() + ' ';

//     str += date.getHours() + ':';
//     str += date.getMinutes() + ':';
//     str += date.getSeconds();

//     return str;
// }

// console.log(formatToMysql(date));


// date.setDate(1);
// date.setMonth(4);
//console.log(date.getUTCHours());


/*==========================*/


const panelNode = document.querySelector('#panel');
const historyNode = document.querySelector('#history ul');
let currentSec = 0;
let timerId;

const getTimer = (secBase) => {
    let h = 0, m = 0, s = 0;

    if (secBase >= 60 * 60) {
        h = parseInt(secBase / (60 * 60));
        secBase %= (60 * 60);
    }
    if (secBase >= 60) {
        m = parseInt(secBase / 60);
        secBase %= 60;
    }

    s = secBase;

    h = h.toString().padStart(2, '0');
    m = m.toString().padStart(2, '0');
    s = s.toString().padStart(2, '0');
    return { h, m, s };
}

const printTimer = (timer) => {
    document.querySelector('.time-h').innerHTML = timer.h;
    document.querySelector('.time-m').innerHTML = timer.m;
    document.querySelector('.time-s').innerHTML = timer.s;
}

const saveHistory = (timer) => {
    const log = `<li>${timer.h}:${timer.m}:${timer.s}</li>`;
    historyNode.insertAdjacentHTML('beforeend', log);
}

const stopTimer = (e) => {
    if (timerId) clearInterval(timerId);
}

panelNode.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return false;

    if (e.target.dataset.action === 'start') {
        e.target.textContent = 'pause';
        e.target.dataset.action = 'pause';
        timerId = setInterval(() => printTimer(getTimer(++currentSec)), 1000);

        return false;
    }

    if (e.target.dataset.action === 'stop') {
        currentSec = 0;
        stopTimer();
        printTimer(getTimer(currentSec));
        const btnPause = panelNode.querySelector('[data-action="pause"]');

        if (btnPause) {
            btnPause.textContent = 'start';
            btnPause.dataset.action = 'start';
        }
        return false;
    }

    if (e.target.dataset.action === 'clear') {
        historyNode.innerHTML = '';

        return false;
    }

    if (e.target.dataset.action === 'pause') {
        e.target.textContent = 'start';
        e.target.dataset.action = 'start';

        stopTimer();
        saveHistory(getTimer(currentSec));
        
        return false;
    }

});