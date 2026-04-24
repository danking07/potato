// 1. Arrays for the names (0 = Sunday, 1 = Monday, etc.)
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getAkanName() {
  // 2. Get the values from the HTML inputs
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  // 3. Validation: Make sure the date is possible
  if (day <= 0 || day > 31) {
    alert("Please enter a valid day");
    return;
  }
  if (month <= 0 || month > 12) {
    alert("Please enter a valid month");
    return;
  }

  // 4. Calculate the day of the week
  // (month - 1) because JavaScript months start at 0 (January)
  const myDate = new Date(year, month - 1, day);
  const dayIndex = myDate.getDay();

  // 5. Determine which gender is selected
  const isMale = document.getElementById("male").checked;
  const isFemale = document.getElementById("female").checked;

  let finalName = "";

  if (isMale) {
    finalName = maleNames[dayIndex];
  } else if (isFemale) {
    finalName = femaleNames[dayIndex];
  } else {
    alert("Please select a gender");
    return;
  }

  // 6. Display the result
  document.getElementById("result").innerHTML =
    "Your Akan name is " + finalName;
}
