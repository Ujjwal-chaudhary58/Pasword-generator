const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const length = document.getElementById("length");
const lengthVal = document.getElementById("lengthVal");
const generateBtn = document.getElementById("generateBtn");

// Character sets
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Update slider value
length.addEventListener("input", () => {
  lengthVal.textContent = length.value;
});

// Generate password
generateBtn.addEventListener("click", () => {
  let charset = "";

  if (uppercase.checked) charset += upperSet;
  if (lowercase.checked) charset += lowerSet;
  if (numbers.checked) charset += numberSet;
  if (symbols.checked) charset += symbolSet;

  if (charset.length === 0) {
    passwordEl.value = "Select at least one option!";
    return;
  }

  let pwd = "";
  for (let i = 0; i < length.value; i++) {
    const randIndex = Math.floor(Math.random() * charset.length);
    pwd += charset[randIndex];
  }

  passwordEl.value = pwd;
});

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  passwordEl.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});

// Dark/light theme toggle
const themeToggle = document.getElementById("themeToggle");
let isDark = true;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  isDark = !isDark;
  themeToggle.textContent = isDark ? "🌙" : "☀️";
});
