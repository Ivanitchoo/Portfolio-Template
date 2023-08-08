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
                        <img src="https://i.ibb.co/phw95kg/1691430058636.jpg" alt="avatar" title="avatar" className="rounded-full grayscale hover:grayscale-0" />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-2xl md:text-2xl mb-1 text-black dark:text-white">
                        About Me
                    </h1>
                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16 text-justify">

                        <p>
                        I'm a Computer and Telecommunications Engineering Undergraduate From ISUTC. I am currently working as an IT 
                        at Sociedade Moçambicana das Participações, SA. 
                        </p><br></br>

                        <p>
                            I am an aspiring web developer whose journey started in college, where I discovered my aptitude for creating dynamic web 
                            pages that interact properly with databases. From there, I found everything related to web architecture, web security 
                            practices, API's and web routing very interesting. Although I initially studied Java 
                            programming in college, I found it complex and challenging, especially when building websites with JSP.
                        </p><br></br>
                        
                        <p>
                            Determined to simplify the development process and understanding, I explored other languages with higher popularity 
                            and with a large community like PHP. I also explored some modern back-end frameworks like Node.Js and Flask, which 
                            made my development process even faster. I now plan to learn how to create web pages with the React.Js framework as 
                            a way to express my creative abilities and consolidate my fullstack ability.
                        </p> <br></br>

                        <p>
                            As I continue on this exciting path, I am tirelessly enhancing my skills by dedicating myself to learning new 
                            technologies every day. I pride myself on my proficiency in fullstack development, a skill that allows me to 
                            cover both the frontend and backend of web applications. However, it is in the realm of server-side technologies, 
                            such as MySQL, GraphQL, RestAPI's, NoSQL, and others that I feel most inclined to specialize. I have a knack for creating applications 
                            that not only interact with databases, but also turn data into valuable information enabling a better data-driven decisions. 

                        </p>                        
                    </p>
                </div>
                <Skills />
            </div>
        </>
    )
}

export default About