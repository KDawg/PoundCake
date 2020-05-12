
const goButton = document.getElementById('order-now');

goButton.addEventListener('click', (event) => {
  const zipInput = document.getElementById('zipcode');
  alert(zipInput.value);
});
