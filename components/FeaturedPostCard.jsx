import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-60 md:h-96 lg:h-[31rem]">
    <div className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-60 md:h-96 lg:h-[31rem]" 
    style={{ backgroundImage: `url('${post.imagenPresentacion.url}')` }} />
    <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-60 md:h-96 lg:h-[31rem]" />
    <div className="flex flex-col rounded-lg p-4 items-left justify-end pb-16 absolute w-full h-full">
      <p className="text-white text-shadow font-semibold text-xl text-left">{post.titulo}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-left">
        {/* <Image
          unoptimized
          alt={post.autor.nombre}
          height={30}
          width={30}
          className="align-middle drop-shadow-lg rounded-full"
          src={post.autor.foto.url}
        /> */}
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.autor.nombre}</p>
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">|</p>
        <p className="inline-block align-middle text-white text-shadow ml-2 font-semibold text-xs">{moment(post.createdAt).format('DD MMM, YYYY')}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;