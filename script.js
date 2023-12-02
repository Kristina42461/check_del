knopka.onclick = function () {
    firstName = prompt('Как вас зовут? ');
    if (firstName) {
        alert('Добро пожаловать ' + firstName + '!')
    }
    else {
        alert('Добро пожаловать ноунейм!')
    }
}

knopka2.onclick = function () {
    let input, random = Math.floor(Math.random() * 10);
    while (input = prompt('Угадай число! от 0 до 9 ')) {
        if (isNaN(input)) {
            alert('Введите число!');
        }
        else if (input > random) {
            alert('Введите число меньше!');
        }
        else if (input < random) {
            alert('Введите число больше!');
        }
        else if (input == random) {
            alert('Ты угадал!');
            break;
        }
    }
}