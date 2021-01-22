/* *************************
 *** USER SIGNUP ***
 ************************** */
function userSignUp() {
  // console.log("userSignUp Function Called");
  let userEmail = document.getElementById("emailSignup").value;
  let userPass = document.getElementById("pwdSignup").value;
  let newUserData = { user: { email: userEmail, password: userPass } };
  console.log(
    `NEWUSERDATA==>${newUserData.user.email}  ${newUserData.user.password}`
  );
  fetch("http://localhost:3000/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.sessionToken);
      let token = response.sessionToken;
      localStorage.setItem("SessionToken", token);
      tokenChecker();
    })
    .catch((err) => {
      console.log(err);
    });
}
/* *************************
 *** USER LOGIN ***
 ************************** */
function userLogin() {
  // console.log("userLogin Function Called");
  let email = document.getElementById("emailLogin").value;
  let pw = document.getElementById("pwdLogin").value;
  console.log(email, pw);

  let userData = { user: { email: email, password: pw } };
  console.log(`USERDATA==>${userData.user.email}  ${userData.user.password}`);

  fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.sessionToken);
      let token = response.sessionToken;
      localStorage.setItem("SessionToken", token);
      tokenChecker();
    })
    .catch((err) => {
      console.log(err);
    });
}

/* *************************
 *** USER LOGOUT ***
 ************************** */
function userLogout() {
  localStorage.setItem("SessionToken", undefined);
  console.log(`sessionToken==> ${localStorage.sessionToken}`);
  tokenChecker();
}

/* *************************
 *** TOKEN CHECKER FUNCTION ***
 ************************** */
function tokenChecker() {
  console.log("tokenChecker Function Called");
}
tokenChecker();
