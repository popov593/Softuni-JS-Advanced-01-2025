function foo(data, crit) {

    class Ticket {
        constructor(d, p, s) {
            this.destination = d;
            this.price = p;
            this.status = s;
        }
    }

    return data.slice()
    .map(x => x.split('|') )
    .map(([d, p, s]) => new Ticket(d, Number(p), s))
    .sort((a, b) => {
        return typeof a[crit] === 'number' ? a[crit] - b[crit] : a[crit].localeCompare(b[crit]);
    });
}


console.log(foo(['Philadelphia|94.20|available',

    'New York City|95.99|available',
    
    'New York City|95.99|sold',
    
    'Boston|126.20|departed'],
    
    'price'));