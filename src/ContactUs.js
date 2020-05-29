import React from 'react';
import Maps from "./Maps"
import './contactus.css'

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            body: ''
        };
    }

    handleInput(event, field) {
        if (field === "subject")
            this.setState({ subject: event.target.value });
        else
            this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        window.open(`mailto:lucasfischerpt@gmail.com?subject=${this.state.subject}&body=${this.state.body}`);
        event.preventDefault();
    }

    render() {
        return (
            <div id="contactus_container" className="vertical-div">
                <h1 className="header">Contactos</h1>

                <div className="horizontal-div">
                    <div className="vertical-div" style={{width: "300px", height: "300px"}}>
                        {/* <Maps /> */}
                        <div style={{height: "100%", backgroundColor:"#eee", width: "100%", display: "flex",
                    justifyContent: "center", alignItems: "center"}}>Mapa</div>
                    </div>

                    <form className="vertical-div enlarge" onSubmit={(e) => this.handleSubmit(e)}>
                        <h2>Envie-nos um email</h2>

                        <div className="input-div">
                            <label>Assunto</label>
                            <input required type="text" value={this.state.subject} onChange={(e) => this.handleInput(e, "subject")} />
                        </div>

                        <div className="input-div no-margin">
                            <label>Corpo do email</label>
                            <textarea required rows="10" value={this.state.body} onChange={(e) => this.handleInput(e, "body")} />
                        </div>

                        <input type="submit" value="Enviar" className="submit-button" />
                    </form>

                </div>
            </div>
        );
    }
}

export default ContactUs;