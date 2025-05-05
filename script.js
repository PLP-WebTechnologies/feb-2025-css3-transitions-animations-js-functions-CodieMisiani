// JavaScript to manage button clicks and localStorage
const button = document.querySelector('.button');

let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

const updateClickCount = () => {
  button.textContent = `Clicked ${clickCount} times`;
};

updateClickCount();

button.addEventListener('click', () => {
  clickCount++;
  localStorage.setItem('clickCount', clickCount);
  updateClickCount();
  
  button.classList.add('animate');
  
  setTimeout(() => button.classList.remove('animate'), 500);
});
