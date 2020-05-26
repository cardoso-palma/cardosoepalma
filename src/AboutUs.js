import React from 'react';
import './aboutus.css'

class AboutUs extends React.Component {
    render() {
        return (
            <div id="aboutus_container">
                <h1>Sobre Nós</h1>
                <span id="aboutus_text">
                        <p>A Cardoso &amp; Palma - Engenharia e Construção, Lda., teve o seu início em Janeiro de 2020 como sociedade,
                    embora os seus sócios já tenham conhecimentos e projectos elaborados nas áreas de engenharia, arquitetura e construção,
                    como freelancers desde 1997 e que ao longo dos anos aplicamos as mais altas tecnologias, em sintonia com as melhores técnicas de construção.</p>
                    
                    <p>Ao longo dos anos foram desenvolvidos projetos de arquitetura, engenharia e construções que permitiram obter um levado conhecimento
                    e oferecer aos seus clientes as melhores soluções tecnicas, adequadas a cada projeto ou contrução, com o objectivo de garantir uma 
                    qualidade final de excelência. A actividade principal da nossa empresa é a engenharia e construção. Somos um empresa que se caracteriza,
                    através do rigor e aumento do nível de qualidade e dos detalhes mais cuidados na construção.</p>
                </span>
            </div>
        );
    }
}

export default AboutUs;