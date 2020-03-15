import React from 'react';
import Button from './Button'
import './photoslider.css'

class PhotoSlider extends React.Component {

    buttonAction = function() {
        alert("Testing button action")
    }

    render() {
        return (
            <div className="centered photo-div">
                <div className="centered title-div">
                    <h1 className="subtitle">An impactful phrase here</h1>
                    <h3 className="subtitle">Uma empresa pequenina e aqui estou só a escrever mais coisas para ver se faz overflow</h3>
                    
                </div>
                <div className="button-div">
                    <Button buttonText={'Saber Mais'} onClickAction={()=> this.buttonAction()}/>
                </div>
            </div>
        );
    }
}

export default PhotoSlider;