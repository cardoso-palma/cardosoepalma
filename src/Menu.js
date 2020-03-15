import React from 'react';
import './menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <div id='logo'>
                    Logotipo
                </div>
                <div id='menuOptions'>
                    <a href="#"> About Us</a>
                    <a href="#"> Portfolio </a>
                    <a href="#"> Contact Us</a>
                </div>
            </div>
        );
    }
}

export default Menu;