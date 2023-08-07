import React from 'react'
import Skills from '../Skills/Skills'

function About() {
    return (
        <>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-6 p-5">
                <div className="flex flex-col-reverse sm:flex-row items-start">
                    <div className="flex flex-col pr-8">
                        <h1 className="font-extrabold text-3xl md:text-4xl  mb-1 text-black dark:text-white">
                            Ivan L. Albano Mangunyane
                        </h1>
                        <h2 className="tracking-wide text-gray-700 dark:text-gray-200 mb-4">
                            IT | WEB {' '}
                            <span className="font-bold">DEVELOPER</span>
                        </h2>
                        <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16 text-justify">
                        I'm a dedicated Web Developer based in Maputo, Mozambique. I have skills in both frontend and backend technologies. 
                        I have a strong passion for football, with <a href='https://www.fcporto.pt/pt' target='_blank'>FC Porto</a>&#128153;
                        & <a href='https://www.manutd.com/' target='_blank'>Manchester United</a>&#10084; being my favorites. I enjoy going to
                        the gym and playing Call of Duty Warzone &#x1F60D;&#x1F3AE; 
                        </p>
                    </div>
                    <div className="w-[80px] sm:w-[500px] relative mb-8 sm:mb-0 mr-auto">
                        <img src="src\components\pic\ivan.jpg" alt="avatar" title="avatar" className="rounded-full grayscale hover:grayscale-0" />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-2xl md:text-2xl mb-1 text-black dark:text-white">
                        About Me
                    </h1>
                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16 text-justify">

                        <p>
                        I studied computer and telecommunications engineering at ISUTC. I am currently working as an IT 
                        at Sociedade Moçambicana das Participações, SA. 
                        </p><br></br>

                        <p>
                            I'm a web developer whose journey began in college, where I discovered my knack for creating 
                            dynamic web pages that interact with databases perfectly. Although I initially studied Java 
                            programming in college, I found it complex and challenging, especially when building websites with JSP.
                        </p><br></br>
                        
                        <p>
                            Determined to simplify the process, I explored other languages like PHP and explored back-end frameworks
                            like Node.Js and Flask, which made development faster. I now plan to learn how to create web pages with the 
                            React.Js framework as a way to express my creative abilities.
                        </p> <br></br>

                        <p>
                            As I continue on this exciting path, I am tirelessly enhancing my skills by dedicating myself to learning new 
                            technologies every day. I pride myself on my proficiency in frontend and server-side development, and aspire 
                            to specialize as a data analyst. 
                        </p><br></br>

                        <p>
                            My passion for data and programming is beyond measure, at a time when strategic decisions can have a significant 
                            impact on a nation's economy. I fuel the ambition to enhance my skills in data handling, from collection and cleaning 
                            to analysis and visualization.
                        </p><br></br>

                        <p> 
                            By mastering big data techniques, I aim to empower myself to handle massive volumes of complex information, enabling 
                            valuable insights and strategic information for informed decision-making.
                        </p>
                    </p>
                </div>
                <Skills />
            </div>
        </>
    )
}

export default About