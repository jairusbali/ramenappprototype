// singup = https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=

// Request Body Payload
// Property Name	Type	Description
// email	string	The email for the user to create.
// password	string	The password for the user to create.
// returnSecureToken	boolean	Whether or not to return an ID and refresh token. Should always be true.

const authData = {
  email: email,
  password: password,
  returnSecureToken: true
};

let url =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCc105jdNCASMJIslySAslIHCJF3zn7eFQ";
if (!isSignUp)
  url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCc105jdNCASMJIslySAslIHCJF3zn7eFQ";
