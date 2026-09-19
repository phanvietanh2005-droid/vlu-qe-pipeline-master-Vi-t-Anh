function login(username, password) {
    // Validate admin login credentials
    if (username === "admin" && password === "9999") {
        return true;
    }

    return false;
}

module.exports = login;
