import React from 'react'

const Title = ({ name }) => {

    return (
        <>
            <div id={`title-${name}`} className='mt-8 text-primary flex justify-center items-center pt-8 text-xl font-bold uppercase'>{name}</div>
            <div className={`my-8 mx-12 pt-4 border-t border-primary`}></div>
        </>
    )
}

export default Title