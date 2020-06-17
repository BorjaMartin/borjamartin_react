//import Breadcrumbs from '@trendmicro/react-breadcrumbs';
//import { Button, ButtonGroup } from '@trendmicro/react-buttons';
//import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
//import ensureArray from 'ensure-array';
import React, { Component } from 'react';
//import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faGraduationCap, faDesktop, faEnvelope}  from "@fortawesome/free-solid-svg-icons";


import {withRouter} from 'react-router-dom';

class Sidebar extends Component {

    state = {
        selected: 'Home',
        expanded: false
    };

    componentDidMount() {
        
        var aux = this.props.location.pathname;
        var pathaux = this.props.location.pathname.substring(1, aux.lenght)
        this.setState({ selected: pathaux });
    }


    onSelect = (selected) => {
        this.setState({ selected: selected });
     
        const to = '/' + selected;
        if (this.props.location.pathname !== to) {
            this.props.history.push(to);
        }
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    pageTitle = {
        'home': 'Home',
        'about': ['about'],
        'studies': ['studies'],
        'workExperience': ['workExperience'],
        'personalProject': ['personalProject'],
        'contact':['contact']
    };
    /*
        renderBreadcrumbs() {
            const { selected } = this.state;
            const list = ensureArray(this.pageTitle[selected]);
    
            return (
                <Breadcrumbs>
                    {list.map((item, index) => (
                        <Breadcrumbs.Item
                            active={index === list.length - 1}
                            key={`${selected}_${index}`}
                        >
                            {item}
                        </Breadcrumbs.Item>
                    ))}
                </Breadcrumbs>
            );
        }
    */
    navigate = (pathname) => () => {
        this.setState({ selected: pathname });
    };

    render() {
        const { selected } = this.state;


        return (
            <div id="Sidebar" >
               
                <SideNav className="StyledSideNav" onSelect={this.onSelect} onToggle={this.onToggle}>
                    <SideNav.Toggle />
                    <SideNav.Nav selected={selected}>
                        <NavItem eventKey="Home" >
                            <NavIcon>
                                <FontAwesomeIcon icon={faHome} className="SideNavIcon" />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Home">
                                Inicio
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <FontAwesomeIcon icon={faUser} className="SideNavIcon" />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="about">
                                Sobre mi
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="studies">
                            <NavIcon>
                                <FontAwesomeIcon icon={faGraduationCap} className="SideNavIcon" />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Reports">
                                Formación
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="workExperience">
                            <NavIcon>
                                <FontAwesomeIcon icon={faBriefcase} className="SideNavIcon" />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Reports">
                                Experiencia
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="personalProject">
                            <NavIcon>
                                <FontAwesomeIcon icon={faDesktop} className="SideNavIcon" />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Reports">
                                Proyectos
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="contact">
                            <NavIcon>
                                <FontAwesomeIcon icon={faEnvelope} className="SideNavIcon" />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Reports">
                                Contacto
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                
            </div>
        );
    }
}


export default withRouter(Sidebar);