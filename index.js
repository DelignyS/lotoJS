let attempts = 0;
let winningNumbers = [];

const generateRandomNumbers = () => Array.from({length: 6}, () => Math.floor(Math.random() * 50) + 1);

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  if (!firstname) {
    return 'Veuillez fournir un prénom';
  }
  if (!lastname) {
    return 'Veuillez fournir un nom';
  }
  if (!email) {
    return 'Veuillez fournir un email';
  }
  const emailRegex = /^[a-z0-9._%+-]{1,30}@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    return 'Votre email n\'est pas valide';
  }
  const userNumbers = lotoNumbers.split(',').map(Number);
  const isWinner = winningNumbers.every((num, index) => num === userNumbers[index]);
  if (isWinner) {
    attempts = 0; // reset attempts counter if user wins
    return 'Félicitations, vous avez gagné 1 million!!!!!';
  } else {
    attempts++;
    if (attempts >= 3) {
      document.querySelector('#suggestion').style.display = 'block'; // show suggestion button
      winningNumbers = [4, 8, 15, 16, 23, 42]; // set winning numbers to the suggested numbers
    } else {
      winningNumbers = generateRandomNumbers(); // generate new random winning numbers
    }
    return `Désolé, vous avez perdu, les nombres gagnants sont: ${winningNumbers.join(', ')}`;
  }
};

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const firstname = document.querySelector('#fname').value;
  const lastname = document.querySelector('#lname').value;
  const email = document.querySelector('#email').value;
  const lotoNumbers = document.querySelector('#loto').value;
  const message = checkLoto(firstname, lastname, email, lotoNumbers);
  alert(message);
});

document.querySelector('#suggestion').addEventListener('click', () => {
  document.querySelector('#loto').value = winningNumbers.join(', '); // set suggested numbers
});

winningNumbers = generateRandomNumbers(); // generate initial random winning numbers