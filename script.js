// Get DOM elements
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const bmiResult = document.getElementById("bmiResult");

// Calculate BMI function
function calculateBMI() {
  if (!weightInput.value || weightInput.value <= 0) return alert("Enter a valid weight");
  if (!heightInput.value || heightInput.value <= 0) return alert("Enter a valid height");
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);
  const bmi = weight / (height * height);
  bmiResult.textContent = `Your BMI : ${bmi?.toFixed(2)}`;
}

// Add event listener to calculate button
calculateBtn.addEventListener("click", calculateBMI);
