function getManager() {
    let elements = {
        'protein': 0
    }

    let receipts = {
        'burger': {
            'carbohydrate': 5,
            'fat': 7
        }
    }

    const getError = (element) => ``;

    let commands = {
        'restock': (element, quantity) => {
            ////elements + receipts + getError
            ///return
        }
    }

    return function(command) {
        //split string into words
        let commandTokens = command.split(' ');

        return commandTokens.lenght === 1 ? commands[commandTokens[0]]() : commands[commandTokens[0]] (commandTokens[1], commandTokens[2]);
    };
}