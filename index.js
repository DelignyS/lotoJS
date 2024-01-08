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
  const emailRegex = /^[a-z0-9._%+-]{8,30}@[a-z0-9.-]+\.[a-z]{2,3}$/; //ici on utilise une expression régulière pour vérifier que l'email est valide en détails sur https://www.w3resource.com/javascript/form/email-validation.php
  if (!emailRegex.test(email)) {
    return 'Votre email n\'est pas valide';
  }
  const winningNumbers = Array.from({length: 6}, () => Math.floor(Math.random() * 50) + 1);
  const userNumbers = lotoNumbers.split(',').map(Number);
  const isWinner = winningNumbers.every((num, index) => num === userNumbers[index]);
  if (isWinner) {
    return 'Félicitations, vous avez gagné 1 million!!!!!';
  } else {
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