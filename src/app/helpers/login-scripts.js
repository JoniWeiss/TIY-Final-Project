function toggBtn(btn, user) {
  if(user) {
    console.log(user);
    btn.classList.remove('hide')
  } else {
    console.log('not logged in')
    btn.classList.add('hide')
  }
}

<div className="container">

  <input  id="txtEmail" type="email" placeholder="Email" />

  <input  id="txtPassword" type="password" placeholder="Password" />

  <button id="btnLogin" className="btn btn-action">
    Log in
  </button>

  <button id="btnSignUp" className="btn btn-secondary">
    Register
  </button>

  <button id="btnLogOut" className="btn btn-action hide">
    Log out
  </button>
  fbAuth.onAuthStateChanged(toggBtnLogout(btnLogOut, fbUser))
</div>
