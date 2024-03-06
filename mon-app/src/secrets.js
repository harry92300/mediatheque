module.exports = {
    dbPassword: 'GARRY100',
    apiKey: 'VOTRE_CLE_API_SECRETE',
    authToken: 'VOTRE_JETON_D_AUTHENTIFICATION'
};

const secrets = require('./secrets');

const apiKey = secrets.apiKey;
const authToken = secrets.authToken;

console.log("API Key:", apiKey);
console.log("Auth Token:", authToken);