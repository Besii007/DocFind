
// Question and Answer
document.querySelectorAll('.question-answer').forEach(row => {
    const question = row.querySelector('.question');
    const answer = row.querySelector('.answer');
    const button = row.querySelector('.toggle-btn');

    question.addEventListener('click', () => {
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
      button.textContent = isVisible ? '+' : '–';
    });
  });

  // Adding Doctors
  const doctorsList = document.querySelector('.doctorslist');
    doctorsList.innerHTML += doctorsList.innerHTML;
    doctorsList.innerHTML += doctorsList.innerHTML; // Clone once for seamless loop
  