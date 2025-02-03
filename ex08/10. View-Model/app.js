class Textbox {
    
    constructor(selector, invalidSymbols) {

        this._elements = Array.from(document.querySelectorAll(selector));

        this._invalidSymbols = invalidSymbols;

        this._value = this._elements[0]?.value || '';

        this._elements.forEach (el => {
            el.addEventListener('input', (e) => {
                this.value = e.target.value;
            });
        });

    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this._elements.forEach(el => el.value = val);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this._value);
    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
console.log(textbox);
let inputs = document.getElementsByClassName('.textbox');
console.log(inputs);
Array.from(inputs).forEach(input => {
    input.addEventListener('click', () => {
        console.log(textbox.value);
    })
})
//inputs.addEventListener('click',function(){console.log(textbox.value);});
