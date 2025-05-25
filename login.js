document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const login = document.querySelector(".login");
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const error = document.querySelector("#error");

  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const savedusers = JSON.parse(localStorage.getItem("users")) || [];

  if (savedusers.length === 0) {
    alert("No account found. Please sign up first.");
    return;
  }

  // Find matching user
  const user = savedusers.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  );

  if (user) {
    alert("Login successful!");
    setTimeout(() => {
      const login = document.getElementById("login"); // or querySelector(".login")
      login.style.height = "413px";

      error.textContent = "✅ You are logging in...";
   
    }, 5000);
    setTimeout(() => {
      error.textContent = "Redirecting to...";
     
    }, 6000);
    error.textContent = "Please be waited";
    error.style.color = "green";
    error.style.display = "block";
    login.style.padding = "60px 120px 60px 120px";
    login.style.height = "413px";
    //    alert("✅ You are successfully Logged in");

    setTimeout(() => {
      window.location.href = "./loader.html";
    
    }, 10000);
  
  } else {
    alert("Invalid email or password.");
    error.textContent = "Please enter valid email or password";

    login.style.padding = "42px 120px 42px 120px";
   
    return;
  }

 


  //   if (!emailRegex.test(email)) {
  //       error.textContent = "Please enter valid email";
  //        login.style.padding = "60px 120px 60px 120px";

  //     return;
  //   }

  //   if (!passwordRegex.test(password)) {
  //     error.textContent = "Password incorrect";
  //       login.style.padding ='60px 120px 60px 120px';
  //     return;
  //     }
  // setTimeout(() => {
  //   error.textContent = "✅ You are logging in...";

  // }, 3000);
  //     setTimeout(() => {
  //       error.textContent = "Done ✅";
  //     }, 5000);
  //       error.textContent = "Please be waited";// Clear previous errors if any
  //     error.style.color = "green";
  //     error.style.display = "block";
  //    login.style.padding = "60px 120px 60px 120px";
  // //    alert("✅ You are successfully Logged in");

  //       setTimeout(() => {
  //           window.location.href = "https://www.youtube.com/";

  //       }, 6000);
});

function signup() {


  window.location.href = "./signup.html";
}