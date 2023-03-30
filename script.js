// Get DOM elements
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const bmiResult = document.getElementById("bmiResult");

// Calculate BMI function
function calculateBMI() {
  if (!weightInput.value || !heightInput.value) {
    alert("Please enter valid values for weight and height.");
    return;
  }
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value)
  const bmi = weight / (height * height);
  bmiResult.textContent = `${bmi.toFixed(2)}`;
}

// Add event listener to calculate button
calculateBtn.addEventListener("click", calculateBMI);
