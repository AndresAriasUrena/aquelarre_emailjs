import Image from 'next/image'

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

    return (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='grid gap-4 max-w-md mx-auto md:grid-cols-2 md:grid-rows-2 md:gap-2'
        >
          <div className='md:col-start-1 md:row-start-1'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Escribí tu nombre aquí'
              className='py-1 px-4 rounded-lg outlined-none border-none text-black w-full'
            />
          </div>
          <div className='md:col-start-1 md:col-span-1 md:row-start-2'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Escribí tu correo aquí'
              className='py-1 px-4 rounded-lg outlined-none border-none text-black w-full'
            />
          </div>
          <div className='grid md:flex md:col-start-2 md:row-start-2 justify-flex-end'>
            <button
              type='submit'
              className='bg-[#100F12] hover:bg-[#4f36cc] text-white rounded-lg py-1 px-[8px] max-w-[60%] md:self-end justify-self-end'
            >
              {loading ? 'Enviando...' : 'Suscribirme'}
            </button>
          </div>
        </form>
      );
}

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setFooterHeight(document.getElementById('footer-container').offsetHeight);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const treshold = 500;
    const treshold2 = 668;
    const tresholdbg = 768;
  
    const imageUrl = windowWidth > treshold
      ? '/img/LunaLlenaDesktop.png'
      : '/img/LunaLlenaMovil2.png';
  
    const subscibeUrl = windowWidth > treshold2
      ? "img/suscribite-big.svg"
      : "img/suscribite.svg";
  
    const footerBackground = windowWidth > tresholdbg
      ? '/img/footer-xl.png'
      : '/img/footer-mb.png';

    const footerSus = windowWidth > tresholdbg
      ? '/img/sus-footer-xl.png'
      : '/img/sus-footer.png';

    const footerNews = windowWidth > tresholdbg
      ? '/img/newsletter-footer-xl.png'
      : '/img/newsletter-footer.png';
    
    const backgroundSize = windowWidth > tresholdbg
      ? 'contain'
      : 'cover';
  
    const footerStyle = {
      backgroundImage: `url('${footerBackground}')`,
      backgroundSize: `${backgroundSize}`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      minHeight: `${footerHeight}px`,
      height: `calc(100vh - ${footerHeight}px)`, // Dynamic height for wider displays
    };

  return (
    <div>
    <Image 
        className='relative max-h-40 w-full md:hidden'
        src='/img/footer-top-mb.png'
        alt='Newsletter'
        width={300}
        height={166}
        priority
    />
    <div
      id='footer-container'
      className={`flex flex-col md:flex-col-reverse items-center md:w-full`}
      style={footerStyle}
    >
      <div className='md:w-[50%] w-full md:flex md:gap-8 md:items-end md:ml-[11vw]'>
      <div className='flex items-center'>
        <div className='text-sm md:text-xs grid grid-rows-4 grid-flow-col gap-4 md:gap-2 mx-auto p-4 text-white text-transform: uppercase'>
            <div>Nosotros</div>
            <div>Contacto</div>
            <div>Media Kit</div>
            <div>Lit Inc</div>
            <div>Instagram</div>
            <div>Youtube</div>
            <div>TikTok</div>
            <div>Spotify</div>
        </div>
      </div>
      <div className='flex flex-col items-center md:items-start container mx-auto'> 
        <div className='flex flex-col items-center md:items-start px-4 md:px-0'>
            <Image 
                className='relative max-h-40 max-w-xs w-full md:h-16 md:w-64'
                src={footerNews}
                alt='Newsletter'
                width={300}
                height={166}
                priority
            />
            <Image
                className='relative max-h-20 max-w-md w-full'
                src={footerSus}
                alt='Suscribete para promos'
                width={460}
                height={72}
                priority
            />
            <Image
                className='relative max-h-28 md:hidden'
                src='/img/mala-footer.png'
                alt='o tendras mala suerte'
                width={520}
                height={112}
                priority
            />
        </div>
        
        <div className='w-[90vw] md:w-auto md:pb-4'>
            <Subscribe/>
        </div>
      </div>
      <div className='flex-grow w-full h-[20vh] md:hidden'></div>   
      </div>
    </div>
    </div>
  )
}

export default Footer