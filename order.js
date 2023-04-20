const form = document.getElementById("orderForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
  
    // Get form data
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const quantity = form.elements["quantity"].value;
    const bookSize = document.querySelector('input[name="bookSize"]:checked').value;
    const bindingType = document.querySelector('input[name="bindingType"]:checked').value;
  
    // Generate output
    const message = `Thank you,  ${name}! You have ordered ${quantity} copy/copies of ${bindingType} ${bookSize}. We will send a confirmation to ${email}.`;
    output.textContent = message;
  
    // Clear form inputs
    form.reset();
  });

//radiobutton binding type image display
const classicRadio = document.querySelector('#classic');
const secretBelgianRadio = document.querySelector('#secretBelgian');
const copticRadio = document.querySelector('#coptic');
const classicImage = document.querySelector('#binding-type-image1');
const secretBelgianImage = document.querySelector('#binding-type-image2');
const copticImage = document.querySelector('#binding-type-image3');


classicRadio.addEventListener('mouseover', () => {
   classicImage.style.display = 'block';
   classicImage.style.left = classicRadio.offsetLeft + 'px';
  });

  classicRadio.addEventListener('mouseout', () => {
    classicImage.style.display = 'none';
  });

  secretBelgianRadio.addEventListener('mouseover', () => {
    secretBelgianImage.style.display = 'block';
    secretBelgianImage.style.left = secretBelgianRadio.offsetLeft + 'px';
  });

  secretBelgianRadio.addEventListener('mouseout', () => {
    secretBelgianImage.style.display = 'none';
  });

  copticRadio.addEventListener('mouseover', () => {
    copticImage.style.display = 'block';
    copticImage.style.left = copticRadio.offsetLeft + 'px';
  });

  copticRadio.addEventListener('mouseout', () => {
    copticImage.style.display = 'none';
  });

