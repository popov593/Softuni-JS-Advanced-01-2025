function solve() {

  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);

  buyBtn.addEventListener('click', buy);

  const items = [];

  function generate() {

    const data = JSON.parse(input.value);

    for (let item of data) {

      const checkBox = createRowData('input', {type: 'checkbox'});

      const row = createRowData(
        'tr', {},
        //img
        createTableCell(createRowData('img', {src: item.img})),
        //name
        createTableCell(createParagraph(item.name)),
        //price
        createTableCell(createParagraph(item.price)),
        //decFactor
        createTableCell(createParagraph(item.decFactor)),
        //checkbox
        createTableCell(checkBox)
      );

      items.push({
        element: row,
        isChecked,
        item
      });

      table.appendChild(row);

      function isChecked() {
        return checkBox.checked;
      }

    }

  }

  function createParagraph(...content) {
    return createRowData('p', {}, ...content);
  }

  function createRowData(type, props, ...content) {
    const element = document.createElement(type);

    for (let prop in props) {
      element[prop] = props[prop];
    }

    for (let entry of content) {
      if (typeof entry == 'string' || typeof entry == 'number') {
        entry = document.createTextNode(entry);
      }
      element.appendChild(entry);
    }

    return element;
    
  }

  function createTableCell(...content) {
    return createRowData('td', {}, ...content);
  }

  function buy() {
    const furniture = items.
      filter(i => i.isChecked()).
      reduce((acc, { item: c }, i, a) => {
        acc.names.push(c.name);
        acc.total += Number(c.price);
        acc.decFactor += Number(c.decFactor / a.length);

        return acc
      }, {names: [], total: 0, decFactor: 0});
    

    const result =  `Bought furniture: ${furniture.names.join(', ')} Total price: ${furniture.total.toFixed(2)} Average decoration factor: ${furniture.decFactor}`

    output.value = result;
  }
}