

const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');


const formState = {
    email: '',
    message: '',
};

const savedState = localStorage.getItem('feedback-form-state');

if (savedState) {
    const state = JSON.parse(savedState);

    formState.email = state.email ?? '';
    formState.message = state.message ?? '';

    inputEmail.value = formState.email;
    textareaMessage.value = formState.message;
}

feedbackForm.addEventListener('input', () => {
   
    formState.email = inputEmail.value.trim();
    formState.message = textareaMessage.value.trim();
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formState)
    );

});

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formState.email || !formState.message) {
        alert(`Fill please all fields`);
        return;
    }

    console.log({ ...formState });


    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();

    formState.email = '';
    formState.message = '';
});



