import React from 'react';
import Menu from './Menu'
import PhotoSlider from './PhotoSlider'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <PhotoSlider/>
                <AboutUs/>
                <ContactUs/>
            </div>
        );
    }
}

// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {test()}
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

export default Homepage;