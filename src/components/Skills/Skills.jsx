import React from 'react'

function Skills() {
    const skills = ['Vanilla JavaScript', 'PHP', 'HTML', 'CSS', 'Node.JS', 'Python', 'Flask', 'MySQL'];

    const devtools = ['Bootstrap ', 'Tailwind', 'Git', 'SandBox', 'Render', 'Vercel', 'Replit', 'PlanetScale', ];
    
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl md:text-2xl  mb-1 text-black dark:text-white">
                    Skills
                </h1>
                <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16 text-justify">
                Results-orientated web developer with a strong emphasis on effective problem solving throughout the 
                development process. Knowledge of Linux systems and skilled in system design and UI engineering.
                </p>
                <div className='mt'>
                    <p>Technologies I Work With:
                        <ul className="skills-list">
                            {skills.map((skill, i) => <li key={i} className="relative mb-5 pl-6">{skill}</li>)}
                        </ul>
                    </p><br />
                    <p>My Development Tools:
                        <ul className="skills-list">
                            {devtools.map((tools, i) => <li key={i} className="relative mb-5 pl-6">{tools}</li>)}
                        </ul>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Skills