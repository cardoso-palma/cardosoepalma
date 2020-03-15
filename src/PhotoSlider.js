import React from 'react';
import Button from './Button'
import './photoslider.css'

class PhotoSlider extends React.Component {
    render() {
        return (
            <div className="centered photo-div">
                <div className="centered title-div">
                    <h1 className="subtitle">An impactful phrase here</h1>
                    <h3 className="subtitle">Uma empresa pequenina e aqui estou só a escrever mais coisas para ver se faz overflow</h3>
                    <Button buttonText={'Saber Mais'} />
                </div>
            </div>
        );
    }
}

export default PhotoSlider;