const apiUrl = "http://localhost:4000";

export const getQuestions = () => fetch( apiUrl + "/questions" ).then( res => res.json() );

export const getPerspectives = () => fetch( apiUrl + "/perspectives" ).then( res => res.json() );

export const saveAnswers = ( object ) =>
    fetch( apiUrl + "/answers", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( object )
    } ).then( res => res.json() )
