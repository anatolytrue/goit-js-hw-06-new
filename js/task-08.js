const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        if (name === '' || value === '') {
            alert('заповни поля!')
        } else {
            console.log({ name, value })
        }
        form.reset();
    })
}