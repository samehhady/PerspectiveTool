let db = require( './db/mysql' );

exports.postAnswers = (req) => {
    let answers = JSON.stringify( req.body.answers );

    // Check if we have a saved user with that email
    return db.query( "SELECT * FROM users WHERE email = ?", [req.body.email], function( err, result )
    {
        if( result.length )
        {
            // If user found update it, no need to create new one
            let sql = "UPDATE users SET answers = ?, result = ? WHERE email = ?";
            return db.query( sql, [answers, req.body.result, req.body.email], function( err )
            {
                if( err ) throw err;
            } );
        }
        else
        {
            // If not found then create a new user.
            let sql = "INSERT INTO users (email, answers, result) VALUES ('?', '?', '?')";
            return db.query( sql, [req.body.email, answers, req.body.result], function( err, result )
            {
                if( err ) throw err;
            } );
        }
    } );
};
