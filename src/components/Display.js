import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div id='display'>
                <h2>{this.props.displayText}</h2>
            </div>
        );
    }
}

export default Display;
