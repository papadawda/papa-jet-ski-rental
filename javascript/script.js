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