import React from 'react';
import './menu.css'

class Menu extends React.Component {
    // Try to only add the shadow class to the main menu on scroll
    render() {
        return (
            <div className='menu shadow'> 
                <div id='logo'>
                    <img src={require('./images/cardoso-palma-logo.png')}></img>
                </div>
                <div id='menuOptions'>
                    <a href="#aboutus_container"> About Us </a>
                    <a href="#"> Portfolio </a>
                    <a href="#contactus_container"> Contact Us </a>
                </div>
            </div>
        );
    }
}

export default Menu;