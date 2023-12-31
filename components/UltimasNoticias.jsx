import React from 'react'
import dynamic from 'next/dynamic';

const NoticiasSlider = dynamic(() => import ('../sections/NoticiasSlider'));

const UltimasNoticias = () => {
  return (
    
  <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 text-white'>
    <div className='lg:col-span-8 col-span-1'>
        <NoticiasSlider/>
      {/* {posts.reverse().map((post, index) => <PostCard post={post.node} key={post.node.slug} />)} */}
    </div>
    <div className='lg:col-span-4 col-span-1'>
      <div className='lg:sticky relative top-8'>
        Editorial
      </div>
    </div>
  </div>

  )
}

export default UltimasNoticias