import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//import * as THREE from "three";
//import Particles from 'react-particles-js';

import Particulas from './Particulas';




class HomeComp extends Component {

    render() {
        return (

            <React.Fragment>
                <Particulas
                    movement="true"
                    />
                <div id="particlesCanvas">

                    <h1>BORJA MARTÍN CALVO</h1>
                    <h2>Software Engineer</h2>
                    <div className="FontHome" >

                        <div >Lo importante es no dejar nunca de hacer preguntas. No perder jamás la bendita curiosidad.</div>

                    </div>

                </div>

            </React.Fragment>
        )
    }

}
export default HomeComp;