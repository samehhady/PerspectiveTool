import React from 'react';
import Api from '../Api';
import PerspectiveItem from "./PerspectiveItem";
import {getPerspectiveTitle} from "../Utilities"
import {withRouter} from "react-router-dom";

class Perspective extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            perspectives: [],
            result: ""
        }
    }

    handleChange = ( e ) =>
    {
        this.props.handleChange( e.target.name, e.target.value )
    };

    componentDidMount()
    {
        if( this.props.location.state )
        {
            Api.getPerspectives().then( ( data ) =>
            {
                this.setState( { perspectives: data, result: this.props.location.state.result } );
            } );
        }
    }

    getData = ( val ) =>
    {
        return this.state.perspectives.find( a => a.title === getPerspectiveTitle( val ) )
    };

    render()
    {
        let perspectives = this.state.result.split( '' ).map( p =>
            <PerspectiveItem key={p} data={this.getData( p )} selected={p}/> );
        return (
            <div className="perspective">
                <div className="row">
                    <div className="col-sm">
                        <div style={{ float: "left" }}>
                            <div className="p-title "><h3>Your Perspective</h3></div>
                            <div className="p-sub">Your Perspective Type is {this.state.result}</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        {perspectives}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter( Perspective )
