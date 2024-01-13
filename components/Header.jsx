import React, {useContext, useState, useEffect} from 'react';
import Image from 'next/image';

import Link from 'next/link';

import { getCategories } from '../services';

const navLinks = [
    {
        label: 'Noticias',
        href: '/noticias',
    },
    // {
    //     label: 'Podcast: El oráculo',
    //     href: '/',
    // },
    // {
    //     label: 'Agenda Cultural',
    //     href: '/',
    // },
    // {
    //     label: 'Mercado',
    //     href: '/',
    // },
    // {
    //     label: 'Oportunidades',
    //     href: '/',
    // },
]

const menuBg ='/img/menu-bg.png';
const proximamente = '/img/Proximamente.png'
const noDisponible = '/img/NoDisponible.png'

const Header = () => {
    // const navLinkDiv = document.querySelector('.nav-links');
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
              <Link key={index} className='' href={navlink.href} onClick={toggleMenu} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                 <span className='relative font-semibold'>
                      {navlink.label}
                      {hoveredIndex === index && (
                          <div className='absolute left-[-20px] top-1/2 transform -translate-y-1/2'>
                              {/* Aquí debes agregar tu SVG */}
                              <svg className='svg-hover' width="20" height="20" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M62.7009 117.1C62.1009 116.6 61.7009 116 61.2009 115.8C60.0009 115.2 58.8009 114.7 57.6009 114.1C57.4009 114 57.3009 113.8 57.1009 113.6C56.6009 113.1 56.1009 112.5 55.5009 112.2C54.6009 111.8 53.6009 111.6 52.6009 111.3C52.3009 111.2 52.0009 111.2 51.9009 111C51.3009 110.4 50.7009 109.8 50.1009 109.2C49.6009 108.8 49.2009 108.3 48.7009 107.8C48.2009 107.4 47.9009 106.5 46.9009 106.7C46.7009 106.8 46.3009 106.5 46.2009 106.3C45.2009 104.6 43.4009 104.5 41.7009 104.4C40.9009 104.3 40.0009 104.2 39.2009 104C39.0009 104 38.8009 104 38.7009 103.8C37.8009 102.5 36.3009 102.6 35.1009 102.1C33.7009 101.5 32.5009 101.7 31.3009 102.3C30.3009 102.8 29.5009 102.6 28.5009 102.3C27.5009 102 26.2009 101.1 25.3009 102.5C23.1009 101.8 20.9009 101.2 19.0009 102.9C18.6009 102.1 18.1009 101.4 17.7009 100.6C17.3009 99.7999 18.0009 98.6999 19.2009 97.9999C19.7009 97.6999 20.2009 97.5999 20.3009 96.6999C20.4009 95.8999 22.2009 95.5999 23.1009 95.9999C23.5009 96.1999 23.8009 96.2999 24.2009 96.2999C26.1009 96.3999 28.0009 95.9999 29.8009 95.5999C29.9009 95.5999 30.1009 95.5999 30.1009 95.4999C31.5009 93.9999 33.3009 94.4999 35.0009 94.7999C35.3009 94.8999 35.8009 94.5999 36.1009 94.4999C36.9009 94.2999 37.6009 94.1999 38.4009 94.0999C39.3009 93.8999 40.3009 93.7999 41.1009 93.4999C41.9009 93.1999 43.0009 92.8999 43.0009 91.6999C43.0009 91.5999 43.2009 91.2999 43.4009 91.2999C44.7009 91.1999 46.0009 91.0999 47.3009 90.9999C47.8009 90.8999 48.3009 90.4999 48.8009 90.3999C49.6009 90.1999 50.4009 89.9999 51.2009 89.9999C52.6009 89.8999 52.8009 88.2999 53.9009 87.6999C55.7009 86.7999 57.5009 85.7999 59.2009 84.7999C59.9009 84.3999 60.6009 84.1999 60.8009 83.1999C60.9009 82.6999 61.8009 82.0999 62.3009 81.9999C63.3009 81.7999 64.2009 81.8999 64.7009 80.6999C65.0009 80.0999 66.1009 79.8999 66.8009 79.3999C67.5009 78.7999 68.2009 78.1999 68.7009 77.3999C69.5009 76.2999 70.1009 75.0999 70.8009 73.8999C70.9009 73.6999 70.9009 73.4999 71.0009 73.0999C71.8009 72.9999 72.3009 72.8999 72.5009 71.7999C72.6009 71.0999 73.7009 70.5999 74.3009 69.8999C74.6009 69.4999 74.6009 68.9999 74.8009 68.4999C75.0009 67.9999 75.1009 67.5999 75.3009 67.0999C75.5009 66.4999 75.7009 65.8999 75.9009 65.3999C76.0009 65.1999 76.3009 64.9999 76.5009 64.7999C77.2009 64.2999 77.7009 63.9999 78.1009 63.0999C78.8009 61.5999 79.0009 60.0999 79.3009 58.5999C79.3009 58.4999 79.4009 58.3999 79.5009 58.2999C80.8009 57.0999 81.4009 55.4999 82.3009 53.9999V53.8999C83.5009 53.7999 84.3009 52.6999 85.3009 52.3999C86.1009 52.1999 86.5009 51.9999 86.7009 51.1999C87.0009 50.0999 87.2009 48.8999 88.2009 47.9999C88.3009 47.8999 88.4009 47.6999 88.4009 47.5999C88.2009 46.3999 88.0009 45.2999 87.8009 44.1999C88.0009 41.4999 89.1009 38.9999 88.7009 36.4999C89.3009 35.3999 89.7009 34.4999 90.2009 33.6999C90.6009 32.9999 91.2009 32.4999 91.6009 31.7999C91.8009 31.4999 91.9009 30.9999 91.8009 30.6999C90.8009 28.2999 90.4009 25.8999 91.4009 23.2999C91.7009 22.3999 91.7009 21.3999 92.8009 20.8999C93.4009 20.5999 93.5009 17.1999 93.1009 16.3999C92.4009 15.0999 92.6009 13.5999 93.7009 12.5999C94.1009 12.1999 94.7009 11.8999 95.0009 11.3999C95.3009 10.8999 95.5009 10.2999 95.4009 9.79989C95.4009 8.99989 94.8009 8.19989 95.2009 7.29989C95.6009 6.29989 95.9009 5.19989 96.3009 4.09988C96.4009 3.89988 96.8009 3.79989 97.1009 3.69989C98.5009 3.59989 99.6009 4.99989 99.4009 6.29989C99.1009 8.39989 99.1009 8.39989 100.901 9.49989C101.101 9.59989 101.301 10.1999 101.201 10.4999C100.601 12.4999 100.801 14.3999 101.401 16.2999C101.901 17.6999 102.101 19.0999 102.501 20.5999C102.101 21.3999 101.101 21.9999 101.701 23.1999C101.801 23.3999 101.401 23.8999 101.301 24.1999C101.101 24.6999 100.801 25.2999 100.801 25.7999C100.801 27.0999 100.901 28.3999 101.101 29.6999C101.101 29.9999 101.301 30.3999 101.601 30.5999C102.701 31.3999 102.501 32.3999 102.201 33.4999C102.101 33.7999 102.301 34.1999 102.301 34.5999C102.501 35.7999 103.201 36.9999 102.401 38.2999C102.101 38.6999 102.301 39.4999 102.401 39.9999C102.501 40.9999 102.901 41.8999 102.801 42.8999C102.801 43.3999 102.901 43.5999 103.101 43.8999C104.301 45.2999 104.201 46.8999 103.901 48.5999C103.801 49.2999 104.101 50.0999 104.301 50.8999C104.501 51.5999 104.301 52.3999 105.501 52.3999C105.801 52.3999 106.101 53.1999 106.301 53.6999C106.601 54.5999 107.401 55.4999 106.901 56.3999L109.401 59.9999L109.801 59.5999C109.801 60.5999 109.701 61.5999 109.801 62.5999C110.001 63.4999 110.401 64.3999 110.801 65.4999C110.301 66.2999 110.301 67.1999 111.101 68.3999C112.001 69.6999 112.301 71.2999 113.201 72.5999C113.801 73.3999 113.501 74.8999 115.001 74.9999C115.401 74.9999 115.901 75.1999 116.501 75.2999C116.901 76.2999 117.301 77.3999 117.801 78.5999C117.901 78.7999 118.201 78.8999 118.401 79.0999C119.901 80.1999 121.401 81.2999 122.901 82.3999C123.001 82.3999 123.001 82.4999 123.001 82.5999C123.201 83.3999 123.501 84.2999 123.801 85.3999C124.701 85.3999 125.601 85.2999 126.501 85.3999C127.401 85.4999 128.201 85.7999 128.901 86.0999C130.201 87.1999 131.401 88.2999 132.801 89.2999C133.601 89.7999 134.601 89.8999 135.401 90.3999C136.101 90.7999 136.601 91.4999 137.301 92.1999C138.701 91.7999 140.201 91.9999 141.501 92.9999C141.901 93.2999 142.701 93.3999 143.201 93.1999C144.601 92.4999 145.701 93.0999 146.801 93.5999C148.401 94.2999 149.901 94.9999 151.701 94.5999C152.001 94.4999 152.601 94.7999 152.701 94.9999C153.701 96.4999 155.101 95.5999 156.301 95.5999C156.501 95.5999 156.801 95.4999 157.001 95.3999C158.401 94.4999 159.701 95.1999 161.001 95.5999C161.701 95.7999 162.401 96.0999 163.101 95.9999C165.101 95.6999 166.301 97.0999 167.701 97.9999C168.201 98.2999 168.201 99.4999 168.301 100.2C168.301 100.4 168.201 100.6 168.201 100.8C168.401 102.1 168.001 102.5 166.701 102.8C164.901 103.2 163.701 102 162.401 101.6C160.801 102.1 159.401 102.6 158.001 103.1C156.901 103.5 155.601 103.7 154.601 104.4C153.501 105.2 152.401 104.8 151.301 105.1C150.201 105.4 148.901 104.9 148.301 106.3C145.301 105.4 142.701 106.1 140.401 108C140.001 108.3 139.601 108.5 139.201 108.7C137.701 109.4 136.301 110.5 134.801 110.8C133.601 111 132.701 111.6 131.701 112.2C130.801 112.7 129.501 112.6 128.601 113.2C127.501 113.9 126.001 113.9 125.301 115.5C124.901 116.5 123.601 117.2 122.701 118C122.601 118.1 122.201 117.8 122.201 117.8C121.501 118.4 120.901 118.9 120.301 119.5C120.101 119.7 120.001 120 119.901 120.2C119.801 121.5 118.701 121.6 117.801 122.1C117.401 122.3 117.001 122.7 116.801 123C116.301 123.9 115.901 124.8 115.401 125.8C113.501 125.5 113.201 127.4 112.101 128.2C111.401 128.7 111.101 129.4 111.601 130.4C112.101 131.7 111.101 132.4 110.201 132.9C109.301 133.3 108.801 133.7 109.101 134.9C109.301 135.6 108.901 136.5 108.601 137.1C107.701 138.8 106.701 140.4 105.601 142.2C106.001 142.7 106.201 143.6 105.401 144.4C105.201 144.6 105.201 144.9 105.201 145.2C105.201 146.3 105.301 147.4 104.201 148.2C104.001 148.3 104.201 148.9 104.101 149.2C103.901 149.9 103.501 150.5 103.301 151.2C103.001 152.1 102.701 153 102.701 153.9C102.601 156.6 101.201 158.5 99.4009 160.3C99.2009 160.5 98.9009 160.9 98.9009 161.2C98.9009 162.1 98.9009 163 99.1009 163.9C99.5009 165.4 100.001 166.9 100.501 168.6L98.6009 171.5C100.501 172.7 99.7009 174.2 99.0009 175.8C98.7009 176.4 98.7009 177.2 98.6009 178.1C97.9009 178.3 97.1009 178.8 96.9009 180C96.8009 180.3 96.4009 180.5 96.3009 180.9C96.2009 181.4 96.0009 182.1 96.2009 182.5C96.8009 183.8 96.7009 185 95.7009 186.1C95.4009 186.4 95.3009 186.8 95.1009 187.2C94.5009 187.4 93.8009 187.7 93.7009 186.4C93.7009 186.1 92.7009 185.9 92.0009 185.6C92.1009 185.3 92.3009 185 92.4009 184.7C92.5009 184 92.8009 183.4 92.1009 182.6C91.6009 182.1 91.8009 181.1 91.6009 180.3C91.4009 179.5 91.1009 178.7 90.7009 177.6V173.8C89.5009 173.5 89.0009 172.8 89.1009 171.5C89.2009 170.4 89.5009 169.1 89.0009 168.4C88.2009 167.3 88.5009 166.3 88.5009 165.2C88.5009 164.3 88.6009 163.5 88.7009 162.6C88.9009 161.8 89.3009 161 89.5009 160.2C89.5009 160 89.1009 159.5 88.8009 159.5C87.2009 159.3 86.5009 158.3 86.0009 157C85.8009 156.5 85.4009 156.1 85.1009 155.7C83.8009 154.6 83.9009 153.1 83.9009 151.6C83.9009 151.3 83.8009 151 83.7009 150.7C83.1009 149.4 82.5009 148.1 81.9009 146.8C81.7009 146.3 81.8009 145.7 81.8009 145.2C81.9009 142.5 81.5009 140.1 79.2009 138.4C79.0009 138.2 78.9009 137.8 78.7009 137.5C78.6009 137.3 78.5009 136.9 78.3009 136.8C76.7009 136.3 76.7009 135 76.4009 133.8C76.3009 133.3 76.1009 132.7 75.9009 132.2C75.6009 131.3 75.4009 130.3 75.0009 129.5C74.6009 128.9 73.9009 128.4 73.3009 127.9C71.6009 126.6 69.7009 125.4 69.9009 122.8C69.9009 122.2 70.0009 121.5 69.7009 121.1C69.3009 120.5 68.7009 120 68.1009 119.5C67.5009 119 66.6009 118.6 66.1009 118C65.1009 116.9 64.6009 116.7 62.7009 117.1Z" fill="#EA2033"/>
                              </svg>
                          </div>
                      )}
                  </span>
                </Link>
            ))}
            <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                    Podcast: El oráculo
                    <div className='absolute top-1/2'>
                    <Image unoptimized alt={'proximamente'} height={125} width={150} className='proximamente cursor-pointer' src={proximamente} />
                    </div>
                  </span>
                </Link>
                <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                  Agenda Cultural
                    <div className='absolute top-1/2'>
                    <Image unoptimized alt={'noDisponible'} height={125} width={150} className='noDisponible cursor-pointer' src={noDisponible} />
                    </div>
                  </span>
                </Link>
               <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                    Mercado
                    <div className='absolute top-1/2'>
                    <Image unoptimized alt={'noDisponible'} height={125} width={150} className='noDisponible cursor-pointer' src={noDisponible} />
                    </div>
                  </span>
                </Link>
               <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                    Oportunidades
                    <div className='absolute top-1/2'>
                    <Image unoptimized alt={'noDisponible'} height={125} width={150} className='noDisponible cursor-pointer' src={noDisponible} />
                    </div>
                  </span>
                </Link>
          </div>
    
          <div className='w-full inline-block lg:py-4'>
            <div className='hidden lg:flex justify-between text-white items-center uppercase'>
              <Link href='/'>
                <Image unoptimized alt={'aquelarre logo'} height={70} width={160} className='cursor-pointer' src='/img/logo.png' />
              </Link>
              {navLinks.map((navlink, index) => (
                <Link
                  key={index}
                  className=''
                  href={navlink.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className='relative font-semibold'>
                      {navlink.label}
                      {hoveredIndex === index && (
                          <div className='absolute left-[-20px] top-1/2 transform -translate-y-1/2'>
      
                              <svg className='svg-hover' width="20" height="20" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M62.7009 117.1C62.1009 116.6 61.7009 116 61.2009 115.8C60.0009 115.2 58.8009 114.7 57.6009 114.1C57.4009 114 57.3009 113.8 57.1009 113.6C56.6009 113.1 56.1009 112.5 55.5009 112.2C54.6009 111.8 53.6009 111.6 52.6009 111.3C52.3009 111.2 52.0009 111.2 51.9009 111C51.3009 110.4 50.7009 109.8 50.1009 109.2C49.6009 108.8 49.2009 108.3 48.7009 107.8C48.2009 107.4 47.9009 106.5 46.9009 106.7C46.7009 106.8 46.3009 106.5 46.2009 106.3C45.2009 104.6 43.4009 104.5 41.7009 104.4C40.9009 104.3 40.0009 104.2 39.2009 104C39.0009 104 38.8009 104 38.7009 103.8C37.8009 102.5 36.3009 102.6 35.1009 102.1C33.7009 101.5 32.5009 101.7 31.3009 102.3C30.3009 102.8 29.5009 102.6 28.5009 102.3C27.5009 102 26.2009 101.1 25.3009 102.5C23.1009 101.8 20.9009 101.2 19.0009 102.9C18.6009 102.1 18.1009 101.4 17.7009 100.6C17.3009 99.7999 18.0009 98.6999 19.2009 97.9999C19.7009 97.6999 20.2009 97.5999 20.3009 96.6999C20.4009 95.8999 22.2009 95.5999 23.1009 95.9999C23.5009 96.1999 23.8009 96.2999 24.2009 96.2999C26.1009 96.3999 28.0009 95.9999 29.8009 95.5999C29.9009 95.5999 30.1009 95.5999 30.1009 95.4999C31.5009 93.9999 33.3009 94.4999 35.0009 94.7999C35.3009 94.8999 35.8009 94.5999 36.1009 94.4999C36.9009 94.2999 37.6009 94.1999 38.4009 94.0999C39.3009 93.8999 40.3009 93.7999 41.1009 93.4999C41.9009 93.1999 43.0009 92.8999 43.0009 91.6999C43.0009 91.5999 43.2009 91.2999 43.4009 91.2999C44.7009 91.1999 46.0009 91.0999 47.3009 90.9999C47.8009 90.8999 48.3009 90.4999 48.8009 90.3999C49.6009 90.1999 50.4009 89.9999 51.2009 89.9999C52.6009 89.8999 52.8009 88.2999 53.9009 87.6999C55.7009 86.7999 57.5009 85.7999 59.2009 84.7999C59.9009 84.3999 60.6009 84.1999 60.8009 83.1999C60.9009 82.6999 61.8009 82.0999 62.3009 81.9999C63.3009 81.7999 64.2009 81.8999 64.7009 80.6999C65.0009 80.0999 66.1009 79.8999 66.8009 79.3999C67.5009 78.7999 68.2009 78.1999 68.7009 77.3999C69.5009 76.2999 70.1009 75.0999 70.8009 73.8999C70.9009 73.6999 70.9009 73.4999 71.0009 73.0999C71.8009 72.9999 72.3009 72.8999 72.5009 71.7999C72.6009 71.0999 73.7009 70.5999 74.3009 69.8999C74.6009 69.4999 74.6009 68.9999 74.8009 68.4999C75.0009 67.9999 75.1009 67.5999 75.3009 67.0999C75.5009 66.4999 75.7009 65.8999 75.9009 65.3999C76.0009 65.1999 76.3009 64.9999 76.5009 64.7999C77.2009 64.2999 77.7009 63.9999 78.1009 63.0999C78.8009 61.5999 79.0009 60.0999 79.3009 58.5999C79.3009 58.4999 79.4009 58.3999 79.5009 58.2999C80.8009 57.0999 81.4009 55.4999 82.3009 53.9999V53.8999C83.5009 53.7999 84.3009 52.6999 85.3009 52.3999C86.1009 52.1999 86.5009 51.9999 86.7009 51.1999C87.0009 50.0999 87.2009 48.8999 88.2009 47.9999C88.3009 47.8999 88.4009 47.6999 88.4009 47.5999C88.2009 46.3999 88.0009 45.2999 87.8009 44.1999C88.0009 41.4999 89.1009 38.9999 88.7009 36.4999C89.3009 35.3999 89.7009 34.4999 90.2009 33.6999C90.6009 32.9999 91.2009 32.4999 91.6009 31.7999C91.8009 31.4999 91.9009 30.9999 91.8009 30.6999C90.8009 28.2999 90.4009 25.8999 91.4009 23.2999C91.7009 22.3999 91.7009 21.3999 92.8009 20.8999C93.4009 20.5999 93.5009 17.1999 93.1009 16.3999C92.4009 15.0999 92.6009 13.5999 93.7009 12.5999C94.1009 12.1999 94.7009 11.8999 95.0009 11.3999C95.3009 10.8999 95.5009 10.2999 95.4009 9.79989C95.4009 8.99989 94.8009 8.19989 95.2009 7.29989C95.6009 6.29989 95.9009 5.19989 96.3009 4.09988C96.4009 3.89988 96.8009 3.79989 97.1009 3.69989C98.5009 3.59989 99.6009 4.99989 99.4009 6.29989C99.1009 8.39989 99.1009 8.39989 100.901 9.49989C101.101 9.59989 101.301 10.1999 101.201 10.4999C100.601 12.4999 100.801 14.3999 101.401 16.2999C101.901 17.6999 102.101 19.0999 102.501 20.5999C102.101 21.3999 101.101 21.9999 101.701 23.1999C101.801 23.3999 101.401 23.8999 101.301 24.1999C101.101 24.6999 100.801 25.2999 100.801 25.7999C100.801 27.0999 100.901 28.3999 101.101 29.6999C101.101 29.9999 101.301 30.3999 101.601 30.5999C102.701 31.3999 102.501 32.3999 102.201 33.4999C102.101 33.7999 102.301 34.1999 102.301 34.5999C102.501 35.7999 103.201 36.9999 102.401 38.2999C102.101 38.6999 102.301 39.4999 102.401 39.9999C102.501 40.9999 102.901 41.8999 102.801 42.8999C102.801 43.3999 102.901 43.5999 103.101 43.8999C104.301 45.2999 104.201 46.8999 103.901 48.5999C103.801 49.2999 104.101 50.0999 104.301 50.8999C104.501 51.5999 104.301 52.3999 105.501 52.3999C105.801 52.3999 106.101 53.1999 106.301 53.6999C106.601 54.5999 107.401 55.4999 106.901 56.3999L109.401 59.9999L109.801 59.5999C109.801 60.5999 109.701 61.5999 109.801 62.5999C110.001 63.4999 110.401 64.3999 110.801 65.4999C110.301 66.2999 110.301 67.1999 111.101 68.3999C112.001 69.6999 112.301 71.2999 113.201 72.5999C113.801 73.3999 113.501 74.8999 115.001 74.9999C115.401 74.9999 115.901 75.1999 116.501 75.2999C116.901 76.2999 117.301 77.3999 117.801 78.5999C117.901 78.7999 118.201 78.8999 118.401 79.0999C119.901 80.1999 121.401 81.2999 122.901 82.3999C123.001 82.3999 123.001 82.4999 123.001 82.5999C123.201 83.3999 123.501 84.2999 123.801 85.3999C124.701 85.3999 125.601 85.2999 126.501 85.3999C127.401 85.4999 128.201 85.7999 128.901 86.0999C130.201 87.1999 131.401 88.2999 132.801 89.2999C133.601 89.7999 134.601 89.8999 135.401 90.3999C136.101 90.7999 136.601 91.4999 137.301 92.1999C138.701 91.7999 140.201 91.9999 141.501 92.9999C141.901 93.2999 142.701 93.3999 143.201 93.1999C144.601 92.4999 145.701 93.0999 146.801 93.5999C148.401 94.2999 149.901 94.9999 151.701 94.5999C152.001 94.4999 152.601 94.7999 152.701 94.9999C153.701 96.4999 155.101 95.5999 156.301 95.5999C156.501 95.5999 156.801 95.4999 157.001 95.3999C158.401 94.4999 159.701 95.1999 161.001 95.5999C161.701 95.7999 162.401 96.0999 163.101 95.9999C165.101 95.6999 166.301 97.0999 167.701 97.9999C168.201 98.2999 168.201 99.4999 168.301 100.2C168.301 100.4 168.201 100.6 168.201 100.8C168.401 102.1 168.001 102.5 166.701 102.8C164.901 103.2 163.701 102 162.401 101.6C160.801 102.1 159.401 102.6 158.001 103.1C156.901 103.5 155.601 103.7 154.601 104.4C153.501 105.2 152.401 104.8 151.301 105.1C150.201 105.4 148.901 104.9 148.301 106.3C145.301 105.4 142.701 106.1 140.401 108C140.001 108.3 139.601 108.5 139.201 108.7C137.701 109.4 136.301 110.5 134.801 110.8C133.601 111 132.701 111.6 131.701 112.2C130.801 112.7 129.501 112.6 128.601 113.2C127.501 113.9 126.001 113.9 125.301 115.5C124.901 116.5 123.601 117.2 122.701 118C122.601 118.1 122.201 117.8 122.201 117.8C121.501 118.4 120.901 118.9 120.301 119.5C120.101 119.7 120.001 120 119.901 120.2C119.801 121.5 118.701 121.6 117.801 122.1C117.401 122.3 117.001 122.7 116.801 123C116.301 123.9 115.901 124.8 115.401 125.8C113.501 125.5 113.201 127.4 112.101 128.2C111.401 128.7 111.101 129.4 111.601 130.4C112.101 131.7 111.101 132.4 110.201 132.9C109.301 133.3 108.801 133.7 109.101 134.9C109.301 135.6 108.901 136.5 108.601 137.1C107.701 138.8 106.701 140.4 105.601 142.2C106.001 142.7 106.201 143.6 105.401 144.4C105.201 144.6 105.201 144.9 105.201 145.2C105.201 146.3 105.301 147.4 104.201 148.2C104.001 148.3 104.201 148.9 104.101 149.2C103.901 149.9 103.501 150.5 103.301 151.2C103.001 152.1 102.701 153 102.701 153.9C102.601 156.6 101.201 158.5 99.4009 160.3C99.2009 160.5 98.9009 160.9 98.9009 161.2C98.9009 162.1 98.9009 163 99.1009 163.9C99.5009 165.4 100.001 166.9 100.501 168.6L98.6009 171.5C100.501 172.7 99.7009 174.2 99.0009 175.8C98.7009 176.4 98.7009 177.2 98.6009 178.1C97.9009 178.3 97.1009 178.8 96.9009 180C96.8009 180.3 96.4009 180.5 96.3009 180.9C96.2009 181.4 96.0009 182.1 96.2009 182.5C96.8009 183.8 96.7009 185 95.7009 186.1C95.4009 186.4 95.3009 186.8 95.1009 187.2C94.5009 187.4 93.8009 187.7 93.7009 186.4C93.7009 186.1 92.7009 185.9 92.0009 185.6C92.1009 185.3 92.3009 185 92.4009 184.7C92.5009 184 92.8009 183.4 92.1009 182.6C91.6009 182.1 91.8009 181.1 91.6009 180.3C91.4009 179.5 91.1009 178.7 90.7009 177.6V173.8C89.5009 173.5 89.0009 172.8 89.1009 171.5C89.2009 170.4 89.5009 169.1 89.0009 168.4C88.2009 167.3 88.5009 166.3 88.5009 165.2C88.5009 164.3 88.6009 163.5 88.7009 162.6C88.9009 161.8 89.3009 161 89.5009 160.2C89.5009 160 89.1009 159.5 88.8009 159.5C87.2009 159.3 86.5009 158.3 86.0009 157C85.8009 156.5 85.4009 156.1 85.1009 155.7C83.8009 154.6 83.9009 153.1 83.9009 151.6C83.9009 151.3 83.8009 151 83.7009 150.7C83.1009 149.4 82.5009 148.1 81.9009 146.8C81.7009 146.3 81.8009 145.7 81.8009 145.2C81.9009 142.5 81.5009 140.1 79.2009 138.4C79.0009 138.2 78.9009 137.8 78.7009 137.5C78.6009 137.3 78.5009 136.9 78.3009 136.8C76.7009 136.3 76.7009 135 76.4009 133.8C76.3009 133.3 76.1009 132.7 75.9009 132.2C75.6009 131.3 75.4009 130.3 75.0009 129.5C74.6009 128.9 73.9009 128.4 73.3009 127.9C71.6009 126.6 69.7009 125.4 69.9009 122.8C69.9009 122.2 70.0009 121.5 69.7009 121.1C69.3009 120.5 68.7009 120 68.1009 119.5C67.5009 119 66.6009 118.6 66.1009 118C65.1009 116.9 64.6009 116.7 62.7009 117.1Z" fill="#EA2033"/>
                              </svg>
                          </div>
                      )}
                  </span>
                </Link>
              ))}
               <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                    Podcast: El oráculo
                    <div className='absolute -top-2'>
                    <Image unoptimized alt={'proximamente'} height={200} width={300} className='proximamente cursor-pointer' src={proximamente} />
                    </div>
                  </span>
                </Link>
               <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                  Agenda Cultural
                    <div className='absolute top-0'>
                    <Image unoptimized alt={'noDisponible'} height={125} width={200} className='noDisponible cursor-pointer' src={noDisponible} />
                    </div>
                  </span>
                </Link>
               <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                    Mercado
                    <div className='absolute top-0'>
                    <Image unoptimized alt={'noDisponible'} height={125} width={200} className='noDisponible cursor-pointer' src={noDisponible} />
                    </div>
                  </span>
                </Link>
               <Link
                  className=''
                  href={'/'}
                >
                  <span className='relative font-semibold'>
                    Oportunidades
                    <div className='absolute top-0'>
                    <Image unoptimized alt={'noDisponible'} height={125} width={200} className='noDisponible cursor-pointer' src={noDisponible} />
                    </div>
                  </span>
                </Link>
            </div>
    
            <button onClick={toggleMenu} className='fixed right-5 lg:hidden z-50'>
              <Image unoptimized alt='menu movil' height={85} width={35} className='align-middle' src='/img/icono-menu.png' />
            </button>
          </div>
        </div>
      );

}

export default Header