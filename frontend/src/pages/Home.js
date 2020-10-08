import React from 'react';
import Question from '../components/Question'
import {getAllDimensions, mapAnswersToQuestions} from '../Utilities'
import Api from '../Api'
import {Link, withRouter} from "react-router-dom";

class Home extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            questions: [],
            answers: {},
            email: ""
        }
    }

    componentDidMount()
    {
        this.setState( {
            questions: Api.getQuestions()
        } );
    }

    handleChange = ( id, value ) =>
    {
        if( id.target )
        {
            this.setState( { email: id.target.value } );
        }
        else
        {
            this.setState( ( prevState ) => (
                    {
                        answers: { ...prevState.answers, [id]: value }
                    }
                )
            );
        }
    };

    handleSubmit = ( e ) =>
    {
        e.preventDefault();
        const check = this.state.questions.filter( q => !this.state.answers[q.id] );
        let error = [];

        if( check.length )
        {
            error.push( 'Please answer question: ' + check.map( c => c.id ).join( ', ' ) );
        }

        if( this.state.email === "" || !/.+@.+\.[A-Za-z]+$/.test( this.state.email ) )
        {
            error.push( "Please type a valid email address" );
        }

        if( error.length )
        {
            alert( error.join( "\n" ) );
            return;
        }

        let questionsWithAnswers = mapAnswersToQuestions( this.state.answers, this.state.questions );

        let dimension = getAllDimensions( questionsWithAnswers );

        this.props.history.push( {
            pathname: '/results',
            state: { result: dimension }
        } );
    };

    render()
    {
        let questions = this.state.questions.map( question =>
            <Question key={question.id} data={question} handleChange={this.handleChange}/> );

        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="page-title">
                    <div className="header">Discover Your Perspective</div>
                    <div className="sub-header">Complete the 7 min test and get a detailed report of your lenses on the world or <Link to="/results">check your results</Link>
                    </div>
                </div>
                <div className="q-container">
                    {questions}
                </div>
                <div className="email">
                    <div className="e-title">Your Email</div>
                    <input name="email" type="text" placeholder="you@example.com" onChange={this.handleChange}/>
                </div>
                <input className="submit-b btn btn-primary" type="submit" value="Save & Continue"/>
            </form>
        )
    }
}

export default withRouter( Home )
