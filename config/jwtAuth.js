const jwt = require('jsonwebtoken');

module.exports = {
    saveToken: (token) => {
        localStorage.setItem('AccessToken', token);
    },

    getToken: () => {
        return localStorage.getItem('AccessToken');
    },
}