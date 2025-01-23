function solve() {
    // Намираме елемента <select> с id 'selectMenuTo', където ще добавим опциите за конвертиране
    let menuToElement = document.getElementById('selectMenuTo');
    // Намираме текстовото поле за въвеждане на числото, което ще конвертираме
    let numberInputElement = document.getElementById('input');
    // Намираме текстовото поле, където ще покажем резултата от конвертирането
    let resultElement = document.getElementById('result');

    // Намираме бутона за конвертиране
    let buttonElement = document.getElementsByTagName('button')[0];

    // Създаваме нова опция за конвертиране към двоична бройна система
    let binaryMenuElement = document.createElement('option');
    binaryMenuElement.textContent = 'Binary'; // Текстът, който потребителят ще вижда
    binaryMenuElement.value = 'binary'; // Стойността, която ще използваме за идентификация
    menuToElement.appendChild(binaryMenuElement); // Добавяме опцията към <select> елемента

    // Създаваме нова опция за конвертиране към шестнадесетична бройна система
    let hexadecimalMenuElement = document.createElement('option');
    hexadecimalMenuElement.textContent = 'Hexadecimal'; // Текстът, който потребителят ще вижда
    hexadecimalMenuElement.value = 'hexadecimal'; // Стойността, която ще използваме за идентификация
    menuToElement.appendChild(hexadecimalMenuElement); // Добавяме опцията към <select> елемента

    // Добавяме събитие 'click' към бутона, което ще се изпълни при натискането му
    buttonElement.addEventListener('click', () => {
        // Вземаме въведената стойност и я преобразуваме в число
        let number = Number(numberInputElement.value);

        // Проверяваме избраната опция за конвертиране
        if (menuToElement.value === 'binary') {
            // Ако е избрано 'binary', конвертираме числото в двоична бройна система
            resultElement.value = number.toString(2); // toString(2) преобразува числото в двоичен формат
        } else if (menuToElement.value === 'hexadecimal') {
            // Ако е избрано 'hexadecimal', конвертираме числото в шестнадесетична бройна система
            resultElement.value = number.toString(16).toUpperCase(); // toString(16) преобразува числото в шестнадесетичен формат и го правим с главни букви
        }
    });
}