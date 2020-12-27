import React from 'react';

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
        this.playAudio(this.props.drumpad.id);
    };

    handleKeyDown = (e) => {
        if (e.keyCode === this.props.drumpad.unicode) {
            this.playAudio(this.props.drumpad.id);
        }
    };

    playAudio = (displayText) => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.updateDisplay(displayText);
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
                    className='clip'
                    src={this.props.drumpad.audioLink}
                ></audio>
                {this.props.drumpad.innerText}
            </button>
        );
    }
}

export default Drumpad;
