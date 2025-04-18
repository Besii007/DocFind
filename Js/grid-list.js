const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');
const doctorContainer = document.getElementById('doctorContainer');

function setActive(button) {
  gridBtn.classList.remove('active');
  listBtn.classList.remove('active');
  button.classList.add('active');
}

gridBtn.addEventListener('click', () => {
  setActive(gridBtn);
  doctorContainer.classList.remove('list-view');
  doctorContainer.classList.add('grid-view');
});

listBtn.addEventListener('click', () => {
  setActive(listBtn);
  doctorContainer.classList.remove('grid-view');
  doctorContainer.classList.add('list-view');
});
