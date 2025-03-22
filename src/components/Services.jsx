import React, { useState } from 'react'
import Title from './Title'
import WebDesing from '../assets/web-design.jpg'
import WebDevelopment from '../assets/web-development.jpg'
import AwsDevelopment from '../assets/aws-development.jpg'
import AppMaintainance from '../assets/app-maintainance.jpg'
import HybridAppDevelopment from '../assets/hybrid-app-development.jpg'

const Services = () => {
    return (
        <section id="services">
            <Title name={"Services"} />
            <>
                <ImageGrid />
            </>
        </section>
    )
}

export default Services


const images = [
  WebDesing,
  WebDevelopment,
  AwsDevelopment,
  AppMaintainance,
  HybridAppDevelopment,
];

const captions = [
    "Web Designing",
    "Web Development",
    "Aws Deployment",
    "WebApp Maintainance",
    "Hybrid App Development",
];

function ImageGrid() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-12 my-8">
        {images.map((src, index) => (
          <ImageCard key={index} src={src} caption={captions[index]} />
        ))}
      </div>
    );
  }

function ImageCard({ src, caption }) {
    const [hover, setHover] = useState(false);
  
    return (
      <div
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 ${hover ? "scale-110" : "scale-100"}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={src} alt={caption} className="w-full h-auto object-cover" loading='lazy' decoding='async' />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white text-lg text-center font-semibold">{caption}</span>
        </div>
      </div>
    );
  }