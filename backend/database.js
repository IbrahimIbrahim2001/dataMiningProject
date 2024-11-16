const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'bjftxtwwsblhqb7jqmte-mysql.services.clever-cloud.com',
    user: 'ugqjvhaqver7heim',
    password: 'jvzH1u4wUG7GD6UcQ2AC',
    database: 'bjftxtwwsblhqb7jqmte'
});

module.exports = connection;