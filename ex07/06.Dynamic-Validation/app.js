function validate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('change', onChange);

    function onChange(event) {
        const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if(emailPattern.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}