import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//import * as THREE from "three";
import Particles from 'react-particles-js';



class Particulas extends Component {
    
    state = {
        movement: true        
    }

    componentWillMount() {

        var movimientoActivo = (this.props.movement === 'true');
        
        console.log(movimientoActivo);

        this.setState({
            movement: movimientoActivo
        });
    }

    render() {
        return (

            <React.Fragment>
                <div className="particles">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 200,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 8
                                },
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 100,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                
                                enable: this.state.movement,
                                speed: 2,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 100,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        }
                    }

                    } />
                </div>

            </React.Fragment>
        )
    }

}
export default Particulas;