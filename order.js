const form = document.getElementById("orderForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get form data
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const bookTitle = form.elements["bookTitle"].value;
  const quantity = form.elements["quantity"].value;

  // Generate output
  const message = `Thank you, ${name}! You have ordered ${quantity} copy/copies of "${bookTitle}". We will send a confirmation to ${email}.`;
  output.textContent = message;

  // Clear form inputs
  form.reset();
});