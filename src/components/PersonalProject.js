import React, { Component } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//import ReactDOM from "react-dom";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'




class PersonalProject extends Component {

    componentDidMount() {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.z = 250;
        camera.lookAt( scene.position );

        var container = document.getElementById("canvas");
        var w = container.offsetWidth*0.98;
        var h = container.offsetHeight;
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(w, h , false);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
  
        var controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);

        var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);

        var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();

        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);

        var mtlLoader = new MTLLoader();
        mtlLoader.setPath( "https://threejs.org/examples/models/obj/walt/" );
        mtlLoader.load( 'WaltHead.mtl', function( materials ) {
            materials.preload();

            var objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath( "https://threejs.org/examples/models/obj/walt/" );
            objLoader.load( 'WaltHead.obj', function ( object ) {
            //objLoader.setPath( "../assets/obj/");
            //objLoader.load( 'LibertStatue.obj', function ( object ) {

                scene.add(object);
                object.position.y -= 60;

            });

        });

        var animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
        // === THREE.JS EXAMPLE CODE END ===
    }



    render() {
        return (
            <div id="canvas" className="dBack" ref={ref => (this.mount = ref)} />
        )
    }
}

export default PersonalProject;


