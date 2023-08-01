import React from 'react';
import { ButtonSquareLight } from './Button';
import styles from './NavBar.module.css';

/*
1. title is the main title displayed on the left of the nav bar
   used to prompt the current location

2. subtitles are the options for redirecting to other page
   should feed in an object with: 
   {
    optionName: linkPath,
   }
 */
export default function NavBar({title, subtitles}) {
    
    return (
        <>
            <div className={styles.div}>
                <p className={styles.title}>
                    {title}
                </p>
                <div className={styles.subtitle}>
                    {
                        Object.keys(subtitles).map((subtitle) => {
                            return(
                                <a key={subtitle} className={styles.a} href={subtitles[subtitle]}>{subtitle}</a>
                            );
                        })
                    }
                </div>
                <div className={styles.buttons}>
                    <ButtonSquareLight img='github-mark-white.png' alt='github' link='https://github.com/WilsonChen99'/>
                    <ButtonSquareLight img='in_white.png' alt='linkedIn' link='https://www.linkedin.com/in/wilson-chen-668785181'/>
                </div>
            </div>
        </>
    );
}