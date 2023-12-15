import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { Subscribe} from '../public/assets/components'

const inter = Inter({ subsets: ['latin'] })

import {useState, useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';



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
                  className='bg-red-600 hover:bg-purple-900 rounded-lg py-1 px-[8px] max-w-[60%] self-center'
                  >
                    {loading ? 'Enviando...' : 'Suscribirme'}
                  </button>
            </form>
        </div>
    )
}

export default function Home() {

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

  const treshold = 668;

  const imageUrl = windowWidth > treshold
    ? '/img/LunaLlenaDesktop.png'
    : '/img/LunaLlenaMovil2.png';

  const subscibeUrl = windowWidth > treshold
  ? "img/suscribite-big.svg"
  : "img/suscribite.svg";


  return (
    <main
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
          width={1251}
          height={394}
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
        <div className='px-8 mt-8'>
          <Image
            className="relative text-center"
            src={subscibeUrl}
            alt="Suscribite"
            width={400}
            height={37}
            priority
          />
        </div>
        <div className='px-24 pt-4'>
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


      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
