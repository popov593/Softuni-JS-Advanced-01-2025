class Hex {
    constructor (n) {
        this.value = n;
    }

    valueOf () {
        return this.value
    }

    plus (number) {
        let result = this.value + Number(number.valueOf());

        return new Hex(result);
    }

    minus (number) {
        let result = this.value - Number(number.valueOf());

        return new Hex(result);
    }

    toString () {

        return `0x${this.value.toString(16).toUpperCase()}`

    }

    parse (text) {
        return parseInt(text, 16)
    }

}

let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));