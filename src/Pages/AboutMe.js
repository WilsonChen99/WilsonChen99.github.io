import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { SelectionBarButton } from '../Components/Button.js';
import { SWE, catLover, hiker, artist } from '../Components/AboutMeIntros';
import styles from './AboutMe.module.css';
import forestImg from '../Images/forest.JPG';
import catImg from '../Images/cat.jpg';
import hikeImg from '../Images/hike.jpg';
import artImg from '../Images/art.png';

export default function AboutMe() {

    const [ active, setActive ] = useState(0);

    
    /* Subtitles for the nav bar */
    const subtitles = {
        'Home': '/',
        'Resume':'/resume'
    }

    /*
    Follow the format below to add new sections.
    Any new object addition will automatically result in a clickable button on the side.
    
    {
        id: , (should be unique number. it works as long as the id is unique)
        title: , (is the tile appearing on the maing image and the button)
        img: , (put the image in the Images folder and import the image as shown in the existing samples)
        text: , (add a <p> section in the AboutMeIntros.js fiile under Components folder, and update the import header to use)
        bgPosition: , (adjust the position of the background image on the main poster as needed)
    }
    */
    const sections = [
        {
            id: 0,
            title: 'SOFTWARE ENGINEER',
            img: forestImg,
            text: SWE,
            bgPosition: '0 94%'
        },
        {
            id: 1,
            title: 'ANIMAL LOVER',
            img: catImg,
            text: catLover,
            bgPosition: '0 0'
        },
        {
            id: 2,
            title: 'HIKER',
            img: hikeImg,
            text: hiker,
            bgPosition: '0 45%'
        },
        {
            id: 3,
            title: 'ARTIST',
            img: artImg,
            text: artist,
            bgPosition: '0 50%'
        }
    ];



    return(
        <>
            <NavBar title='About Me' subtitles={subtitles} />
            <div className={styles.container}>
                <div className={styles.leftSubContainer}>
                    <div className={styles.imgContainer}  style={{backgroundImage:`url(${sections[active].img})`, backgroundPosition:sections[active].bgPosition}}>
                        <p>{sections[active].title}</p>
                    </div>
                    <div className={styles.textContainer}>
                        {sections[active].text}
                    </div>
                </div>
                <div className={styles.rightSubContainer}>
                    {
                        sections.map((section)=>{
                            return(
                                <SelectionBarButton id={section.id} title={section.title} active={active} setActive={setActive} />
                            );
                        })
                    }
                    
                </div>
            </div>
        </>
        
    )
}