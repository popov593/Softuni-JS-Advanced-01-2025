function sorting(array) {

    array.sort((a, b) => {

        let first = a.length - b.length;

        let second = a.localeCompare(b, undefined, { sensitivity: 'base'});

        return first || second;

    });

    console.log(array.join('\n'));

}

sorting(['test', 'Deny', 'omen', 'Default']);