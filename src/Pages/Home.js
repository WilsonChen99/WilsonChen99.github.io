import React from 'react';
import { ButtonSquareLight } from '../Components/Button';
import styles from './Home.module.css';

export default function Home() {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.centerBackground}>
                    <p className={styles.title}>WILSON CHEN</p>
                    <p className={styles.subTitle}>UNIVERSITY OF SOUTHERN CALIFORNIA</p>
                    <p className={styles.subTitle}>B.S COMPUTER SCIENCE</p>
                    <br/>
                    <br/>
                    <p className={styles.subTitle}>chenwils@usc.edu</p>
                </div>
                <img className={styles.profilePic} src='ProfilePic.jpg' alt='profile pic'/>
                <div className={styles.selectionBar}>
                    <span className={styles.mobileTitle}>WILSON CHEN</span>
                    <span className={styles.mobileSubTitle}>chenwils@usc.edu</span>
                    <a href='/#/aboutMe'><p>ABOUT ME</p></a>
                    <a href='/#/resume'><p>RESUME</p></a>
                    <div className={styles.buttonSection}>
                        <ButtonSquareLight img='github-mark-white.png' alt='github' link='https://github.com/WilsonChen99'/>
                        <ButtonSquareLight img='in_white.png' alt='linkedIn' link='https://www.linkedin.com/in/wilson-chen-668785181'/>
                    </div>

                </div>
            </div>
        </>
    )
}