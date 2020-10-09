import React from 'react';

class PerspectiveItem extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            left: this.props.data.values[0],
            right: this.props.data.values[1],
            selected: this.props.selected
        }
    }

    render()
    {
        return (
            <div className="row type-row">
                <div className="col-4">
                    {this.state.left.title} ({this.state.left.shortcut})
                </div>
                <div className="col-4 p-type">
                    <div className={this.state.selected === this.state.left.shortcut ? 'selected' : null}></div>
                    <div className={this.state.selected === this.state.right.shortcut ? 'selected' : null}></div>
                </div>
                <div className="col-4">
                    {this.state.right.title} ({this.state.right.shortcut})
                </div>
            </div>
        )
    }
}

export default PerspectiveItem
