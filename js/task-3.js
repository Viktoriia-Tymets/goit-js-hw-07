const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');


textInput.addEventListener('input', () => {
  const trimmedValue = textInput.value.trim();
  textOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';

}
)




