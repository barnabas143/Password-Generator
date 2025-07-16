const passwordBox = document.getElementById("password");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

function generatePassword() {
  let length = +lengthEl.value;
  let chars = "";

  if (upperEl.checked) chars += upperChars;
  if (lowerEl.checked) chars += lowerChars;
  if (numberEl.checked) chars += numbers;
  if (symbolEl.checked) chars += symbols;

  if (chars.length === 0) {
    passwordBox.value = "Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordBox.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordBox.value)
    .then(() => alert("Password copied to clipboard!"))
    .catch(() => alert("Failed to copy"));
});
