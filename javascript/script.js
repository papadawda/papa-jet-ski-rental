// Get references to the page elements we need to read from or update
const packageSelect = document.getElementById("package");
const skisSelect = document.getElementById("skis");
const summaryPackage = document.getElementById("summaryPackage");
const summarySkis = document.getElementById("summarySkis");
const totalPrice = document.getElementById("totalPrice");

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

  // Update the summary fields on the page
  summaryPackage.textContent = packageName;
  summarySkis.textContent = numberOfSkis;
  totalPrice.textContent = total.toFixed(2);
}

// When the selected package changes, recalculate the summary
packageSelect.addEventListener("change", updateSummary);

// When the number of skis changes, recalculate the summary
skisSelect.addEventListener("change", updateSummary);

// Calculate the summary once when the page first loads
updateSummary();



const discountInput = document.getElementById("discountCode");
const applyDiscountButton = document.getElementById("applyDiscount");
const discountMessage = document.getElementById("discountMessage");
const discountAmount = document.getElementById("discountAmount");

let discount = 0;

function applyDiscount() {
  const code = discountInput.value.trim().toUpperCase();

  if (code === "PAPA10") {
    discount = 10;
    discountMessage.textContent = "Discount code applied successfully!";
    discountMessage.classList.remove("error");
  } else {
    discount = 0;
    discountMessage.textContent = "Invalid discount code.";
    discountMessage.classList.add("error");
  }

  updateSummary();
}

applyDiscountButton.addEventListener("click", applyDiscount);