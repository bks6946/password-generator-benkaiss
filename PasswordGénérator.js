function GeneratePassword() {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%^&*()-_=+[]{};:,.<>?/|~";


  const allChars = letters + numbers + specials;
  console.log(allChars.length);

  let password = "";

  for (let i = 0; i < 20; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
    console.log(i)
  }

  document.getElementById("password").value = password;
}

document.getElementById("generateBtn").addEventListener("click", GeneratePassword);
