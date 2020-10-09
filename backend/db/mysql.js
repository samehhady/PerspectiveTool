var mysql = require( 'mysql' );
var connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'perspective-tool',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
} );

connection.connect( function( err )
{
    if( err ) throw err;
} );

module.exports = connection;
