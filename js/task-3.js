const textInput = document.querySelector('.name-input');


textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
});

