import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';

const LatestPodcast = ({podcast}) => {
    const [windowWidth, setwindowWidth] = useState(0);

    useEffect(() =>{
        const handleResize = () =>{
            setwindowWidth(window.innerWidth)
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);
    const tresholdbg = 1024;
    const podcastBg = windowWidth > tresholdbg
        ? '/img/podcast-lg.png'
        : '/img/podcast-sm.png';
    const podcastBg2 = windowWidth > tresholdbg
        ? '/img/podcast-lg2.png'
        : '/img/podcast-sm2.png';
    return (
        <>
        <Link
            className='absolute rounded-full m-auto z-20 w-[40%] h-[30vh] md:h-[40vh] transform top-[25%] left-[50%] -translate-y-[50%] -translate-x-[50%]'
            // href={'https://open.spotify.com/user/31rog7ld647x3tvujn4bff2ou7hm?si=f0c24c456f0b481e&nd=1&dlsi=1043fa5bd0484ded'} 
            href={podcast.spotifyLink} 
            target='_blank' 
            rel='noopener noreferrer'
        ></Link>
        <Image
            alt='el oraculo click aqui'
            src={podcastBg}
            width={1280}
            height={710}
            priority
            className=''
        />
        <div className='relative mb-8 mx-auto z-20 bg-transparent w-[100%] h-auto justify-between px-4 flex gap-2 flex-col items-center'>
            <div className='relative bg-transparent h-auto w-full'>
                <Image
                alt='foto del episodio'
                src={podcast.thumbnail.url}
                width={616}
                height={372}
                priority
                className='top-0 mx-auto object-cover'
                />
                <Link href={podcast.youtubeLink} target='_blank'>
                    <Image
                    alt='boton play'
                    src={'./img/play-btn.png'}
                    width={59}
                    height={60}
                    priority
                    className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]'
                    />
                </Link>
            </div>
            <div className='relative h-auto w-full px-8'>
                <Link href={podcast.youtubeLink}
                    target='_blank'
                >
                    <span className='relative text-white text-xs mt-2 bg-[#4f36cc] mb-4 hover:bg-red-600 grid text-center py-2 rounded-full md:max-w-[280px] mx-auto'
                        >
                        Ver último episodio en YouTube
                    </span>
                </Link>
            </div>
            <div className='relative px-8 md:hidden text-center h-auto w-full'>
                <Image
                    alt='episodios nuevos viernes'
                    src={'/img/podcast-frase.png'}
                    width={300}
                    height={60}
                    priority
                    className='mx-auto'
                />
            </div>
        </div>
        {/* <Image
            alt='background'
            src={podcastBg2}
            width={1280}
            height={420}
            priority
            className=''
        /> */}
        </>
    )
}

export default LatestPodcast

