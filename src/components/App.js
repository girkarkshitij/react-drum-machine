import React from 'react';
import drumpadData from './drumpadData';
import Display from './Display';
import Drumpad from './Drumpad';
import '../css/main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayText: 'Click a button or press a key',
        };
        this.updateDisplay = this.updateDisplay.bind(this);
    }

    updateDisplay(message) {
        this.setState({
            displayText: message,
        });
    }

    render() {
        return (
            <div id='container'>
                <div id='drum-machine'>
                    <h1>FCC Drum Machine</h1>
                    <Display displayText={this.state.displayText} />
                </div>
                {drumpadData.map((data) => (
                    <Drumpad
                        key={data.id}
                        drumpad={data}
                        updateDisplay={this.updateDisplay}
                    />
                ))}
            </div>
        );
    }
}

export default App;
