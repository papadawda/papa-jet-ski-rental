// Get references to the page elements we need to read from or update
const packageSelect = document.getElementById("package");
const skisSelect = document.getElementById("skis");
const summaryPackage = document.getElementById("summaryPackage");
const summarySkis = document.getElementById("summarySkis");
const totalPrice = document.getElementById("totalPrice");
const discountInput = document.getElementById("discountCode");
const applyDiscountButton = document.getElementById("applyDiscount");
const discountMessage = document.getElementById("discountMessage");
const discountAmount = document.getElementById("discountAmount");

let discount = 0;

// This function updates the booking summary shown to the user
function updateSummary() {
  // Find the currently selected package option in the dropdown
  const selectedPackage = packageSelect.options[packageSelect.selectedIndex];

  // Convert the selected package value into a numeric price
  const packagePrice = Number(packageSelect.value);

  // Read the package name from the data-name attribute of the selected option
  const packageName = selectedPackage.dataset.name;

  // Convert the selected number of skis into a number
  const numberOfSkis = Number(skisSelect.value);

  // Calculate the total cost as price per package times the number of skis
  const total = packagePrice * numberOfSkis;

  // Apply any active discount amount to the total
  const finalTotal = Math.max(total - discount, 0);

  // Update the summary fields on the page
  summaryPackage.textContent = packageName;
  summarySkis.textContent = numberOfSkis;
  discountAmount.textContent = discount.toFixed(2);
  totalPrice.textContent = finalTotal.toFixed(2);
}

// When the selected package changes, recalculate the summary
packageSelect.addEventListener("change", updateSummary);

// When the number of skis changes, recalculate the summary
skisSelect.addEventListener("change", updateSummary);

// Calculate the summary once when the page first loads
updateSummary();



function applyDiscount() {
  // Read the entered discount code and normalize it to uppercase
  const code = discountInput.value.trim().toUpperCase();

  if (code === "PAPA10") {
    discount = 10; // apply a $10 discount
    discountMessage.textContent = "Discount code applied successfully!";
    discountMessage.classList.remove("error");
  } else {
    discount = 0; // reset discount when the code is invalid
    discountMessage.textContent = "Invalid discount code.";
    discountMessage.classList.add("error");
  }

  // Recalculate the summary after updating the discount value
  updateSummary();
}

// When the discount button is clicked, verify the code and update the summary
applyDiscountButton.addEventListener("click", applyDiscount);