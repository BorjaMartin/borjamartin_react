
import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


import Particulas from '../components/Particulas';

class WorkExpirience extends Component {

    click = () => {
        alert("CLIK");
    };


    render() {

        return (
            <React.Fragment>
                <div className="fullBox">

                    <Particulas
                        movement="false"
                    />

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(74, 85, 94) none repeat scroll 0% 0%', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(74, 85, 94)' }}
                            date="Sept. 2016 - Actualidad"
                            iconStyle={{ background: 'rgb(74, 85, 94)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} className="VerticalIconWork" />}
                            onTimelineElementClick={this.click}
                        >
                            <h3 className="vertical-timeline-element-title">Ingeniero de software</h3>
                            <h4 className="vertical-timeline-element-subtitle">Natureh</h4>
                            <p >
                            Tecnologías:  .VB, .NET, C# ,SQL, LINQ, HTML5, CSS3, jQuery, JavaScript, Bootstrap,
                                Proyectos de desarrollos en ERP/CRM en sus versiones Escritorio y Web
                                Diseño y desarrollo de aplicaciones web a medida y portales web. 
                                Integración con sistemas de gestión empresarial existentes (CRM / ERP). eCommerce.
                            </p>
                            <h4> ...</h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Enero 2016 - Julio 2016"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} className="VerticalIconWork" />}
                        >
                            <h3 className="vertical-timeline-element-title">Desarrollador de software</h3>
                            <h4 className="vertical-timeline-element-subtitle">Aqua e-solutions</h4>
                            <p>
                            Tecnologías:  .VB, .NET, C# , Javascript, SQL
                            Proyectos de desarrollos en ERP/CRM en sus versiones Escritorio y Web
                            </p>   
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2017 - 2018"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} className="VerticalIconWork" />}
                        >
                            <h3 className="vertical-timeline-element-title">Gestión de Entornos</h3>
                            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
                            <p>
                                Miembro del equipo de Gestión de Entornos Fijo de Orange. 
                                Me encargaba de la supervisión y gestión de los servidores de test de los diferentes entornos de Orange.
                            </p>
                        </VerticalTimelineElement>
                        
                       
                    </VerticalTimeline>
                </div>
            </React.Fragment >

        );
    };


}

export default WorkExpirience;