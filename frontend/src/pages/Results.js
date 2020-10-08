import React from 'react';
import Perspective from '../components/Perspective'

class Home extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = {}
    }

    componentDidMount()
    {
    }

    render()
    {
        return (
            <Perspective />
        )
    }
}

export default Home
