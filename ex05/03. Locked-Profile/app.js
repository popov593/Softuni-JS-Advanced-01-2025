function lockedProfile() {
    
    let buttonElements = Array.from(document.querySelectorAll('.profile button'));

    for (let btn of buttonElements) {
        btn.addEventListener('click', show);
    }

    function show(e) {
        
        let divChildren = Array.from(e.target.parentElement.children);

        let locked = divChildren[2].checked;

        if (locked == false) {

            let hiddenFieldsElement = e.target.previousElementSibling;

            if (e.target.textContent == 'Show more') {

                hiddenFieldsElement.style.display = 'inline';
                e.target.textContent = 'Hide it';

            } else {

                hiddenFieldsElement.style.display = '';
                e.target.textContent = 'Show more';

            }

        }

    }

}