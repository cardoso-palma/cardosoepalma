import React from 'react';
import Button from './Button';
import ReactCompareImage from 'react-compare-image';

import './portfolio.css'
class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.leftImages = [require("./images/a_l.png"), require("./images/b_l.png"), require("./images/c_l.png")]
        this.rightImages = [require("./images/a_r.png"), require("./images/b_r.png"), require("./images/c_r.png")]
        this.cursor = 0
        this.state = {
            leftImage: this.leftImages[this.cursor], // start at 0 always, but then use this.state.cursor
            rightImage: this.rightImages[this.cursor], // start at 0 always, but then use this.state.cursor            
        };
    }

    moveCursor(moveBack) {
        if (moveBack) {
            if(this.cursor <= 0) {
                // if this is true than we've reached the begginig of the array and we need to go back to the end
                this.cursor = this.leftImages.length - 1
                this.setState({
                    leftImage: this.leftImages[this.cursor],
                    rightImage: this.rightImages[this.cursor]
                })
                
            }  else {
                // Increment cursor and update the images
                this.cursor -= 1
                this.setState({
                    leftImage: this.leftImages[this.cursor],
                    rightImage: this.rightImages[this.cursor]
                })
            }
        } else {
            if(this.cursor >= this.leftImages.length - 1) {
                // if this is true than we've reached the end of the array and we need to go back to the beggining
                this.cursor = 0
                this.setState({
                    leftImage: this.leftImages[this.cursor],
                    rightImage: this.rightImages[this.cursor]
                })

            }  else {
                // Increment cursor and update the images
                this.cursor += 1
                this.setState({
                    leftImage: this.leftImages[this.cursor],
                    rightImage: this.rightImages[this.cursor]
                })
            }
        }
    }

    render() {
        return (
            <div id="portfolio_container">
                <h1 className="header">Portfólio</h1>

                <div id="button-div">
                    <Button buttonText={'Anterior'} onClickAction={() => this.moveCursor(true)}/>
                    <Button buttonText={'Próximo'} onClickAction={() => this.moveCursor(false)}/>
                </div>
                
                <div style={{ width: "30%", height: "20%" }}>
                    <ReactCompareImage
                        leftImage={this.state.leftImage}
                        rightImage={this.state.rightImage} />
                </div>
                
            </div>
        );
    }
}

export default Portfolio;