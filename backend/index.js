const express = require( 'express' );
const app = express();
const port = 4000;
const cors = require( 'cors' );
const helmet = require( "helmet" );
const dbService = require( './db.service' );

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( cors() );

// Lets secure the APIs.
app.use( helmet() );


app.get( '/questions', ( req, res ) =>
{
    res.json( dbService.getQuestions() );
} );

app.get( '/perspectives', ( req, res ) =>
{
    res.json( dbService.getPerspectives() );
} );

app.post( '/answers', ( req, res ) =>
{
    if( req.body && req.body.email )
    {
        try
        {
            dbService.postAnswers( req );
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
