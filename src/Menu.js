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
                    <a href="#aboutus_container"> Sobre Nós </a>
                    <a href="#ourservices_container"> Os Nossos Serviços </a>
                    <a href="#portfolio_container"> Portfólio </a>
                    <a href="#contactus_container"> Contactos </a>
                </div>
            </div>
        );
    }
}

export default Menu;