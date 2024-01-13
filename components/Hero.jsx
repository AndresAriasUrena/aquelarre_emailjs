import {useState, useRef, useEffect} from 'react';
import Image from 'next/image';

import { ParticleCanvas } from './canvas';
const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    const tresholdbg = 768;
    const heroBg = windowWidth > tresholdbg
        ? '/img/hero-bg.png'
        : '/img/hero-bg-mb.png';
    const heroImg = windowWidth > tresholdbg
        ? '/img/Hero-img.png'
        : '/img/Hero-img-mb.png';
    const heroFrase = windowWidth > tresholdbg
        ? '/img/hero-frase.png'
        : '/img/hero-frase-mb.png';

  return (
    <div
      className="relative h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('${heroBg}')` }}
    >
      {/* Content inside the outer div */}
      <div className="absolute inset-0 shadow-md grid grid-rows-12 gap-4">
        {/* Your content goes here */}
        <div className='lg:row-start-3 row-start-1 row-span-5 lg:row-span-8 lg:m-auto flex items-center justify-center'>
          {/* Your image or content for the first section */}
          <Image
            className='relative md:hidden text-center max-w-[45vw]'
            src={heroImg}
            alt='Aquelarre comunidad creativa'
            width={550}
            height={241}
            priority
          />
          <div className='hidden md:block'>
            <ParticleCanvas/>
          </div>
        </div>
        <div className='lg:row-start-11 row-start-6 row-span-4 h-auto lg:row-span-3 lg:m-auto flex items-center justify-center'>
          {/* Your image or content for the second section */}
          <Image
            className='relative text-center max-w-[50vw]'
            src={heroFrase}
            alt='Aquelarre comunidad creativa'
            width={550}
            height={241}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
