function encodeAndDecodeMessages() {
    
    let buttons = Array.from(document.querySelectorAll('#main button'));

    let textHolders = Array.from(document.querySelectorAll('#main textarea'));

    buttons[0].addEventListener('click', sendAndCode);
    buttons[1].addEventListener('click', decode);

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    function tansform(text, fn) {
        return text.split('').map(fn).join('');
    }

    function sendAndCode() {

        textHolders[1].value = tansform(textHolders[0].value, nextChar);

        textHolders[0].value = '';

    }

    function decode() {

        textHolders[1].value = tansform(textHolders[1].value, prevChar)

    }

}