import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { PostGridCard, FeaturedPostCard } from '../components';
import { getFeaturedPosts, getSimilarPosts } from '../services';

// const BlogGrid = dynamic(() => import ('../sections/GridCarousel'));

const BlogGrid = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
      getFeaturedPosts().then((result) => {
        setFeaturedPosts(result);
      });
    }, []);
    
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

    const [startIdx, setStartIdx] = useState(0);
    const postsPerLoad = windowWidth > tresholdbg ? 9 : 6; // Display 9 posts on large screens and 6 on smaller screens
  
    // Sample data, replace this with your actual data
    // const allPosts = Array.from({ length: 20 }, (_, i) => `Post ${i + 1}`);
    const allPosts = featuredPosts;
    const visiblePosts = allPosts.slice(startIdx, startIdx + postsPerLoad);
  
    const handleLoadMore = () => {
      setStartIdx(startIdx + postsPerLoad);
    };
  
    const handleLoadPrevious = () => {
      setStartIdx(Math.max(0, startIdx - postsPerLoad));
    };
  
    return (
      <div className="mb-8">
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 min-h-[590px]`}>
          {visiblePosts.map((post, index) => (
            <div className={`col-span-1 bg-black h-40 w-auto post-item`}>
              <PostGridCard key={index} post={post} />
            </div>
          ))}
        </div>
        <div className="mt-4">
          {startIdx > 0 && (
            <button onClick={handleLoadPrevious} className="mr-2">
              Load Previous
            </button>
          )}
          {startIdx + postsPerLoad < allPosts.length && (
            <button onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    );
  };
  

const TodasLasNoticias = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
        <div className='lg:col-span-8 col-span-1 max-h-[626px]'>
            <h1 className='uppercase font-semibold text-center lg:text-left text-xl mb-2'>Todas Las Noticias</h1>
            {/* <GridCarousel/> */}
            <BlogGrid/>
            {/* <div className="mb-8">
                <div className='grid grid-cols-3 gap-4 max-h-[626px] overflow-y-auto'>
                    {dataLoaded && featuredPosts.map((post, index) => (
                        <PostGridCard key={index} post={post} />
                    ))}
                    <div className='col-span-1 bg-black h-40 w-auto'>01</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>02</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>03</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>04</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>05</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>06</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>07</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>08</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>09</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>10</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>11</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>12</div>
                    <div className='col-span-1 bg-black h-40 w-auto'>13</div>
                </div>
            </div> */}
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