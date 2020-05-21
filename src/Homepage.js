import React from 'react';
import Menu from './Menu'
import PhotoSlider from './PhotoSlider'
import AboutUs from './AboutUs'
import Portfolio from './Portfolio'
import ContactUs from './ContactUs'
import './index.css'

class Homepage extends React.Component {
    render() {
        return (
            <div id='homepage'>
                <div className="init-section">
                    <Menu />
                    <PhotoSlider />
                </div>
                <AboutUs />
                <Portfolio />
                <ContactUs />
            </div>
        );
    }
}

export default Homepage;