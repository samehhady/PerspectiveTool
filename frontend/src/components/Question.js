import React from 'react';

class Question extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title
        };
    }

    handleChange = ( e ) => this.props.handleChange( e.target.name, e.target.value );

    render()
    {
        let inputs = [1, 2, 3, 4, 5, 6, 7];
        inputs = inputs.map( i =>
            <input type="radio" key={i} name={this.state.id} value={i} onChange={this.handleChange}/>);
        return (
            <div className="question">
                <h4>{this.state.title}</h4>
                <span className="disagree">Disagree</span>
                {inputs}
                <span className="agree">Agree</span>
            </div>
        )
    }
}

export default Question
