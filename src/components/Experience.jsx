import React from 'react'
import Title from './Title'
import { experience } from '../data/experience'

const Experience = () => {

    return (
        <section id="experience">
            <Title name="Experience" />
            <ul className="timeline px-12 timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {experience.map((item, index) => (
                    <li key={index}>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className={`timeline-${index % 2 === 0 ? "start" : "end"} mb-10 md:text-${index % 2 === 0 ? "end" : "start"}`}>
                            <time className="font-mono">{item.year} - <span className='font-black'>{item.Company_name}</span> </time>
                            <div className="text-lg italic text-justify ">{item.job_desc}</div>
                            <p>{item.jobDesc}</p>
                        </div>
                        {experience.length - 1 !== index && <hr />}
                    </li>
                ))}
            </ul>
        </section>

    )
}

export default Experience