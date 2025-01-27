function commandProcessorIIFE(commands) {

    let commandProcessor = (function () {

        let arr = [];

        return {

            create: (name, inherit, otherName) => {

                if (inherit === 'inherit') {

                    let element = arr.find(x => x.name === otherName);

                    let newElement = Object.create(element);

                    newElement.name = name;

                    arr.push(newElement);

                } else {

                    let newElement = new Foo(name);
                    arr.push(newElement);

                }

            },
            set: (name, property, value) => {
                let element = arr.find(x => x.name === name);

                element[property] = value;
            },
            print: (name) => {

                let element = arr.find(x => x.name === name);

                let messages = [];

                for (let propName in element) {
                    if (propName !== 'name') {
                        let propValue = element[propName];
                        let message = `${propName}:${propValue}`;
                        messages.push(message);
                    }
                }

                console.log(messages.join(','));

            }

        };

    })();

    for(let cmd of commands) {
        let [cmdName, name, property, value] = cmd.split(' ');
        commandProcessor[cmdName](name, property, value);
    }

    function Foo(name) {
        this.name = name;
    }

}