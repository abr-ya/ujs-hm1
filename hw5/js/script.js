let menu = document.querySelector('.menu'),
    menuIt = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.querySelector('.adv'),
    forUser = document.getElementById('prompt');

let menuIt5 = document.createElement('li');
menuIt5.classList.add('menu-item');
menuIt5.innerHTML = 'Пятый пункт';

menu.insertBefore(menuIt[2], menuIt[1]);
menu.appendChild(menuIt5);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

let userThink = prompt("Как Вы относитесь к технике Apple?");
forUser.textContent = userThink;