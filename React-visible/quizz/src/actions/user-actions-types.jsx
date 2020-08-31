// Sign-up actions
export const handleUsernameChange = (id, value, users) => {
    let usernameTaken = false;
    users.forEach( user => {
        if (user[id] === value) usernameTaken = true;
    });
    return { type: 'USER_USERNAME_CHANGE', key: id, value: value, usernameTaken: usernameTaken };
}

export const handleEmailChange = (id, value, users) => {
    let emailTaken = false;
    users.forEach( user => {
        if (user[id] === value) emailTaken = true;
    });
    return { type: 'USER_EMAIL_CHANGE', key: id, value: value, emailTaken: emailTaken };
}

export const handlePasswordChange = (id, value) => {
    return { type: 'USER_PASSWORD_CHANGE', key: id, value: value };
}

export const handleSignUpSubmit = (usernameTaken, emailTaken, passwordsMatch, user) => {
    const validUserName = user.username !== '' && !usernameTaken;
    const validEmail = user.email !== '' && !emailTaken;
    const validPassword = user.password !== undefined && passwordsMatch;
    if (validUserName && validEmail && validPassword) {
        return { type: 'USER_SIGNUP_VALID_SUBMIT', user: user };
    }
    return { type: 'USER_SIGNUP_INVALID_SUBMIT' };
}

export const resetRegistration = () => {
    return { type: 'USER_RESET_REGISTRATION' };
}

// Login/Logout actions
export const handleLoginChange = (id, value) => {
    return { type: 'USER_LOGIN_CHANGE', key: id, value: value };
}

export const handleLoginSubmit = (user, users) => {
    let validCredentials = false;
    let userBuffer = {};
    users.forEach( registeredUser => {
        if (registeredUser['email'] === user['email']) {
            validCredentials = registeredUser['password'] === user['password'];
            userBuffer = { ...registeredUser };
        }
    });
    if (validCredentials) {
        return { type: 'USER_LOGIN_VALID_SUBMIT', user: userBuffer };
    }
    return { type: 'USER_LOGIN_INVALID_SUBMIT' };
}

export const handleLogout = () => {
    return { type : 'USER_LOGOUT' };
}

export const handleClear = () => {
    return { type : 'USER_CLEAR' };
}