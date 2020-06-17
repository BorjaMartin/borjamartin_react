import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//import { Router, Route } from 'react-router-dom';


class Error extends Component {



    render() {
        return (
           
            <div id="Error" className="App-header">
                <h2 className= "subheader" >Página no encontrada</h2>
                <p>La página a la que intentas acceder no existe en la web</p>
            </div>
 
           

        );
    }

}
export default Error;