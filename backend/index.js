const express = require( 'express' );
const app = express();
const port = 4000;
const cors = require( 'cors' );
let db = require( './db/mysql' );

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( cors() );


app.get( '/getQuestions', ( req, res ) =>
{
    let questions = require( './questions.json' );
    res.json( questions );
} );

app.get( '/getPerspectives', ( req, res ) =>
{
    let perspectives = require( './perspectives.json' );
    res.json( perspectives );
} );

app.post( '/saveAnswers', ( req, res ) =>
{
    if( req.body && req.body.email )
    {
        let answers = JSON.stringify( req.body.answers );
        try
        {
            // Check if we have a saved user with that email
            db.query( "SELECT * FROM users WHERE email = ?", [req.body.email], function( err, result )
            {
                if( result.length )
                {
                    // If user found update it, no need to create new one
                    let sql = "UPDATE users SET answers = ? WHERE email = ?";
                    db.query( sql, [answers, req.body.email], function( err )
                    {
                        if( err ) throw err;
                    } );
                }
                else
                {
                    // If not found then create a new user.
                    let sql = "INSERT INTO users (email, answers) VALUES ('" + req.body.email + "', '" + answers + "')";
                    db.query( sql, function( err, result )
                    {
                        if( err ) throw err;
                    } );
                }
            } );
        }
        catch( error )
        {
            return res.status( 400 ).json( { error: error.toString() } );
        }
    }
    else
    {
        res.status( 400 );
    }
    res.send( { saved: 'ok' } );
} );

app.listen( port, () =>
{
    console.log( `Backend app listening at http://localhost:${port}` )
} );

module.exports = app;
