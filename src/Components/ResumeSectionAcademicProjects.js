import React from 'react';
import styles from './ResumeSectionAcademicProjects.module.css';

/*
TO ADD A NEW PROJECT, PLEASE FOLLOW THE FOLLOWING FORMAT

1. Declare the languages used in the project as follows:
    const projectLanguages = [
        {
            title: '',
            language: ''
        }
    ]

2. Declare the brief of the project as follows: 
    const projectBrief = [
        'brief 1',
        'brief 2',
        'brief 3'
    ]

3, THEN, CREATE AN OBJECT OF THE PROJECT AD FOLLOWS:
    export const newProject = {
        languages: <>languagesFormat(projectLanguages)</>,
        brief: <>briefFormat(projectBrief)</>
    }

    !!!!NOTE!!!! use the formatter to format the information createed in step 1 and 2

4. Finally, add the newly defined project in the projects array as a new object item as shown
*/



/*
Transform the input information *ARRAY* into the desired format
*/
const langaugesFormat = (languages) => {
    return (
        <div className={styles.container}>
            {
                languages.map((language)=>{
                    return(
                        <>
                            <div>
                                <p className={styles.title}>{language.title}:&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                <p>{language.language}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

/*
Transform the input information *ARRAY* into the desired format
*/
const briefFormat = (brief) => {
    return (
        <div className={styles.briefContainer}>
            <p className={styles.title}>Brief:&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <ul>
                {
                    brief.map((item)=> {
                        return(
                            <li>
                                <p>{item}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}



/* 


PROJECT SAL TICKET


*/
const salTicketLanguages = [
    {
        title: 'Project Focus',
        language: 'Web Application - Full Stack Development'
        
    },
    {
        title: 'Project Type',
        language: 'Individual Project'
    },
    {
        title: 'Front-End',
        language: 'HTML, CSS, JavaScript, jQuery'
    },
    {
        title: 'Back-End',
        language: 'Java Servlet'
    },
    {
        title:'API',
        language: 'RESTful'
    }
]

const salTicketBrief = [
    'A web application modeling online ticket trading platform.',
    'Real-time event searching is facilitated by acquiring information through a RESTful API.',
    'A user authentication system is implemented, along with an advanced searching system and additional detailed functions exclusively available to logged-in users.'
]

const salTicket = {
    languages: <>{langaugesFormat(salTicketLanguages)}</>,
    brief: <>{briefFormat(salTicketBrief)}</>
}


/*


PROJECT DINE-ON


*/
const dineOnLanguages = [
    {
        title: 'Project Focus',
        language: 'Web Application'
    },
    {
        title: 'Project Type',
        language: 'Collaborative Project'
    },
    {
        title: 'Responsibility',
        language: 'Front-End Development'
    },
    {
        title: 'Front-End',
        language: 'JavaScript, React, CSS, jQuery'
    },
    {
        title:'API',
        language: 'RESTful'
    }
]

const dineOnBrief = [
    'An all-encompassing web application catering to USC students, offering dining information, a rating system, and exclusive dining recommendations.',
    '[ Personal Endeavor ] Profile Page Development: Comprehensive layout and functionality, showcasing user\'s past ratings with database information retrieval.',
    '[ Personal Endeavor ] Dining Page Development: Key Features include cuisine ratings display and drop-down menu selection.'
]
const dineOn = {
    languages: <>{langaugesFormat(dineOnLanguages)}</>,
    brief: <>{briefFormat(dineOnBrief)}</>
}



/* 


PROJECT Multi-Agents


*/
const multiAgentsLanguages = [
    {
        title: 'Project Focus',
        language: 'Back-End Development'
    },
    {
        title: 'Project Type',
        language: 'Individual Project'
    },
    {
        title: 'Language',
        language: 'Java'
    }
]

const multiAgentsBrief = [
    'A multithreading system processes a single group of requests concurrently, utilizing a designated number of agents.',
    'The concurrent processing capability is achieved through the implementation of locks.',
    'Utilized Gson library to handle input requests.'

]
const multiAgents = {
    languages: <>{langaugesFormat(multiAgentsLanguages)}</>,
    brief: <>{briefFormat(multiAgentsBrief)}</>
}


/*



PROJECT E-COMMERCE

*/
const eCommerceLanguages = [
    {
        title: 'Project Focus',
        language: 'Back-End Development'
    },
    {
        title: 'Project Type',
        language: 'Individual Project'
    },
    {
        title: 'Language',
        language: 'C++'
    }
]

const eCommerceBrief = [
    'A system modeling e-commerce platform, encompassing features such as keyword searching, adding products to the cart, viewing the cart, and making purchases.',
    'The implementation is accomplished using various data structures such as classes, maps, and sets, as well as fundamental concepts like pointers and references.',
    'Concepts such as inheritance and polymorphism were effectively utilized to minimize code duplication.'

]

const eCommerce = {
    languages: <>{langaugesFormat(eCommerceLanguages)}</>,
    brief: <>{briefFormat(eCommerceBrief)}</>
}

/*


PROJECT BIG-INT


*/
const bigIntLanguages = [
    {
        title: 'Project Focus',
        language: 'Coding Project'
    },
    {
        title: 'Project Type',
        language: 'Individual Project'
    },
    {
        title: 'Language', 
        language: 'C++'
    }
]
const bigIntBrief = [
    'Arbitrary large number storage system utilizing vectors.',
    'Arithmetic Operations Management for Bases 2 to 36 via Operator Overloading.'
]
const bigInt = {
    languages: <>{langaugesFormat(bigIntLanguages)}</>,
    breif: <>{briefFormat(bigIntBrief)}</>
}



/*



EXPORT SECTION!



*/
export const projects = [
    {
        id: 0,
        title: 'SAL TICKET',
        languages: salTicket.languages,
        brief: salTicket.brief,
        availability: 'upon request'
    },
    {
        id: 1,
        title: 'DINE-ON',
        languages: dineOn.languages,
        brief: dineOn.brief,
        availability: 'on GitHub'
    },
    {
        id: 2,
        title: 'MULTI-AGENTS',
        languages: multiAgents.languages,
        brief: multiAgents.brief,
        availability: 'upon request'
    },
    {
        id: 3,
        title: 'E-COMMERCE',
        languages: eCommerce.languages,
        brief: eCommerce.brief,
        availability: 'upon request'
    },
    {
        id: 4,
        title: 'BIG-INT',
        languages: bigInt.languages,
        brief: bigInt.breif,
        availability: 'upon request'

    }
]