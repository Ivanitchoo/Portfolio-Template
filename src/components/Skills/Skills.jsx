import React from 'react'

function Skills() {
    const skills = ['Wordpress', 'Vanilla JavaScript', 'PHP', 'HTML', 'CSS', 'Node.JS', 'Python', 'Flask', 'MySQL'];

    const devtools = ['Bootstrap ', 'Tailwind', 'Git', 'SandBox', 'Render', 'Vercel', 'Replit', 'PlanetScale', ];

    const courses = ['Udemy: The Complete Python Bootcamp From Zero to Hero', 'FreeCodeCamp: JavaScript Algorithms and Data Structures']
    
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl md:text-2xl  mb-1 text-black dark:text-white">
                    Skills
                </h1>
                <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16 text-justify">
                    Results-orientated web developer, analytical, pragmatic, with willingness to learn and  
                    I can adapt to technologies. I have basic domain of Linux systems. I'm skilled in systems model design and UI engineering
                    as well as communications with customer or collaborators. I am an advocate of good documentation in software projects, but 
                    I am comfortable working in an agile development environment.
                </p>
                <div className='mt'>
                    <p><b>Technologies I Work With:</b>
                        <ul className="skills-list">
                            {skills.map((skill, i) => <li key={i} className="relative mb-5 pl-6">{skill}</li>)}
                        </ul>
                    </p><br />
                    <p><b>My Development Tools:</b>
                        <ul className="skills-list">
                            {devtools.map((tools, i) => <li key={i} className="relative mb-5 pl-6">{tools}</li>)}
                        </ul>
                    </p>
                    <p><b>Courses I'm Currently Enrolled:</b>
                        <ul className="skills-list">
                            {courses.map((tools, i) => <li key={i} className="relative mb-5 pl-6">{tools}</li>)}
                        </ul>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Skills