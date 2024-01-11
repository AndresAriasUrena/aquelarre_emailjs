import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const PostGridCard = ({post}) => (
    <div className="relative col-span-1 h-40">
      <div className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-32" style={{ backgroundImage: `url('${post.imagenPresentacion.url}')` }} />
      <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-32" />
      <div className="flex flex-col rounded-lg items-left justify-end absolute w-full h-32">
        <p className="text-white text-shadow font-semibold text-xs text-left">{post.titulo}</p>
        {/* <div className="flex items-center absolute bottom-5 w-full justify-left">
          <Image
            unoptimized
            alt={post.autor.nombre}
            height={30}
            width={30}
            className="align-middle drop-shadow-lg rounded-full"
            src={post.autor.foto.url}
          />
        </div> */}
        {/* <p className="inline align-middle tex-xs text-white text-shadow ml-2 font-normal">{post.autor.nombre}</p>
        <p className="inline align-middle tex-xs text-white text-shadow ml-2 font-normal">|</p>
      <p className="inline-block align-middle text-white text-shadow ml-2 font-medium text-xs">{moment(post.createdAt).format('DD MMM, YYYY')}</p> */}
      </div>
      <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
      <p className="absolute bottom-0 text-xs text-white text-shadow font-normal">Por {post.autor.nombre} | {moment(post.createdAt).format('DD MMM, YYYY')}</p>
    </div>
);

export default PostGridCard;