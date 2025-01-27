function solve() {
    
    const sections = document.querySelectorAll('section');

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e) {

        e.preventDefault();

        let form = e.target.parentNode.children;

        let name = form[2].value;

        let description = form[6].value;

        let dueDate = form[9].value;

        if(!name || !description || !dueDate) {
            return;
        }

        form[2].value = '';
        form[6].value = '';
        form[9].value = '';

        let article = createArticle(name, description, dueDate, 'Start', 'green', 'Delete', 'red', true);

        sections[1].children[1].appendChild(article);

    }

    function createArticle(name, description, dueDate, button1Text, button1Class, button2Text, button2Class, isDeleteFinish) {

        let article = document.createElement('article');

        let heading = document.createElement('h3');

        heading.textContent = name;

        let pDesk = document.createElement('p');
        let pDate = document.createElement('p');

        if(description.includes("Description: ")) {
            pDesk.textContent = description;
            pDate.textContent = dueDate;
        } else {
            pDesk.textContent = "Description: " + description;
            pDate.textContent = "Due Date: " + dueDate;
        }

        article.appendChild(heading);
        article.appendChild(pDesk);
        article.appendChild(pDate);

        let div = document.createElement('div');
        div.setAttribute('class', 'flex');

        let button1;
        let button2;

        if(isDeleteFinish == true) {

            button1 = document.createElement('button');
            button2 = document.createElement('button');

            button1.setAttribute('class', button1Class);
            button2.setAttribute('class', button2Class);

            button1.textContent = button1Text;
            button2.textContent = button2Text;

            button1.addEventListener('click', startArticle);
            button2.addEventListener('click', deleteArticle);

            div.appendChild(button1);
            div.appendChild(button2);
    
            article.appendChild(div);

        } else if (isDeleteFinish == false) {

            button1 = document.createElement('button');
            button2 = document.createElement('button');

            button1.setAttribute('class', button1Class);
            button2.setAttribute('class', button2Class);

            button1.textContent = button1Text;
            button2.textContent = button2Text;

            button1.addEventListener('click', deleteArticle);
            button2.addEventListener('click', finishArticle);

            div.appendChild(button1);
            div.appendChild(button2);
    
            article.appendChild(div);

        }      

        return article;

    }

    function startArticle(e) {

        let article = e.target.parentNode.parentNode;

        let articleElements = article.children;

        let newArticle = createArticle(articleElements[0].textContent, articleElements[1].textContent, articleElements[2].textContent, 'Delete', 'red', 'Finish', 'orange', false);

        sections[2].children[1].appendChild(newArticle);

        article.remove();

    }

    function deleteArticle(e) {
        e.target.parentNode.parentNode.remove();
    }

    function finishArticle(e) {

        let article = e.target.parentNode.parentNode;

        let articleElements = article.children;

        let newArticle = createArticle(articleElements[0].textContent, articleElements[1].textContent, articleElements[2].textContent);

        sections[3].children[1].appendChild(newArticle);

        article.remove();
        
    }

}