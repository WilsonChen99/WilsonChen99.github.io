import React from 'react';
import NavBar from '../Components/NavBar';
import { ResumeSelectionBar, DownloadBar } from '../Components/ResumeSelectionBar';
import styles from './Resume.module.css'

export default function Resume() {

    // Provides desired nav bar option and corresponding link path
    const navBarChoices = {
        'Home': '/',
        'About Me': '/aboutMe'
    }

    return(
        <>
            <div className={styles.container}>
                <NavBar title='RESUME' subtitles={navBarChoices} />
                <ResumeSelectionBar />
                <DownloadBar />
            </div>
            
        </>
    );
}