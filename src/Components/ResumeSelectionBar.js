import React, { useState } from 'react';
import { Education, Honors, Skills, Courses, Experience, Projects} from './ResumeSections';
import styles from './ResumeSelectionBar.module.css';

const options = ['Education', 'Honors', 'Skills', 'Courses', 'Experience', 'Academic Projects'];

export function ResumeSelectionBar() {
    const [ selected, setSelected ] = useState (options[0]);

    const handleClick = ({target}) => setSelected(target.value);

    const sections = {
        Education: <Education/>,
        Honors: <Honors/>,
        Skills: <Skills/>,
        Courses: <Courses/>,
        Experience: <Experience/>,
        'Academic Projects': <Projects/>
    }


    return (
        <>
            <div>
                <div className={ styles.container }>
                {
                    options.map((option)=> {
                        return (
                            <button key={option} value={option} className={ option===selected?styles.selected:styles.unselected } onClick={ handleClick }> 
                                { option } 
                            </button>
                        );
                    })
                }
                </div>
                {
                    sections[selected]
                }
            </div>
            
        </>
    )
}

export function DownloadBar() {
    
    return (
        <>
            <div className={styles.downloadBarContainer}>
                <a href='Resume2023.pdf' download='Resume_WangHsing_Chen'>
                    <button className={styles.downloadBttn}>
                        <span>DOWNLOAD</span>
                        <i className='fa fa-arrow-down'/>
                    </button>
                </a>
            </div>
        </>
    )
}