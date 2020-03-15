import React from 'react';
import Menu from './Menu'
import PhotoSlider from './PhotoSlider'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import './index.css'

class Homepage extends React.Component {
    render() {
        return (
            <div id='homepage'>
                <Menu />
                <PhotoSlider />
                <AboutUs />
                <ContactUs />
            </div>
        );
    }
}

export default Homepage;