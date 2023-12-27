import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { Subscribe} from '../public/assets/components'

const inter = Inter({ subsets: ['latin'] })

import {useState, useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';

// import { PostCard, Categories, PostWidget } from '../components/';
import { Categories, PostWidget } from '../components/';
import{ getPosts } from '../services';
// import {FeaturedPosts} from '../sections/';

import dynamic from 'next/dynamic';
 
const PostCard = dynamic(()=> import('../components/PostCard'));
const FeaturedPosts = dynamic(()=> import('../sections/FeaturedPosts'));


// template_huvytlz
// service_eeaz1ie
// ryvK7pl1EHrprowrV
//kzD1•••••••••••••••••


const Subscribe = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({...form, [name]: value})

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed with email');
        setLoading(true);

        emailjs.send('service_eeaz1ie', 
            'template_huvytlz',
            {
                from_name: form.name,
                to_name: 'Aquelarre',
                from_email: form.email,
                to_email: 'andres@mainlydigitalworks.com',
                message: 'Un nuevo suscriptor!',
            },
            'ryvK7pl1EHrprowrV',
            )
            .then(() =>{
                setLoading(false);
                alert('Gracias por suscribirte!');
                setForm({
                    name: '',
                    email: '',
                })
            }, (error) => {
                setLoading(false);
                console.log(error);
                alert('Algo ha salido mal.')
            })
    }

    return(
        <div>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-4'
              >
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Escribí tu nombre aquí'
                  className='py-1 px-4 rounded-lg outlined-none border-none text-black w-full'
                  />
                <div className='email-input-container'>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Escribí tu correo aquí'
                  className='py-1 pl-8 rounded-lg outlined-none border-none text-black'
                  >
                  </input>
                </div>
                <button
                  type='submit'
                  className='bg-red-600 hover:bg-[#4f36cc] rounded-lg py-1 px-[8px] max-w-[60%] self-center'
                  >
                    {loading ? 'Enviando...' : 'Suscribirme'}
                  </button>
            </form>
        </div>
    )
}

const Footer = () =>{

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() =>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const treshold = 500;
  const treshold2 = 668;

  const imageUrl = windowWidth > treshold
    ? '/img/LunaLlenaDesktop.png'
    : '/img/LunaLlenaMovil2.png';

  const subscibeUrl = windowWidth > treshold2
  ? "img/suscribite-big.svg"
  : "img/suscribite.svg";


  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-around ${inter.className}`}
    >
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

      <div className='flex flex-col items-center'>
        <Image
          className="relative max-h-96"
          src={imageUrl}
          alt="¿Qué harás la próxima luna llena?"
          width={770}
          height={242}
          priority
        />
        <Image
          className="relative"
          src='/img/ojos.png'
          alt="Ojos"
          width={500}
          height={37}
          priority
        />
        <div className='px-8'>
          <Image
            className="relative text-center"
            src={subscibeUrl}
            alt="Suscribite"
            width={400}
            height={37}
            priority
          />
        </div>
        <div className='px-24 py-4'>
          <Image
            className="relative text-center"
            src="/img/malasuerte.png"
            alt="O tendras mala suerte"
            width={300}
            height={37}
            priority
          />
        </div>
      </div>
      <div className='max-w-[80%] pb-8'>
        <Subscribe/>
      </div>
    </div>
  )
}



export default function Home({posts}) {
  return (
    <main>
      <div className='container mx-auto px-10 mb-8'>
        <FeaturedPosts/>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.reverse().map((post, index) => <PostCard post={post.node} key={post.node.slug} />)}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget/>
              <Categories/>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {/* <Footer/> */}
      </footer>
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}