import React from 'react'

const HeroSection = () => {

    const ResumeUrl = "/resume.pdf"

    return (
        <section id="hero">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://images.pexels.com/photos/1102797/pexels-photo-1102797.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-secondary-content text-center animate-fade-up">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">Hi, I am Rakesh</h1>
                        <p className="mb-5">
                            A Full Stack Developer and AWS Specialist.
                        </p>
                        <a href={ResumeUrl} download="Resume-Rakesh.pdf">
                            <div className='btn btn-secondary uppercase'>Download Resume</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection