import React, { useEffect, useState } from 'react'
import Title from './Title'
import ProfilePicture from '../assets/propic.jpg'
import { urls } from '../data/urls';
const About = () => {

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("animated-text");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="about text-black">
            <Title name="About Me" />
            <div className='px-8'>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 p-8">
                    {/* Left Side - Text Content */}
                    <div id="animated-text" className="md:w-2/3 text-left">
                        <h1
                            className={`text-primary text-2xl md:text-3xl font-bold transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        >
                            I am a Full Stack Developer & AWS Specialist.
                        </h1>
                        <p
                            className={`text-gray-500 mt-4 text-justify transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        >
                            I am a professional Full Stack Developer and AWS Specialist with a strong focus on building scalable, high-performance applications.
                        </p>
                        <p className={`text-gray-500 mt-4 text-justify transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            With expertise in modern web technologies and cloud infrastructure, I create seamless user experiences,
                            efficient backend systems, and deploy robust cloud solutions to optimize performance and reliability
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6 border-t pt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-500">
                                        <a href={`mailto:${urls.email}@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you!`}>
                                            Contact Me
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Instagram</h3>
                                    <p className="text-gray-500"><a href={urls.instagram} target='_blank'>Click to view</a></p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Github</h3>
                                    <p className="text-gray-500"><a href={urls.github} target='_blank'>Click to view</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 bg-primary rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={ProfilePicture} // Replace with your actual image URL
                            alt="Profile"
                            className="w-full h-80 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About