const createLoginModal = function () {
    const loginModal = document.createElement("div");
    loginModal.classList.add("modal");
    const loginModalContent = document.createElement("div");
    loginModalContent.classList.add("modal-content");

    const x = document.createElement("span");
    x.classList.add("close");
    x.innerHTML = '&times;';
    const loginForm = document.createElement("form");
    loginForm.setAttribute('action', 'post');
    loginForm.classList.add("login-form");
    const usernameField = document.createElement("input");
    usernameField.setAttribute('type', 'text');
    usernameField.classList.add("username");
    usernameField.placeholder = 'Username';
    const passwordField = document.createElement("input");
    passwordField.setAttribute('type', 'text');
    passwordField.classList.add("password");
    passwordField.placeholder = 'Password';
    const loginButton = document.createElement("button");
    loginButton.classList.add("login-button");
    loginButton.innerText = 'Login';
    const logoutButton = document.createElement("button");
    logoutButton.classList.add("logout-button");
    logoutButton.innerText = 'Logout';

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");

    loginForm.appendChild(usernameField);
    loginForm.appendChild(br1);
    loginForm.appendChild(passwordField);
    loginForm.appendChild(br2);
    loginForm.appendChild(loginButton);
    loginForm.appendChild(logoutButton);

    loginModalContent.appendChild(x);
    loginModalContent.appendChild(loginForm);

    loginModal.appendChild(loginModalContent);

    return loginModal;
}

export{
    createLoginModal
}

    // <div id="myModal " class="modal ">

    // <div class="modal-content ">
    //     <span class="close ">&times;</span>
    //     <form action="post " class="login-form ">
    //         <input type="text " class="username " placeholder="Username "><br>
    //         <input type="text " class="password " placeholder="Password "><br>
    //         <button class="login-button ">Login</button>
    //         <button class="logout-button ">Logout</button>
    //     </form>
    // </div>

    // </div>