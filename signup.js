//         let email=document.querySelector("#email");
//         let pass1=document.querySelector("#addPass1").value.trim();
//              let pass2=document.getElementById('addPass1').value.trim();
// let error =document.getElementById('error');

function signup() {
  const email = document.querySelector("#email").value.trim();
  const password1 = document.querySelector("#addPass1").value.trim();
  const password2 = document.querySelector("#addPass2").value.trim();

  const error = document.querySelector("#error");
  let container = document.querySelector(".container");
  const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 
  const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/;


  error.textContent = "";

  if (!emailRegex.test(email)) {
    error.textContent = "Please enter valid email";

    return;
  }

  if (!passwordRegex.test(password1)) {
    error.textContent =
      "Password must be at least 8 characters long and include both letters and numbers.";
    container.style.padding = "5px 50px 5px 50px";

    return;
  }

  if (password1 !== password2) {
    error.textContent = "Passwords does not match";

    return;
  }

  //  const user = {
  //         email: email,
  //         password: password2
  //       };
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(
    (ele) => ele.email.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    error.textContent = "Email Already Exists";
    return;
  }

  const newuser = {
    email: email,
    password: password1,
  };
  users.push(newuser);
  localStorage.setItem("users", JSON.stringify(users));
  error.style.color = "green";
  error.textContent = "Sign up successful! Redirecting...";

  alert("Signed up successfully!");

  setTimeout(() => {
    window.location.href = "./index.html";
  }, 3000);
}
