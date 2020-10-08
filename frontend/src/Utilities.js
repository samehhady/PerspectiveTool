export const getAllDimensions = ( arr ) =>
{
    let result = {};
    arr.map( a =>
    {
        if( !result[a.dimension] )
        {
            result[a.dimension] = [];
        }

        result[a.dimension].push( a.value > 4 ? a.meaning : a.dimension.replace( a.meaning, "" ) );
        return a;
    } );

    for ( let property in result )
    {
        // If value is 4 and balanced fall back to first in the list.
        let filteredArray = arr.filter( a => a.dimension === property );
        if( arr.filter( a => a.dimension === property && a.value === 4 ).length === filteredArray.length )
        {
            result[property] = filteredArray[0].dimension[0];
        }
        // If equally balanced fall back to first in the list.
        else if( filteredArray.reduce( ( a, b ) => ((a.value * a.direction) + (b.value * b.direction)) === 0 ) )
        {
            result[property] = filteredArray[0].dimension[0];
        }
        else
        {
            result[property] = getDimensionEnd( result[property] );
        }
    }

    result = Object.values( result ).join( "" );

    return result;
};

export const mapAnswersToQuestions = ( answers, questions ) =>
{
    return questions.map( q =>
    {
        q.value = +answers[q.id];
        return q;
    } );
};

export const getPerspectiveTitle = ( p ) =>
{
    switch( p )
    {
        case "E":
            return "EI";
        case "I":
            return "EI";
        case "S":
            return "SN";
        case "N":
            return "SN";
        case "T":
            return "TF";
        case "F":
            return "TF";
        case "J":
            return "JP";
        case "P":
            return "JP";
        default:
            return null;
    }
}

const getDimensionEnd = ( array ) =>
{
    let counts = {};
    array.forEach( function( x )
    {
        counts[x] = (counts[x] || 0) + 1;
    } );
    return Object.keys( counts ).reduce( function( a, b )
    {
        return counts[a] > counts[b] ? a : b
    } );
};
