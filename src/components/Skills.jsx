import React from 'react'
import Title from './Title'
import { badges } from '../data/badges'

const Skills = () => {

    return (
        <section id='skills'>
            <Title name={"Skills"} />
            <>
                <div className="mx-4 grid grid-cols-1 gap-6 px-10">
                    <div className="flex justify-center items-center flex-wrap">
                        {badges.map((badge) => (
                            <img
                                key={badge.name}
                                className='m-4'
                                src={`https://img.shields.io/badge/-${badge.name}-${badge.color}?style=for-the-badge&logo=${badge.logo}&logoColor=${badge.logoColor || "white"}`}
                                alt={badge.name}
                            />
                        ))}
                    </div>
                </div>
            </>
        </section>
    )
}

export default Skills