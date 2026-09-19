function login(username, password) {
    // Validate admin login credentials
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = login;
