import Image from 'next/image'
import Link from 'next/link';

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
          className='grid gap-4 max-w-md mx-auto md:grid-cols-3 md:grid-rows-2 md:gap-2'
        >
          <div className='md:col-start-1 md:col-span-2 md:row-start-1'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Escribí tu nombre aquí'
              className='py-1 px-4 rounded-lg outlined-none border-none text-black w-full'
            />
          </div>
          <div className='email-input-container md:col-start-1 md:col-span-2 md:row-start-2'>
            <input
              required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Escribí tu correo aquí'
              className='py-1 pl-8 rounded-lg outlined-none border-none text-black w-full'
            />
          </div>
          <div className='grid md:flex md:col-start-3 md:row-start-2 justify-flex-end'>
            <button
              type='submit'
              className='bg-[#100F12] hover:bg-[#4f36cc] text-white rounded-lg py-1 px-[8px] md:max-w-[100%] max-w-[60%] md:self-end justify-self-end'
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
    <div className='absolute w-full z-10 translate-y-[-10%] md:translate-y-[-25%]'>
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
      <div className='md:w-[60%] lg:w-[50%] w-full md:flex md:items-end xl:pb-4'>
      <div className='flex items-center lg:w-[50%]'>
        <div className='text-sm font-semibold md:text-xs grid grid-rows-3 grid-flow-col gap-4 lg:gap-x-20 md:gap-y-2 mx-auto lg:mr-auto py-4 text-white text-transform: uppercase'>
            {/* <Link href={'/'}><div>Nosotros</div></Link> */}
            <Link href={'https://api.whatsapp.com/send?phone=50686134428'}><div>Contacto</div></Link>
            {/* <Link href={'/'}><div>Media Kit</div></Link> */}
            <Link href={'https://www.instagram.com/_lit_by_lit_?igsh=MTJtcDBia3dmaWxieg=='}><div>Lit Inc</div></Link>
            <Link href={'https://www.instagram.com/aquelarre.crc/'} target={'_blank'}><div>Instagram</div></Link>
            <Link href={'https://www.youtube.com/channel/UCgF-dbl_-dNJ2nHReBTFryA'}><div>Youtube</div></Link>
            <Link href={'https://www.tiktok.com/@aquelarrecrc?_t=8izH28GJt38&_r=1'}><div>TikTok</div></Link>
            <Link href={'https://open.spotify.com/user/31rog7ld647x3tvujn4bff2ou7hm?si=f0c24c456f0b481e&nd=1&dlsi=1043fa5bd0484ded'}><div>Spotify</div></Link>
        </div>
      </div>
      <div className='flex flex-col items-center md:items-start container mx-auto lg:ml-auto md:w-[60%] lg:w-[50%]'> 
        <div className='flex flex-col items-center md:items-start px-4 md:px-0'>
            <Image 
                className='relative max-h-40 max-w-xs w-full md:hidden lg:block lg:h-12 lg:w-auto'
                src={footerNews}
                alt='Newsletter'
                width={300}
                height={166}
                priority
            />
            <Image
                className='relative max-h-20 max-w-md md:pt-2 w-full'
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
        
        <div className='w-[90vw] md:w-auto md:pb-4 md:pt-2'>
            <Subscribe/>
        </div>
      </div>
      <div>
      <Image
          className='absolute lg:block max-h-28 -translate-x-4 hidden bottom-8'
          src='/img/malasuerte.png'
          alt='o tendras mala suerte'
          width={250}
          height={112}
          priority
      />
      </div>
      <div className='flex-grow w-full h-[20vh] md:hidden'></div>   
      </div>
    </div>
    </div>
  )
}

export default Footer