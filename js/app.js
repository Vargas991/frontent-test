let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let query = document.getElementById("query");
let message = document.getElementById("message");
let form = document.getElementById("form");

let nameWar = document.getElementById("nameWar");
let emailWar = document.getElementById("emailWar");
let queryWar = document.getElementById("queryWar");
let messageWar = document.getElementById("messageWar");

const resetWarning = () => {
  nameWar.innerHTML = "";
  emailWar.innerHTML = "";
  queryWar.innerHTML = "";
  messageWar.innerHTML = "";
};

const resetInputs = () => {
  fullName.value = "";
  email.value = "";
  query.value = "";
  message.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let warningName = "";
  let warningEmail = "";
  let warningQuery = "";
  let warningMessage = "";

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,4})+$/;
  let send = false;

  resetWarning();

  if (fullName.value.length < 1) {
    warningName += `The name is required  <br>`;
    send = true;
  }

  if (!regexEmail.test(email.value)) {
    warningEmail += `The email is invalid <br>`;
    send = true;
  }

  if (query.value.length < 1) {
    warningQuery += `The query is required <br>`;
    send = true;
  }
  if (message.value.length < 1) {
    warningMessage += `The Message is required <br>`;
    send = true;
  }

  if (send) {
    nameWar.innerHTML = warningName;
    emailWar.innerHTML = warningEmail;
    queryWar.innerHTML = warningQuery;
    messageWar.innerHTML = warningMessage;
  } else {
    resetInputs();
    alert("Send Form!");
  }
});
