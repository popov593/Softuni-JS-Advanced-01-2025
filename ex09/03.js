function extensibleObject() {
    let obj = {

        extend: function (template) {

            for (let parentProp of Object.keys(template)) {
                
                if (typeof template[parentProp] === 'function') {
                    Object.getPrototypeOf(this)[parentProp] = template[parentProp];
                } else {
                    this[parentProp] = template[parentProp];
                }

            }

        }

    };

    return obj;
}

const myObj = extensibleObject();

console.log(myObj);

const template = {

    extensionMethod: function () { },

    extensionProperty: 'someString'

}

console.log(template);

myObj.extend(template);

console.log(myObj);