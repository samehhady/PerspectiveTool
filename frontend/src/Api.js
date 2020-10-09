export default class Api
{
    static apiUrl = "http://localhost:4000";

    static getQuestions = () =>
    {
        return new Promise( ( resolve, reject ) =>
        {
            fetch( this.apiUrl + "/getQuestions" )
                .then( res => res.json() )
                .then(
                    ( result ) =>
                    {
                        resolve( result );
                    } )
        } )
    };

    static getPerspectives()
    {
        return new Promise( ( resolve, reject ) =>
        {
            fetch( this.apiUrl + "/getPerspectives" )
                .then( res => res.json() )
                .then(
                    ( result ) =>
                    {
                        resolve( result );
                    } )
        } )
    }

    static saveAnswers = ( object ) =>
    {
        return new Promise( ( resolve, reject ) =>
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( object )
            };

            fetch( this.apiUrl + "/saveAnswers", requestOptions )
                .then( res => res.json() )
                .then(
                    ( result ) =>
                    {
                        resolve( result );
                    } )
        } )
    };
}
