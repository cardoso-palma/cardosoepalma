import React from 'react';
import './menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <div id='logo'>

                    <img src={require('./images/logoteste.png')}></img>

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