import React from 'react';
import './button.css'

class Button extends React.Component {
    render() {
        return (
            <div className="centered button">
                {this.props.buttonText}
            </div>
        );
    }
}

export default Button;