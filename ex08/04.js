class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    //updatesize
    updateSize = () => this.size = this.list.length;
    //orderlist
    orderList = () => this.list.sort((a,b) => a - b);

    //add
    add(e) {
        this.list.push(e);
        this.updateSize();
        this.orderList();
    }

    //remove
    remove(i) {
        if (i >= 0 && i < this.list.length) {
            this.list.splice(i, 1);
            this.updateSize();
            this.orderList();
        }
    }

    //get
    get(i) {
        if (i >= 0 && i < this.list.length) {
            return this.list[i];
        }
    }

}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1); console.log(list.get(1));