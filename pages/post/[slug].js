import React from 'react';
import moment from 'moment'
import { useRouter } from 'next/router';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader} from '../../components'
import { getPosts, getPostsDetails} from '../../services'
import { AdjacentPosts } from '../../sections';

const PostDetails = ({post}) => {
  const router = useRouter();

  // console.log(post);
  // console.log(post.categorias[0].name);

  if(router.isFallback){
    return <Loader/>
  }

  return (
    <>
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid grid-cols1 gap-12 bg-white '>
                <div className='col-span-1'>
                    <PostDetail post={post} />
                    {/* <Author autor={post.autor}/> */}
                    <h1 className='uppercase text-center text-xs text-[#4f36cc]'>Categoria: {post.categorias[0].name}</h1>
                    <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto justify-center'>
                      <p className='inline align-middle text-gray-700 ml-2 text-sm lg:text-lg'>Por {post.autor.nombre}</p>
                      <p className='font-medium text-gray-700 mx-2 inline align-middle'>|</p>
                      <span className='font-medium text-gray-700 text-sm lg:text-md'>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
                    </div>
                    <div className='pt-8 relative z-20'>
                      <AdjacentPosts slug={post.slug} createdAt={post.createdAt}/>
                    </div>
                    {/* <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug}/> */}
                </div>
                {/* <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={post.slug} categorias={post.categorias.map((category) => category.slug)}/>
                        <Categories/>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default PostDetails


export async function getStaticProps( {params}) {
    const data = await getPostsDetails(params.slug)
  
    return {
      props: {post:data}
    }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }
