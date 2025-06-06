import React from 'react'
import Title from './Title'
import DeviceType from './DeviceType'
import { education } from '../data/education';

const Education = () => {

    const isMobile = DeviceType();

    return (
        <section id='education'>
            <Title name={"Education"} />
            <div className='flex justify-center items-center'>
                {!isMobile ?
                    <ul className="timeline">
                        {education.map((item, index) => (
                            <li key={index}>
                                {index !== 0 && <hr />}
                                <div className="timeline-start">{item.year}</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">{item.title}</div>
                                {education.length - 1 !== index && <hr />}
                            </li>
                        ))}
                    </ul> :
                    <ul className="timeline timeline-vertical">
                        {education.map((item, index) => (
                            <li key={index}>
                                {index !== 0 && <hr />}
                                <div className="timeline-start">{item.year}</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">{item.title}</div>
                                {education.length - 1 !== index && <hr />}
                            </li>
                        ))}

                    </ul>}
            </div>
        </section>
    )
}

export default Education