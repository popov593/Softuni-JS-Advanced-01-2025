function generateReport() {
    // Създаваме обект 'html', който съдържа препратки към необходимите HTML елементи:
    const html = {
        // Взимаме всички чекбоксове от заглавията на колоните в таблицата
        checkboxes: document.querySelectorAll("input[type='checkbox']"),
        // Взимаме всички редове от таблицата
        rows: document.getElementsByTagName("tr"),
        // Взимаме текстовото поле с id 'output', където ще покажем резултата
        output: document.getElementById("output"),
    };

    // Създаваме масив 'selected', който ще съдържа имената и индексите на избраните (чекнати) колони:
    const selected = Array.from(html.checkboxes) // Превръщаме NodeList от чекбоксове в масив
        .map((checkbox, index) => [checkbox, index]) // Създаваме масив от двойки [чекбокс, индекс]
        .filter(([checkbox]) => checkbox.checked) // Филтрираме само чекнатите чекбоксове
        .map(([checkbox, index]) => [checkbox.name, index]); // Създаваме масив от двойки [име на колоната, индекс]

    // Създаваме масив 'rowData', който ще съдържа данните от таблицата:
    const rowData = Array.from(html.rows) // Превръщаме HTMLCollection от редове в масив
        .slice(1) // Премахваме първия ред (заглавията на колоните)
        .map(row => Array.from(row.children).map(cell => cell.textContent)); // Вземаме текстовото съдържание на всяка клетка

    // Генерираме JSON резултат и го поставяме в текстовото поле 'output':
    html.output.value = JSON.stringify(
        rowData.map(row => // Обхождаме всеки ред от данните
            selected.reduce((acc, [colName, colIndex]) => { // За всяка избрана колона
                acc[colName] = row[colIndex]; // Добавяме свойство към обекта с име на колоната и стойност от съответната клетка
                return acc; // Връщаме натрупания обект
            }, {}) // Започваме с празен обект
        ),
        null,
        2 // Форматираме JSON с отстъп за по-добра четимост
    );
}