import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import { getEditorialPosts } from '../services';


const Editorial = ({post}) => {
  // const [editorialPosts, setEditorialPosts] = useState([]);
  // const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect(() => {
  //   getEditorialPosts().then((result) => {
  //     setEditorialPosts(result);
  //     console.log(`####${editorialPosts}`);
  //     setDataLoaded(true);
  //   });
  // }, []);

  // const post = editorialPosts;
  

  return (
    <div className='flex flex-col h-full pb-8 justify-end gap-4'>
    <h1 className='uppercase font-semibold hidden lg:block text-xl text-right mb-2'>Los juicios de salem</h1>
    <div className='relative h-60 md:h-96 lg:h-60'>
        <div className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-60 md:h-96 lg:h-60" style={{ backgroundImage: ` url(${post.imagenPresentacion.url})`/* backgroundImage: `url('${post.imagenPresentacion.url}')` */}} />
        <div className="absolute bg-center bg-gradient-to-b opacity-40 from-gray-400 via-gray-700 to-black w-full h-60 md:h-96 lg:h-60" />
        <div className="flex flex-col rounded-lg p-4 items-left justify-end pb-12 absolute w-full h-full">
            <p className="text-white text-shadow font-semibold text-lg text-left">{post.titulo}</p>
            <div className="flex items-center absolute bottom-5 w-full justify-left">
                
                <p className="inline align-middle text-white text-shadow font-normal">Por </p>
                <p className="inline align-middle text-white text-shadow ml-2 font-normal">{post.autor.nombre}</p>
                <p className="inline align-middle text-white text-shadow ml-2 font-normal">|</p>
                <p className="inline-block align-middle text-white text-shadow ml-2 font-normal text-xs">{/*moment(post.createdAt).format('DD MMM, YYYY')*/post.fecha}</p>
            </div>
        </div>
    </div>
    <p className='text-xs'>{post.extracto}</p>
    <Link href={`/post/${post.slug}`}>
      <span 
        className='bg-red-600 hover:bg-[#4f36cc] rounded-lg py-1 px-[8px] max-w-[60%] text-xs lg:self-start self-center'>
        Leer juicio completo
      </span>
    </Link>
    </div>
  );
};

export default Editorial