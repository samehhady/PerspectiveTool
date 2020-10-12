const app = require( "../index" );
const chai = require( "chai" );
const chaiHttp = require( "chai-http" );

const { expect } = chai;
chai.use( chaiHttp );

describe( "Backend Testing", () =>
{
    it( "Get Questions should return 200 status if success", done =>
    {
        chai
            .request( app )
            .get( "/questions" )
            .set( 'Content-Type', 'application/json' )
            .end( ( err, res ) =>
            {
                expect( res ).to.have.status( 200 );
                done();
            } );
    } );

    it( "Get Perspective should return 200 status if success", done =>
    {
        chai
            .request( app )
            .get( "/perspectives" )
            .set( 'Content-Type', 'application/json' )
            .end( ( err, res ) =>
            {
                expect( res ).to.have.status( 200 );
                done();
            } );
    } );

    it( "Save Answers should fail with 400 status if no body provided", done =>
    {
        chai
            .request( app )
            .post( "/answers" )
            .set( 'Content-Type', 'application/json' )
            .send( {} )
            .end( ( err, res ) =>
            {
                expect( res ).to.have.status( 400 );
                expect( res.body.error ).to.equals( "No body sent" );
                done();
            } );
    } );
} );
