import React, { useEffect, useState } from 'react';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Particulas from '../components/Particulas';


const defaultData = [
    {
        props: {
            date: '2009 - 2016',
            className: 'element--education',
            contentStyle: { background: 'rgba(115, 115, 115, 0.74) none repeat scroll 0% 0%', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgba(115, 115, 115, 0.74)' },
            iconStyle: { background: 'rgba(115, 115, 115)', color: '#000' },
            icon: <FontAwesomeIcon icon={faGraduationCap} className="VerticalIcon" />,
        },
        title: 'Grado en Ingeniería Informática',
        subtitle: 'Universidad Politécnica ,Madrid',
        content:
            '',
    },
    {
        props: {
            date: "2017 - 2018",
            className: 'element--education',
            contentStyle: { background: 'rgba(115, 115, 115, 0.74) none repeat scroll 0% 0%', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgba(115, 115, 115, 0.74)' },
            iconStyle: { background: 'rgba(115, 115, 115)', color: '#000' },
            icon: <FontAwesomeIcon icon={faGraduationCap} className="VerticalIcon" />,
        },
        title: 'Máster en Animación 3D',
        subtitle: 'CICE. La Escuela Profesional de Nuevas Tecnologías',
        content: 'En el año 2017 realicé el Master en Animación 3D en la escuela profesional de nuevas tecnologías de CICE en Madrid.',
    },
];

const loadData = [
    {
        props: {
            date: 'Noviembre 2019',
            className: 'element--education',
            contentStyle: { background: 'rgba(0, 91, 115, 0.93) none repeat scroll 0% 0%', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgba(33, 150, 243, 0.35)' },
            iconStyle: { background: 'rgba(0, 91, 115)', color: '#fff' },
            icon: <FontAwesomeIcon icon={faGraduationCap} className="VerticalIcon" />,
            
        },
        title: 'Master en Frameworks JavaScript: Aprende Angular, React, Vue',
        subtitle: 'Udemy, Online',
        content:
            'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
        props: {
            date: 'Diciembre 2018',
            className: 'element--education',
            contentStyle: { background: 'rgba(0, 91, 115, 0.93) none repeat scroll 0% 0%', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgba(33, 150, 243, 0.35)' },
            iconStyle: { background: 'rgba(0, 91, 115)', color: '#fff' },
            icon: <FontAwesomeIcon icon={faGraduationCap} className="VerticalIcon" />,
        },
        title: 'Universidad Java: De Cero a Master',
        subtitle: 'Udemy, Online',
        content: 'Strategy, Social Media',
    },
];


const Estudies = () => {
    const [elements, setElements] = useState([]);
    const [addMore, setaddMore] = useState(Boolean);


    
    useEffect(() => {
        loadDefaultData();
    }, []);


    const loadDefaultData = () => {
        setElements([...elements, ...defaultData]);
        setaddMore(true);
    };

    const loadMore = () => {
        setElements([...elements, ...loadData]);
        setaddMore(false);
    };



    const addButton = () => (
        <Fab classes={{ root: 'fab-button' }} color="primary" aria-label="add" className="AddButton">
            <AddIcon />
        </Fab>
    );

    const getTimelineElements = () =>
        elements.map(element => (
            <VerticalTimelineElement {...element.props}>
                <h1 className="vertical-timeline-element-title">{element.title}</h1>
                <h2 className="vertical-timeline-element-subtitle">
                    {element.subtitle}
                </h2>
                <p>{element.content}</p>
            </VerticalTimelineElement>
        ));

    return (
        <React.Fragment>
            <div className="fullBox">
            <Particulas 
                movement="false"
                />
            
            <VerticalTimeline>
                {getTimelineElements()}
                {addMore &&
                    <VerticalTimelineElement
                    iconOnClick={loadMore}
                    iconClassName="vertical-timeline-element-icon--button"
                    icon={addButton()}
                />
                }
                
            </VerticalTimeline>
            </div>
            
        </React.Fragment>
    );
};

export default Estudies;