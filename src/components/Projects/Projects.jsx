import React from "react";
import Portfolio from "./Portfolio";

function Projects() {
    return (
        <>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-6 p-5">
                <div>
                    <h1 className="font-extrabold text-2xl md:text-2xl mb-1 text-black dark:text-white">
                        Projects
                    </h1>
                    <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16 text-justify">
                        <p> 
                        &#x1F680;Welcome to My Project Showcase!&#x1F680; 
                        </p>

                        <p>
                            Here, I present my journey as a web developer, showcasing 
                            the projects I've created along the way. As an aspiring developer, I 
                            value every opportunity to learn and grow, and I'm happy to share 
                            my progress with you.
                        </p>

                        <p>
                            Each project represents a valuable learning experience and a chance to
                            apply new skills. 
                        </p>
                        <p>
                            Thank you for visiting, and I am thrilled that you are witnessing my growth and progress first-hand.
                        </p>
                        <p>
                            Let's celebrate the art of learning and the art of creating.
                        </p>
                    </p>
                </div>
                <Portfolio/>
            </div>
        </>
    )
}

export default Projects;