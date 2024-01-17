import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Select, {styles} from 'react-select';

import { PostGridCard, FeaturedPostCard } from '../components';
import { getCategories } from '../services';


// const BlogGrid = dynamic(() => import ('../sections/GridCarousel'));

const BlogGrid = ({posts}) => {
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

    const [startIdx, setStartIdx] = useState(0);
    const postsPerLoad = windowWidth > tresholdbg ? 9 : 6; // Display 9 posts on large screens and 6 on smaller screens
  
    // Sample data, replace this with your actual data
    // const allPosts = Array.from({ length: 20 }, (_, i) => `Post ${i + 1}`);
    const allPosts = posts.reverse();
    // const allPosts = featuredPosts;
    // console.log('BlogGrid')
    // console.log(allPosts);

    // const visiblePosts = allPosts.slice(startIdx, startIdx + postsPerLoad); Comented to enable filter
  
    const handleLoadMore = () => {
      setStartIdx(startIdx + postsPerLoad);
    };
  
    const handleLoadPrevious = () => {
      setStartIdx(Math.max(0, startIdx - postsPerLoad));
    };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories()
      .then((newCategories) => setCategories(newCategories))
    }, [])

    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredPosts = selectedCategory
    ? allPosts.filter(
        (post) =>
          post.node.categorias &&
          post.node.categorias.some((category) => category.name === selectedCategory)
      )
    : allPosts;

    const visiblePosts = filteredPosts.slice(startIdx, startIdx + postsPerLoad);


    const handleCategoryChange = (selectedOption) => {
      setSelectedCategory(selectedOption?.value || null);
      setStartIdx(0); // Reset start index when changing categorys
    };

    const options = [
      { value: '', label: 'Todas las categorías' },
      ...categories.map((category) => ({ value: category.name, label: category.name })),
    ];

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        backgroundColor: '#dc2626', // Replace with your desired background color
        color: '#FFF',
        border: 'none',
        maxHeight: '30px',
        // Add other styles as needed
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: 'none',
        // backgroundColor: state.isSelected ? '#000' : '#F00', // Replace with your desired colors
        borderColor: state.isSelected ? '#000' : '#dc2626', // Replace with your desired colors
        ':hover': {
          backgroundColor: '#2c2c2c', // Replace with your desired hover color
        },
        // Add other styles as needed
      }),
      singleValue: (provided, state) =>({
        ...provided,
        color: '#FFF'
      }),
      menu: (provided,state) =>({
        ...provided,
        backgroundColor: '#dc2626'
      }),
      placeholder: (provided, state) =>({
        ...provided,
        color: '#FFF'
      })
      // Add other styles for the rest of the components (e.g., menu, placeholder, etc.) as needed
  };

  
    return (
      <div className="mb-8">
        {/* Use the React Select component */}
        <Select
          options={options}
          value={options.find((option) => option.value === selectedCategory)}
          onChange={handleCategoryChange}
          styles={customStyles}
          className=' p-0 custom-select w-36 text-xs uppercase mb-4 text-bold h-auto !lg:absolute lg:left-[50%] lg:transform lg:translate-x-[280px] lg:z-10'
          placeholder = 'Categorías'
        />
        {/* <select
          onChange={handleCategoryChange}
          value={selectedCategory || ''}
          className="custom-select mb-4 p-2 border rounded-md bg-red-600 lg:absolute lg:left-[50%] lg:transform lg:translate-x-[280px] lg:z-10"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.name} className='hover:bg-red-600'>
              {category.name}
            </option>
          ))}
        </select> */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 min-h-[590px]`}>
          {visiblePosts.map((post, index) => (
            <div className={`col-span-1 h-40 w-auto post-item`}>
              <PostGridCard key={index} post={post.node} />
              {/* {post} */}
            </div>
          ))}
        </div>
        <div className="z-20 flex justify-between">
          {startIdx > 0 && (
            <button onClick={handleLoadPrevious} className="z-20 bg-red-600 w-8 h-8 cursor-pointer rounded-full text-center">
              &#10094;
            </button>
          )}
          {startIdx + postsPerLoad < allPosts.length && (
            <button onClick={handleLoadMore} className='z-20 relative bg-red-600 w-8 h-8 cursor-pointer  rounded-full text-center'>
              &#10095;
            </button>
          )}
        </div>
        {startIdx + postsPerLoad < allPosts.length && (
            
          <div className='flex justify-end'>
          <Image
          unoptimized
          alt={'Click para mas noticias'}
          height={150}
          width={200}
          className='clickparamas'
          src={'/img/clickparamas.png'}
          />
        </div>
          )}
      </div>
    );
  };
  

const TodasLasNoticias = ({posts}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
        <div className='lg:col-span-8 col-span-1 max-h-[626px]'>
            <h1 className='uppercase font-semibold text-center lg:text-left text-xl mb-2'>Todas Las Noticias</h1>
            <BlogGrid posts={posts}/>
            
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
                    className='absolute translate-x-10 hidden lg:block bottom-0'
                    src='/img/gato-ojos-rojos.png'
                />
                <Image
                    unoptimized
                    alt={'gato negro ojos rojos'}
                    height={600}
                    width={400}
                    className='relative transform -translate-x-10 lg:hidden block'
                    src='/img/gato-ojos-rojos-mb.png'
                />
            </div>
        </div>
    </div>
  )
}

export default TodasLasNoticias