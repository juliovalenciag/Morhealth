import React from 'react';
import Typed from 'react-typed';
import Video from '../../assets/videos/videoBg.mp4';

const Hero = () => {
    return (
        <div className='relative bg-cover bg-fixed top-0 left-0 h-screen w-full '>
            <video autoPlay loop muted className='absolute bg-fixed top-0 left-0 w-full h-full object-cover brightness-50 '>
                <source src={Video} type='video/mp4' />
            </video>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center absolute inset-0 z-10'>
                <p className='text-gray-200 font-bold p-2'>
                    Morse
                </p>
                <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-white'>
                    MORHEALTH
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4 text-gray-200'>
                        Mantente en forma cuidando tu
                    </p>
                    <Typed
                        className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-white'
                        strings={['salud', 'alimentación', 'cuerpo']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Más salud, mejor vida</p>
                <button className='bg-[#216B91] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-[#031728]' >Ingresar</button>
            </div>
        </div>
    );
};

export default Hero;
