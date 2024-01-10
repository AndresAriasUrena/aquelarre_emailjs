import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { PostGridCard, FeaturedPostCard } from '../components';
import { getFeaturedPosts, getSimilarPosts } from '../services';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

const GridCarousel = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
      getFeaturedPosts().then((result) => {
        setFeaturedPosts(result);
        setDataLoaded(true);
      });
    }, []);

    const customLeftArrow = (
      <div className="absolute hidden arrow-btn  text-center py-2 cursor-pointer bg-red-600 rounded-full"
           style={{ 
            bottom: `0rem`,
            right: `5rem`,
            }}
        >&#10094;
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg> */}
      </div>
    );

    const customRightArrow = (
      <div className="absolute arrow-btn text-center py-2 cursor-pointer bg-red-600 rounded-full"
           style={{ 
           bottom: `0.5rem`,
           right: `0.5rem`,
           }}
        >&#10095;
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg> */}
      </div>
    );

    return (
      <div className="mb-8">
        <div className='grid grid-cols-3 gap-4'>
          {/* {dataLoaded && featuredPosts.map((post, index) => (
            <PostGridCard key={index} post={post} />
          ))} */}
          <div className='col-span-1 bg-black h-40 w-auto'>01</div>
          <div className='col-span-1 bg-black h-40 w-auto'>02</div>
          <div className='col-span-1 bg-black h-40 w-auto'>03</div>
          <div className='col-span-1 bg-black h-40 w-auto'>04</div>
          <div className='col-span-1 bg-black h-40 w-auto'>05</div>
          <div className='col-span-1 bg-black h-40 w-auto'>06</div>
        </div>
        {/* <h1 className='uppercase font-semibold text-center lg:text-left text-xl py-2'>Todas Las Noticias</h1>
        <Carousel 
          infinite 
          customLeftArrow={customLeftArrow} 
          customRightArrow={customRightArrow} 
          responsive={responsive} 
          containerClass='h-full'
          itemClass="px-4 col-span-1"
        >
          {dataLoaded && featuredPosts.map((post, index) => (
            
            <PostGridCard key={index} post={post} />
          ))}
        </Carousel>
        <h1 className='uppercase font-semibold text-center lg:text-left text-xl py-2'>Actualidad</h1>
        <Carousel 
          infinite 
          customLeftArrow={customLeftArrow} 
          customRightArrow={customRightArrow} 
          responsive={responsive} 
          containerClass='h-full z-10'
          itemClass="px-4 col-span-1"
        >
          {dataLoaded && featuredPosts.map((post, index) => (
            
            <PostGridCard key={index} post={post} />
          ))}
        </Carousel>
        <h1 className='uppercase font-semibold text-center lg:text-left text-xl py-2'>Musica</h1>
        <Carousel 
          infinite 
          customLeftArrow={customLeftArrow} 
          customRightArrow={customRightArrow} 
          responsive={responsive} 
          containerClass='h-full'
          itemClass="px-4 col-span-1"
        >
          {dataLoaded && featuredPosts.map((post, index) => (
            
            <PostGridCard key={index} post={post} />
          ))}
        </Carousel>
        <h1 className='uppercase font-semibold text-center lg:text-left text-xl py-2'>Cine</h1>
        <Carousel 
          infinite 
          customLeftArrow={customLeftArrow} 
          customRightArrow={customRightArrow} 
          responsive={responsive} 
          containerClass='h-full'
          itemClass="px-4 col-span-1"
        >
          {dataLoaded && featuredPosts.map((post, index) => (
            
            <PostGridCard key={index} post={post} />
          ))}
        </Carousel>
        <h1 className='uppercase font-semibold text-center lg:text-left text-xl py-2'>Teatro</h1>
        <Carousel 
          infinite 
          customLeftArrow={customLeftArrow} 
          customRightArrow={customRightArrow} 
          responsive={responsive} 
          containerClass='h-full'
          itemClass="px-4 col-span-1"
        >
          {dataLoaded && featuredPosts.map((post, index) => (
            
            <PostGridCard key={index} post={post} />
          ))}
        </Carousel>
        <h1 className='uppercase font-semibold text-center lg:text-left text-xl py-2'>Moda</h1>
        <Carousel 
          infinite 
          customLeftArrow={customLeftArrow} 
          customRightArrow={customRightArrow} 
          responsive={responsive} 
          containerClass='h-full'
          itemClass="px-4 col-span-1"
        >
          {dataLoaded && featuredPosts.map((post, index) => (
            
            <PostGridCard key={index} post={post} />
          ))}
        </Carousel> */}
      </div>
  );
}

const BlogGrid = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
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
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
        {visiblePosts.map((post, index) => (
          <PostGridCard key={index} post={post} />
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

export default BlogGrid