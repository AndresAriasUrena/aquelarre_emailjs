import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const BlogGrid = dynamic(() => import ('../sections/GridCarousel'));


const TodasLasNoticias = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
        <div className='lg:col-span-8 col-span-1 max-h-[626px]'>
            <h1 className='uppercase font-semibold text-center lg:text-left text-xl mb-2'>Todas Las Noticias</h1>
            <BlogGrid/>
            <Image
                    unoptimized
                    alt={'click aqui para mas noticias'}
                    height={50}
                    width={200}
                    className='absolute hidden block right-16 bottom-0'
                    src='/img/click-aqui.png'
                />
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='relative h-full w-full'>
                <Image
                    unoptimized
                    alt={'gato negro ojos rojos'}
                    height={600}
                    width={400}
                    className='absolute hidden lg:block bottom-0'
                    src='/img/gato-ojos-rojos.png'
                />
                <Image
                    unoptimized
                    alt={'gato negro ojos rojos'}
                    height={600}
                    width={400}
                    className='relative lg:hidden block'
                    src='/img/gato-ojos-rojos-mb.png'
                />
            </div>
        </div>
    </div>
  )
}

export default TodasLasNoticias