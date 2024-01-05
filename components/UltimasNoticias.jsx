import React from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NoticiasSlider = dynamic(() => import ('../sections/NoticiasSlider'));
const Editorial = dynamic(() => import ('../components/Editorial') )

const editorial ={
    titulo: `Editorial: "Poder decir adios es crecer"`,
    autor: {
        nombre: 'Lithus Perez',
    },
    fecha: '26 Oct, 2023',
    foto: '/img/floresFondoRojo.png'

}

const UltimasNoticias = () => {
  return (
    
  <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
    <div className='lg:col-span-8 col-span-1'>
        <Image
            unoptimized
            alt={'gato rojo'}
            height={300}
            width={350}
            className='absolute left-0 top-0 lg:hidden'
            src= '/img/gato-rojo-salem.png'
        />
    <h1 className='uppercase font-semibold text-center lg:text-left text-xl mb-2'>Ultimas Noticias</h1>
        <NoticiasSlider/>
      {/* {posts.reverse().map((post, index) => <PostCard post={post.node} key={post.node.slug} />)} */}
    </div>
    <div className='lg:col-span-4 col-span-1'>
      <div className='relative h-full'>
        <Image
            unoptimized
            alt={'gato rojo'}
            height={300}
            width={350}
            className='absolute -top-8 hidden lg:block'
            src= '/img/gato-rojo-salem.png'
        />
        <Editorial post ={editorial}/>
      </div>
    </div>
  </div>

  )
}

export default UltimasNoticias