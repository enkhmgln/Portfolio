const form = document.querySelector('#form');
const correctAnswer = 'true';

function handleSubmit(event) {
  event.preventDefault();
  const selectedAnswer = form.querySelector('input:checked').value;
  if (selectedAnswer === correctAnswer) {
    alert('Correct!');
  } else {
    alert('Incorrect');
  }
}

form.addEventListener('submit', handleSubmit);
