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
        dbService.postAnswers( req ).then( ( result ) =>
        {
            res.send( { saved: 'ok' } );
        } ).catch( ( err ) =>
        {
            return res.status( 400 ).json( { error: err.toString() } );
        } );
    }
    else
    {
        res.status( 400 ).json( { error: 'No body sent' } );
    }
} );

app.listen( port, () =>
{
    console.log( `Backend app listening at http://localhost:${port}` )
} );

module.exports = app;
