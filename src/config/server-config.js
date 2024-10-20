const dotenv = require("dotenv");

// give specific path of dotenv existing file......
dotenv.config({
    path:".env"
});


const config = require('./config.json');

// Replace placeholders with environment variable values
const env = process.env.NODE_ENV || 'development';
config[env].username = process.env.DB_USERNAME || config[env].username;
config[env].password = process.env.DB_PASSWORD || config[env].password;
config[env].database = process.env.DB_NAME || config[env].database;
config[env].host = process.env.DB_HOST || config[env].host;

module.exports = config[env];

module.exports = {
    PORT:process.env.PORT,
    FLIGHT_SERVICE:process.env.FLIGHT_SERVICE
}