import React from 'react';
import './menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <div id='logo'>
                
                    <img src={require('./logoteste.png')}></img>

                </div>
                <div id='menuOptions'>
                    <a href="#"> <span> About Us </span></a>
                    <a href="#"> <span> Portfolio </span></a>
                    <a href="#"> <span> Contact Us </span></a>
                </div>
            </div>
        );
    }
}

export default Menu;