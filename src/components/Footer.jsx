import React, { useContext } from 'react'
import RLogo from '../assets/LogoR.png'
import RDarkLogo from '../assets/LogoR_dark.png'
import { ThemeContext } from '../Context/ThemeContext';

const Footer = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <section id="footer">
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <div className='flex justify-center items-center' >
                    <img className='h-6' src={theme === "coffee" ? RLogo : RDarkLogo} alt="LOGO" />
                    Copyright © {new Date().getFullYear()} - All right reserved by RKZ &#x2764;
                </div>
            </footer>
        </section>
    )
}

export default Footer