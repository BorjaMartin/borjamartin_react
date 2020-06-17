



import React, { Component } from 'react';
//import { Pager } from "react-bootstrap";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import ReactPageScroller from "react-page-scroller";

import SidebarRouteComp from './SidebarRouteComp';
import HomeComp from './HomeComp';
import WorkExperience from './WorkExperience';


//import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// get our fontawesome imports
//import { faHome, faCalendar } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SidebarScroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
            selected: 'home'
            //expanded: false
        };
    }

    
    handlePageChange = (number) => {
        console.log("handlePageChange " + number);
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    onSelect = (selected) => {
        let numberSel = 0;
        if (selected === "home") {
            numberSel = 1;
        } else if (selected === "WorkExperience") {
            numberSel = 2;
        } else {
            numberSel = 0;
        }
        console.log(this.state);
        this.setState({
            selected: selected,
            currentPage: numberSel
        });
        console.log(selected);
    };


    render() {

        const { selected } = this.state;

        return (
            <React.Fragment>

                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}
                >
                 
                    <HomeComp />
                    <WorkExperience />
                </ReactPageScroller>

            </React.Fragment>

        );
    }

}
export default SidebarScroll;