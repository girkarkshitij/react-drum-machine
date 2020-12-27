import React from 'react';

const drumpadData = [
    {
        innerText: 'Q',
        id: 'Cymbal-Crash',
        unicode: 81,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
        innerText: 'W',
        id: 'Hi-Hat',
        unicode: 87,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
        innerText: 'E',
        id: 'Cymbal-Ride',
        unicode: 69,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
        innerText: 'A',
        id: 'Rimshot',
        unicode: 65,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
        innerText: 'S',
        id: 'Snare-1',
        unicode: 83,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
        innerText: 'D',
        id: 'Snare-2',
        unicode: 68,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
        innerText: 'Z',
        id: 'Tom-Tom-1',
        unicode: 90,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
        innerText: 'X',
        id: 'Tom-Tom-2',
        unicode: 88,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        innerText: 'C',
        id: 'Bass Drum',
        unicode: 67,
        audioLink: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayText: 'Click a button or press a key',
        };
        this.updateDisplay = this.updateDisplay.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
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
                    <h2>Enjoy the music</h2>
                    <Display displayText={this.state.displayText} />
                </div>
                {drumpadData.map((drumpad) => (
                    <Drumpad
                        key={drumpad.id}
                        drumpad={drumpad}
                        updateDisplay={this.updateDisplay}
                    />
                ))}
            </div>
        );
    }
}

class Drumpad extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        window.focus();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.updateDisplay(this.props.drumpad.id);
    };

    handleKeyDown = (e) => {
        if (e.keyCode === this.props.drumpad.unicode) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.updateDisplay(this.props.drumpad.id);
        }
    };

    render() {
        return (
            <button
                id={this.props.drumpad.id}
                className='drum-pad'
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
            >
                <audio
                    ref={(ref) => (this.audio = ref)}
                    id={this.props.drumpad.innerText}
                    src={this.props.drumpad.audioLink}
                ></audio>
                {this.props.drumpad.innerText}
            </button>
        );
    }
}

class Display extends React.Component {
    render() {
        return (
            <div id='display'>
                <h2>{this.props.displayText}</h2>
            </div>
        );
    }
}

export default App;
