
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // создаем promise
    let promise = new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                resolve();
            } else if (request.readyState === 4 && request.status != 200) {
                reject();
            }
        });        
    });

    // ставим загрузку
    inputUsd.value = "рассчет...";
    // слушаем промис
    promise
        .then(
            result => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            },
            error => {
                inputUsd.value = "Что-то пошло не так!";
            }
        );
});