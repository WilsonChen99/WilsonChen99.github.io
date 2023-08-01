import React, { useState } from 'react';
import styles from './ResumeSections.module.css';
import { courses } from './ResumeSectionCourses.js';
import { projects } from './ResumeSectionAcademicProjects';
import { SelectionBarButton } from './Button';

export function Education() {


    return (
        <div className={styles.educationContainer}>
            <a className={styles.educationLeftContainer} href='https://www.usc.edu/' target='_blank' rel='noreferrer'>
                <img className={styles.uscLogo} src='uscLogo.png' alt='uscLogo'/>
                <div className={styles.educationLeftSubContainer}>
                    <p className={styles.uscBig}>USC</p>
                    <p className={styles.leftText}>University of Southern California</p>
                </div>
            </a>
            <div className={styles.educationRightContainer}>
                <div className={styles.educationInfoContainer}>
                    <p className={styles.subTitle}>Major:</p>
                    <p className={styles.rightText}>B.S Computer Science</p>
                </div>
                <div className={styles.educationInfoContainer}>
                    <p className={styles.subTitle}>Area:</p>
                    <p className={styles.rightText}>Los Angeles, CA</p>
                </div>
                <div className={styles.educationInfoContainer}>
                    <p className={styles.subTitle}>Expected Graduation:</p>
                    <p className={styles.rightText}>May 2025</p>
                </div>
                <div className={styles.educationInfoContainer}>
                    <p className={styles.subTitle}>Academic Standing:</p>
                    <p className={styles.rightText}>4.0</p>
                </div>
            </div>

        </div>
    )
}

export function Honors() {

    const [active, setActive] = useState(false);

    const handleHover = () => {
        setActive(true);
    }

    const handleUnhover = () => {
        setActive(false);
    }


    return (
        <div className={styles.honorsContainer}>
            <a className={styles.honorsDiv} href='https://www.phikappaphi.org/about' target='_blank' rel='noreferrer'>
                <img className={styles.honorsLogo} src='PKPLogo.png' alt='Phi Kappa Phi Logo' />
                <p>&nbsp;&nbsp;&nbsp;Selected member of the Honor Society of Phi Kappa Phi</p>
            </a>
            <div className={styles.honorsDiv} onMouseOver={handleHover} onMouseLeave={handleUnhover}>
                <img className={styles.honorsLogo} src='uscLogo.png' alt='usc logo'/>
                <p>&nbsp;&nbsp;&nbsp;The Dean's List of Viterbi School of Engineering</p>
                <p style={active?{display:'none'}:{display:'inline'}}>&nbsp;&nbsp;&nbsp;(2022 - 2023)</p>
                <div id='' style={active?{display:'inline'}:{display:'none'}}>
                    <div className={styles.hoverDiv}>
                        <p className={styles.honorMargin}>2022 FALL</p>
                        <p className={styles.honorMargin}>2023 SPRING</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export function Skills() {

    const [clicked, setClicked] = useState([]);

    const sections = {
        Languages: ['Java', 'JavaScript', 'C++', 'Python', 'HTML', 'CSS'],
        Frameworks: ['React', 'jQuery'],
        Tools: ['Visual Studio Code', 'Eclipse', 'PyCharm', 'Xcode'],
        Others: ['GitHub']
    }

    const handleClick = (e) => {
        const clickedItem = e.currentTarget.id;

        setClicked((prev)=>{
            if(clicked.includes(clickedItem)){
                return clicked.filter(id => id !== clickedItem);
            }
            else{
                return [clickedItem, ...prev];
            }
        });
    }

    return (
        <>
            <p className={styles.moreInfo}>Please click for more information</p>
            <div className={styles.skillsContainer}>
                {
                    Object.keys(sections).map((section) => {
                        return (
                            <>
                                <div className={styles.skillsSectionContainer}> 
                                    <div id={section} onClick={handleClick}>
                                        <p id={section} className={clicked.includes(section)?styles.skillsTitleClicked:styles.skillsTitle}>{section}</p>
                                    </div>
                                    
                                    <div className={styles.skillsSubContainer} style={clicked.includes(section)?{display:'block'}:{display:'none'}}>
                                        {
                                            sections[section].map((value) => {
                                                return (
                                                    <p>{value}</p>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                
                            </>
                        );
                    })
                }
            </div>
        </>
    )
}


/*
To update courses, go to ResumeSectionCourses.js to add new information following the existing format
*/
export function Courses() {

    return (
        <>
            <p className={styles.moreInfo}>Please click for more information</p>
            <div className={styles.coursesContainer}>
                {
                    courses.map((course)=>{
                        return (
                            <>
                                <a href={course.link} target='_blank' rel='noreferrer' className={styles.courseSectionContainer}>
                                    <p className={styles.courseTitle}>{course.code}&nbsp;&nbsp;&nbsp;{course.title}</p>
                                    <p className={styles.courseContent}>{course.description}</p>
                                </a>
                            </>
                        );
                    })
                }
            </div>
        </>
    )
}

export function Experience() {

    const [active, setActive] = useState([]);


    /*
    Follow the following format to add new experiences when needed
    Make sure to have unique id, and it must be a number as a string
    */    
    const myExperiences = [
        {
            id: '1',
            employer: 'USC Viterbi School of Engineering',
            position: 'Teaching Assistant - CS@SC Summer Coding Camp, Robotics',
            area: 'Los Angeles, CA',
            time: 'May 2023 - June 2023',
            description: 'Assisted students in coding and robotics, fostering their learning and development in a fun and engaging environment.'
        },
        {
            id: '2',
            employer: 'Future Employer',
            position: 'Amazing Position',
            area:'Dream Place',
            time:'',
            description: 'I am prepared to be the best fit for your need.'
        }
    ]

    const handleClick = (e) => {

        const clickedItem = e.currentTarget.id;
        
        setActive((prev)=>{
            if(active.includes(clickedItem)){
                return active.filter(id => id !== clickedItem);
            }
            else{
                return [clickedItem, ...prev];
            }
        });
    }

    return (
        <>
            <p className={styles.moreInfo}>Please click for more information</p>
            <div className={styles.experienceContainer}>
            {
                myExperiences.map((myExperience)=>{
                    return(
                    <>
                        <div id={myExperience.id} key={myExperience.id} className={styles.experienceDiv} onClick={handleClick}>
                            <p className={styles.experienceEmployer}>{myExperience.employer}</p>
                            <p className={styles.experiencePosition}>{myExperience.position}</p>
                        </div>
                        <div className={styles.experienceHiddenBlock} style={active.includes(myExperience.id)?{display:'inline'}:{display:'none'}}>
                            <div>
                                <p className={styles.experienceSubTitle}>Area:</p>
                                <p>{myExperience.area}</p>
                            </div>
                            <div>
                                <p className={styles.experienceSubTitle}>Time:</p>
                                <p>{myExperience.time}</p>
                            </div>
                            <div>
                                <p className={styles.experienceSubTitle}>Brief:</p>
                                <p>{myExperience.description}</p>
                            </div>

                        </div>
                    </>
                        
                    );
                })
            }
            </div>
        </>
        
    )
}

export function Projects() {

    const [ selected, setSelected ] = useState(0);

    const currentSelected = projects[selected];


    return (
        <>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsLeftContainer}>
                    <div className={styles.projectsLeftTitleContainer}>
                        <p className={styles.projectsLeftTitle}>{currentSelected.title}</p>
                        <p className={styles.projectsLeftSubTitle}>* Source code available {currentSelected.availability}</p>
                    </div>
                    <div>
                        {currentSelected.languages}
                    </div>
                    <div>
                        {currentSelected.brief}
                    </div>
                </div>
                <div className={styles.projectsRightContainer}>
                    {
                        projects.map((project)=>{
                            return(
                                <SelectionBarButton 
                                    title={project.title} 
                                    id={project.id} 
                                    active={selected}
                                    setActive={setSelected}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

