import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import SidebarRouteComp from './components/SidebarRouteComp';
//import FooterComp from './components/FooterComp';
import HomeComp from './components/HomeComp';
import WorkExperience from './components/WorkExperience'
import Sidebar from './components/Sidebar'
//import Error from './components/Error'
import Ejemplos3d from './components/Ejemplos3d'
import Studies from './components/Studies.js'
import PersonalProject from './components/PersonalProject.js'

class Router extends Component {

    render() {
        return (
            
            <BrowserRouter>

                <Sidebar></Sidebar>
                {/* CONFIGURAR RUTAS Y PAGINAS
                <Route exact path="/" component={HomeComp} />
                    <Route exact path="/HomeComp" component={HomeComp} />
                    <Route exact path="/workExperience" component={WorkExperience} />
                     */}
                    <Route exact path="/" component={HomeComp} />
                    <Route exact path="/home" component={HomeComp} />
                    <Route exact path="/about" component={Ejemplos3d} />
                    <Route exact path="/studies" component={Studies} />
                    <Route exact path="/workExperience" component={WorkExperience} />
                    <Route exact path="/personalProject" component={PersonalProject} />
                    
                    
{/*
                <Route component={Error} />
*/}


                {/* CONFIGURAR RUTAS Y PAGINAS */}

              

                {/* <FooterComp ></FooterComp > */}
                
                
            </BrowserRouter>
        );
    }

}

export default Router;

