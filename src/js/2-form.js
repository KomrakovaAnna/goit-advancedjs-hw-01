const feedbackFormEl = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS !== null) {
    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      if (formDataFromLS.hasOwnProperty(key)) {
        form.elements[key].value = formDataFromLS[key];
      }
    }
  }
};

fillFormFields(feedbackFormEl);

const onFormFieldInput = event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  const userEmail = formData.email;
  const userMessage = formData.message;
  if (userEmail === '' || userMessage === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    event.target.reset();
    localStorage.removeItem('feedback-form-data');
  }
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
