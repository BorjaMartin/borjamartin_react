import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//import { Router, Route } from 'react-router-dom';

// get our fontawesome imports
import { faHome, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import ReactPageScroller from "react-page-scroller";




class SidebarRouteComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'home',
        };

    }
    
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    onSelect = selected => {
        console.log('Router' + selected);
        this.setState({ selected: selected });
    };



    render() {

        const { selected } = this.state;

        return (
            <div id="sidebar" >

                <SideNav onSelect={this.onSelect} onToggle={this.onToggle} className="StyledSideNav" >
                    <SideNav.Toggle />
                    <SideNav.Nav selected={selected} defaultSelected={this.selected}>
                        <NavItem eventKey="home">
                            <NavIcon>
                                <FontAwesomeIcon icon={faHome} className="SideNavIcon" />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Home">
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="WorkExperience">
                            <NavIcon>

                                <FontAwesomeIcon icon={faCalendar} className="SideNavIcon" />
                            </NavIcon>
                            <NavText>
                                WorkExperience
                        </NavText>
                        </NavItem>
                    </SideNav.Nav>


                </SideNav>

            </div >

        );
    }

}
export default SidebarRouteComp;