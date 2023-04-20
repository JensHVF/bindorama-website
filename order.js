const form = document.getElementById("orderForm");
const output = document.getElementById("output");
let price = 0;
let index = 0; 
const a4Price = 250;
const a5Price = 200;
const a6Price = 150;
const a7Price = 100;
const classicPrice = 50; 
const secretBelgianPrice = 45; 
const copticPrice = 40; 

const bookSizeRadios = document.getElementsByName("bookSize");
const bindingTypeRadios = document.getElementsByName("bindingType");
const priceElement = document.getElementById('price');

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

  function getSelected(name) {
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        index = i;
      }
    }
    return null; // return null if no radio button is selected
  }

//calculate price
function calculatePrice() { 
  price = 0;
  getSelected("bookSize");
  if (index === 0) {
    price += a4Price;
  } else if (index === 1) {
    price += a5Price;
  } else if (index === 2) {
    price += a6Price;
  } else if (index === 3) {
    price += a7Price;
  }

  getSelected("bindingType");

  alert(index)

  if (index === 0) {
    price += classicPrice;
  } else if (index === 1) {
    price += secretBelgianPrice;
  } else if (index === 2) {
    price += copticPrice;
  }

  priceElement.textContent = "Pris: " + price;
}

//radiobutton binding type image display
const classicRadio = document.querySelector('#classic');
const secretBelgianRadio = document.querySelector('#secretBelgian');
const copticRadio = document.querySelector('#coptic');
const bindingImages = document.querySelector('#binding-type-images');

classicRadio.addEventListener('mouseover', () => {
    bindingImages.style.display = 'block';
    bindingImages.style.left = classicRadio.offsetLeft + 'px';
  });

  classicRadio.addEventListener('mouseout', () => {
    bindingImages.style.display = 'none';
  });

  classicRadio.addEventListener('change', () => {
    calculatePrice();
  });

  secretBelgianRadio.addEventListener('mouseover', () => {
    bindingImages.style.display = 'block';
    bindingImages.style.left = secretBelgianRadio.offsetLeft + 'px';
  });

  secretBelgianRadio.addEventListener('mouseout', () => {
    bindingImages.style.display = 'none';
  });

  secretBelgianRadio.addEventListener('change', () => {
    calculatePrice();
  });

  copticRadio.addEventListener('mouseover', () => {
    bindingImages.style.display = 'block';
    bindingImages.style.left = copticRadio.offsetLeft + 'px';
  });

  copticRadio.addEventListener('mouseout', () => {
    bindingImages.style.display = 'none';
  });

  copticRadio.addEventListener('change', () => {
    calculatePrice();
  });

