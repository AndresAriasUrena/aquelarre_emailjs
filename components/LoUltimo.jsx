import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const NoticiasSlider = dynamic(() => import ('../sections/NoticiasSlider'));
const Editorial = dynamic(() => import ('../components/Editorial') )
import { getEditorialPosts } from '../services';

const LoUltimo = () => {
    const [editorialPosts, setEditorialPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getEditorialPosts().then((result) => {
        setEditorialPosts(result);
        setDataLoaded(true);
        console.log(`${editorialPosts}`);
        });
    }, []);

  return (
    <div
      className=" relative h-[57rem] lg:h-screen bg-top -mt-8 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/img/loUltimo-bg.png')` }}
    >
        <div className='z-20 relative pt-16 xl:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
            <h1 className='uppercase font-semibold text-center lg:col-span-12 text-lg lg:text-2xl mt-4'>Conectate con lo último</h1>
            <div className='lg:col-span-8 col-span-1'>
                <NoticiasSlider/>
            {/* {posts.reverse().map((post, index) => <PostCard post={post.node} key={post.node.slug} />)} */}
            </div>
            <div className='lg:col-span-4 col-span-1'>
            <div className='relative h-full'>
                {/* <Editorial post ={editorial}/> */}
                {dataLoaded && editorialPosts.map((post,index) => (
                <Editorial key={index} post={post}/>
                ))}
            </div>
            </div>
        </div>
            <Link href={`/noticias/`}>
                <span 
                    className='z-20 relative mb-8 lg:mb-0 text-white grid self-center bg-red-600 hover:bg-[#4f36cc] rounded-lg py-1 px-[8px] max-w-[50%] lg:max-w-[15%] text-center text-xs lg:text-lg mx-auto self-center'
                    >
                    Ir a noticias
                </span>
            </Link>
        <div className='grid grid-cols-3 lg:grid-cols-4 gap-1 text-white'>
            <Image
                unoptimized
                alt={'Gato perfil'}
                height={300}
                width={326}
                className='relative col-span-1 lg:block lg:self-end'
                src={'/img/gato-perfil.png'}
                priority
            />
            <Image
                unoptimized
                alt={'bienvenides al primer aquelarre'}
                height={150}
                width={600}
                className='relative col-span-2 lg:block lg:self-center justify-self-center'
                src={'/img/bienvenides.png'}
                priority
            />
            <Image
                unoptimized
                alt={'Gato boca abierta'}
                height={300}
                width={326}
                className='relative lg:col-span-1 hidden lg:block lg:self-end'
                src={'/img/gato-abierta.png'}
                priority
            />

        </div>
    </div>
  )
}

export default LoUltimo