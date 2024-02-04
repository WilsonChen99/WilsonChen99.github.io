import React, { useState } from 'react';
import styles from './ResumeSections.module.css';
import { courses } from './ResumeSectionCourses.js';
import { projects } from './ResumeSectionAcademicProjects';
import { SelectionBarButton } from './Button';
import HonorsImgViewer from './HonorsImgViewer';

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
    /*
    When adding a new honor, follow the format:
    1. Create an array of objects for each images for the honorship letter as follows:
        const newHonor = [
            {
                src: 'image link',
                alt: 'alt',
                width: 'desired',
                height: 'desired'
            }
        ]
    2. Add a Honors ImgViewer element as follows: 
        <HonorsImgViewer
            logo='issuer's logo link',
            title='title of the new honor',
            images={the array in step 1}
    */

    const PKP = [
        {
            src: 'PKPMembership.png',
            alt: 'Phi Kappa Phi Honor Society membership letter',
            width: 'auto',
            height: '100vh'
        }
    ]

    const DeanList = [
        {
            src: 'Fall22.png',
            alt: 'Dean\'s List Fall 22 Letter',
            width: '80vw',
            height: 'auto'
        },
        {
            src: 'Spr23.png',
            alt: 'Dean\'s List Spring 23 Letter',
            width: '80vw',
            height: 'auto'
        },
        {
            src: 'Fall23.png',
            alt: 'Dean\'s List Fall 23 Letter',
            width: '80vw',
            height: 'auto'
        }
    ]

    return (
        <>
            <p className={styles.moreInfo}>Please click for more information</p>
            <div className={styles.honorsContainer}>
                <HonorsImgViewer
                    logo='PKPLogo.png'
                    title='Member of the Honor Society of Phi Kappa Phi'
                    images={PKP}
                />
                <HonorsImgViewer
                    logo='TBPLogo.png'
                    title='Member of the Engineering Honor Society of Tau Beta Pi'
                    images={""}
                />
                <HonorsImgViewer
                    logo='uscLogo.png'
                    title={'The Dean\'s List of Viterbi School of Engineering (x3)'}
                    images={DeanList}
                />
            </div>
            
        </>
    )
}

export function Skills() {

    const [clicked, setClicked] = useState([]);

    const sections = {
        Languages: ['Java', 'JavaScript', 'C/C++', 'Python', 'Assembly', 'Unix/Linux Shell'],
        'Web Dev': ['React', 'HTML', 'CSS', 'jQuery', 'Firebase'],
        Tools: ['Visual Studio Code', 'Android Studio', 'Eclipse', 'PyCharm', 'Xcode'],
        DevOps: ['Git/ Github']
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
            description: 'Instructed a class of 9 students in VEXcode VR programming and guided them in assembling and operating robots, as well as enabling students to tackle pathfinding challenges using brute force techniques, as well as fostering a fundamental grasp of essential graph algorithms such as Breadth-First Search and Depth-First Search. '
        },
        {
            id: '2',
            employer: 'USC Viterbi School of Engineering',
            position: 'Course Producer - CSCI 270 Introduction to Algorithms and Theory of Computing',
            area:'Los Angeles, CA',
            time:'August 2023 - December 2023',
            description: 'Conduct weekly office hours to provide in-depth guidance on topics in amortized analysis, divide and conquer, greedy algorithms, graph algorithms, dynamic programming, network flow, linear programming and NP-complete principles.'
        },
        {
            id: '3',
            employer: 'USC Viterbi School of Engineering',
            position: 'Course Producer - CSCI 356 Introduction to Computer Systems',
            area:'Los Angeles, CA',
            time:'January 2024 - Present',
            description: 'Conduct weekly office hours to provide in-depth guidance on topics in bitwise operations, assembly languages, as well as more comprehensive studies about caches, including organization flow, addressing, pipelining and heap management.'
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

