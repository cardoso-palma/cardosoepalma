import React from 'react';
import './button.css'

class Button extends React.Component {
    render() {
        return (
            <a className="centered button" onClick={this.props.onClickAction}>
                {this.props.buttonText}
            </a>
        );
    }
}

export default Button;