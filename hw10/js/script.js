// window.addEventListener('load')  // полная загрузка страницы с файлами

// тестовая функция
function test() {
    console.log(42);
}


window.addEventListener('DOMContentLoaded', function() {
    'use strict';


    // Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    // скроем все вкладки, кроме нулевой, модалку на кнопку 0-й вкладки
    hideTab(1);
    tabContent[0].querySelector('.description-btn').addEventListener('click', modalOn);

    function showTab(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tabContent[b].querySelector('.description-btn').addEventListener('click', modalOn);    
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTab(0);
                    showTab(i);
                    break;
                }
            }            
        }
    });


    // Timer
    let deadline = '2019-01-27';

    function getTimeRamaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // кол-во миллисекунд
            sec = Math.floor((t/1000) % 60),
            min = Math.floor((t/1000/60) % 60),
            hou = Math.floor(t/1000/60/60);
        
        return {
            'total': t,
            'hours': hou,
            'minutes': min,
            'seconds': sec
        }
    }

    function setClock(id,endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRamaining(endtime);
            //console.log(t);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                t.hours = '00';
                t.minutes = 0;
                t.seconds = 0;
            };

            let min = (t.minutes > 9) ? t.minutes : '0' + t.minutes,
                sec = (t.seconds > 9) ? t.seconds : '0' + t.seconds;
            //console.log(sec);
            hours.textContent = t.hours;
            minutes.textContent = min;
            seconds.textContent = sec;
        }
    }

    setClock('timer', deadline);


    // Modal
    function modalOn() {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; // запрет прокрутки страницы        
    }

    function modalOff() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; // вернуть прокрутку     
    }

    let more = document.querySelector('.more'), // кнопка
        overlay = document.querySelector('.overlay'), // модалка
        close = document.querySelector('.popup-close'); // крестик

    more.addEventListener('click', modalOn);
    close.addEventListener('click', modalOff);
});