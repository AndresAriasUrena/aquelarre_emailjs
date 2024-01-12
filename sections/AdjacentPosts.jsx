import React, {useState, useEffect} from 'react'
import Link from 'next/link';

import { getAdjacentPosts } from '../services';

const AdjacentPostsCard = ({post, position}) => (
    <>
        <Link href={`/post/${post.slug}`}>
            <span className='cursor-pointer absolute w-full h-full'>
                {position === 'LEFT' && (
                    <div>&#10094;   Anterior</div>
                )}
                {position === 'RIGHT' && (
                    <div>Siguiente   &#10095;</div>
                )}
            </span>
        </Link>

    </>
)


const AdjacentPosts = ({createdAt, slug}) => {
    const [adjacentPost, setAdjacentPost] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
      getAdjacentPosts(createdAt, slug).then((result) => {
        setAdjacentPost(result);
        setDataLoaded(true);
      });
    }, [slug]);
    
  return (
    <div className='flex z-20 gap-2 justify-center mb-4'>
        {dataLoaded && (
            <>
                {adjacentPost.previous && (
                    <div className=' bg-black text-white text-xs px-4 py-1 rounded-md'>
                        <Link className='h-full w-full' href={`/post/${adjacentPost.previous.slug}`}
                        >
                            &#10094;   Anterior
                        </Link>
                        {/* <AdjacentPostsCard post={adjacentPost.previous} position= 'LEFT' /> */}
                    </div>
                )}
                {adjacentPost.next &&(
                    <div className=' bg-black text-white text-xs px-4 py-1 rounded-md'>
                        <Link className='h-full w-full' href={`/post/${adjacentPost.next.slug}`}
                        >
                            Siguiente   &#10095;
                        </Link>
                        {/* <AdjacentPostsCard post={adjacentPost.next} position= 'RIGHT' /> */}
                    </div>
                )}
            </>
        )}
        {/* <div>&#10094;   Anterior</div>
        <div>Siguiente   &#10095;</div> */}
    </div>
  )
}

export default AdjacentPosts