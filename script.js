document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const regNo = document.getElementById("regNo").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Default credentials
  const defaultRegNo = "22U10031";
  const defaultPassword = "22U10031";

  if (regNo === defaultRegNo && password === defaultPassword) {
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid registration number or password.";
  }
});
