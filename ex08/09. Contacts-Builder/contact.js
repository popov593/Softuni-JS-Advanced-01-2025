class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.element = null;
    }

    //getter - return current state
    get online() {
        return this._online;
    }

    //setter - add / remove online class from div.title
    set online(val) {
        this._online = val;

        //modify div.title
        if (this.element) {
            const titleDiv = this.element.querySelector('.title');
            if (val) {
                titleDiv.classList.add('online');
            } else {
                titleDiv.classList.remove('online');
            }
        }
    }

    render(id) {
        const article = document.createElement('article');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;

        const button = document.createElement('button');
        button.innerHTML = '&#8505;';
        titleDiv.appendChild(button);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';

        const phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = `&phone; ${this.phone}`;

        const emailSpan = document.createElement('span');
        emailSpan.innerHTML = `&#9993; ${this.email}`;

        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);

        article.appendChild(titleDiv);
        article.appendChild(infoDiv);

        this.element = article;

        if(this._online) {
            titleDiv.classList.add('online');
        }

        button.addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        });

        document.getElementById(id).appendChild(article);

    }

    //render the html box
    
}

let contacts = [

    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),

    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),

    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")

];

contacts.forEach(c => c.render('main'));


// After 1 second, change the online status to true

setTimeout(
    () => contacts[1].online = true
, 2000);