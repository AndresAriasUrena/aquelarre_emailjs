import React, {useContext, useState, useEffect} from 'react';
import Image from 'next/image';

import Link from 'next/link';

import { getCategories } from '../services';

const navLinks = [
    {
        label: 'Noticias',
        href: '/noticias',
    },
    {
        label: 'Podcast: El oráculo',
        href: '/',
    },
    {
        label: 'Agenda Cultural',
        href: '/',
    },
    {
        label: 'Mercado',
        href: '/',
    },
    {
        label: 'Oportunidades',
        href: '/',
    },
]

const menuBg ='/img/menu-bg.png';

const Header = () => {
    // const navLinkDiv = document.querySelector('.nav-links');

    const [showMenu,setshowMenu] = useState(false);

    function toggleMenu() {
        setshowMenu(!showMenu);
        // navLinkDiv.classList.toggle('right-[0%]')
    }

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
      getCategories()
      .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
      //lg:bg-[#141316]
        <div className='container mx-auto px-10 lg:py-4'>
          <div
            className={`nav-links fixed flex items-left p-20 flex-col justify-evenly bg-left bg-norepeat bg-cover z-40 h-full w-full text-white uppercase ${
              showMenu ? 'right-0 translate-x-0' : 'right-[-100%] translate-x-full'
            } overflow-hidden transition-transform ease-in-out`}
            style={{ backgroundImage: `url(${menuBg})` }}
          >
            <Link onClick={toggleMenu} href='/'>
              <Image unoptimized alt={'aquelarre w-auto logo'} height={125} width={250} className='cursor-pointer' src='/img/logo.png' />
            </Link>
            {navLinks.map((navlink, index) => (
              <Link key={index} className='' href={navlink.href} onClick={toggleMenu}>
                {navlink.label}
              </Link>
            ))}
          </div>
    
          <div className='w-full inline-block py-4'>
            <div className='hidden lg:flex justify-between text-white items-center uppercase'>
              <Link href='/'>
                <Image unoptimized alt={'aquelarre logo'} height={100} width={200} className='cursor-pointer' src='/img/logo.png' />
              </Link>
              {navLinks.map((navlink, index) => (
                <Link key={index} className='' href={navlink.href}>
                  {navlink.label}
                </Link>
              ))}
            </div>
    
            <button onClick={toggleMenu} className='fixed right-5 lg:hidden z-50'>
              <Image unoptimized alt='menu movil' height={85} width={35} className='align-middle' src='/img/icono-menu.png' />
            </button>
          </div>
        </div>
      );

    
//   return (
//     <div className='container mx-auto px-10 mb-8'>
//         {showMenu && (
//             <div style={{ backgroundImage: ` url(${menuBg})`}}
//                  className='nav-links fixed flex items-left p-20 flex-col justify-evenly bg-left bg-norepeat bg-cover z-20 h-full w-full text-white uppercase right-[100%] translate-x-full overflow-hidden'
//             >
//                 <Link onClick={toggleMenu} href='/'>
//                     {/* <span className='cursor-pointer font-bold text-4xl text-white'>
//                         Aquelarre
//                     </span> */}
//                     <Image
//                         unoptimized
//                         alt={'aquelarre logo'}
//                         height={125}
//                         width={250}
//                         className='cursor-pointer'
//                         src='/img/logo.png'
//                     />
//                 </Link>
//                 {navLinks.map((navlink, index) => (
//                     <Link key={index} 
//                         className='' 
//                         href={navlink.href}
//                         onClick={toggleMenu} 
//                         >
//                             {navlink.label} 
//                     </Link>
//                 ))}
//             </div>

//         )}
//         <div className='w-full inline-block py-4'>
//             <div className='hidden lg:flex justify-between text-white items-center uppercase'>
//                 <Link href='/'>
//                     {/* <span className='cursor-pointer font-bold text-4xl text-white'>
//                         Aquelarre
//                     </span> */}
//                     <Image
//                         unoptimized
//                         alt={'aquelarre logo'}
//                         height={100}
//                         width={200}
//                         className='cursor-pointer'
//                         src='/img/logo.png'
//                     />
//                 </Link>
//                 {navLinks.map((navlink, index) => (
//                     <Link key={index} className='' href={navlink.href}>
//                         {navlink.label}
//                     </Link>
//                 ))}
//             </div>
//             {/* <div className='hidden md:float-left md:contents'>
//                 {categories.map((categoria) =>(
//                     <Link key={categoria.slug} href={`/category/${categoria.slug}`}>
//                         <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
//                             {categoria.name}
//                         </span>
//                     </Link>
//                 ))}
//             </div> */}

//             <button onClick={toggleMenu} className='fixed right-5 lg:hidden z-40'>
//                 <Image
//                     unoptimized
//                     alt='menu movil'
//                     height={85}
//                     width={35}
//                     className='align-middle'
//                     src='/img/icono-menu.png'
//                 />
//             </button>
//         </div>
//     </div>
//   );
}

export default Header