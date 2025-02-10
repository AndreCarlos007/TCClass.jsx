"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications, IoClose } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";


const Navbar = () => {
  const [isMenuAberto, setIsMenuAberto] = useState(false);
  const toggleMenu = () => {
    setIsMenuAberto(!isMenuAberto);
  }
  return (
    <div className=" bg-white w-full max-w-[100vw] border-b-2 border-black z-[100] fixed">
        <div className="flex h-4 justify-between items-center mx-4 md:mx-28 my-7">
          <div>
            <Link href='/Home'>
                <Image className="w-20 md:w-40" src='/Logo.AVIF' alt="Logo TCClass" 
                width={150} 
                height={50} 
                loading="lazy"
                />
            </Link>
          </div>

          <div className="gap-1 text-[1rem] text-colorPrimary font-medium hidden lg:flex">
            <Link href='/Home' className="hover:bg-colorSecundary  px-6 py-2 hover:rounded-[1.6rem] transition-all duration-300">Inicio</Link>
            <Link href='/Sobre' className="hover:bg-colorSecundary  px-6 py-2 hover:rounded-[1.6rem] transition-all duration-300">Sobre</Link>
            <Link href='/Tccia' className="hover:bg-colorSecundary  px-6 py-2 hover:rounded-[1.6rem] transition-all duration-300">TCClass-IA</Link>
            <Link href='/Tccprof' className="hover:bg-colorSecundary  px-6 py-2 hover:rounded-[1.6rem] transition-all duration-300">TCClass-Prof</Link>
            <Link href='/Feedbacks' className="hover:bg-colorSecundary  px-6 py-2 hover:rounded-[1.6rem] transition-all duration-300">Feedbacks</Link>
            <Link href='/Contato' className="hover:bg-colorSecundary  px-6 py-2 hover:rounded-[1.6rem] transition-all duration-300">Contato</Link>
          </div>

            {/* NAVBAR MOBILE */}

          <div className={`gap-1 text-[1rem] text-colorWhite  bg-colorPrimary mt-14  py-4 font-medium lg:hidden ${isMenuAberto ? "flex flex-col z-50 fixed top-4 right-0 left-0 items-center" : "hidden"} `}>
            <Link href='/Home' className="hover:bg-gray-400  px-28 py-2 hover:rounded-[1.6rem] transition-all duration-300">Inicio</Link>
            <Link href='/Sobre' className="hover:bg-gray-400  px-28 py-2 hover:rounded-[1.6rem] transition-all duration-300">Sobre</Link>
            <Link href='/Tccia' className="hover:bg-gray-400  px-28 py-2 hover:rounded-[1.6rem] transition-all duration-300">TCClass-IA</Link>
            <Link href='/Tccprof' className="hover:bg-gray-400  px-28 py-2 hover:rounded-[1.6rem] transition-all duration-300">TCClass-Prof</Link>
            <Link href='/Feedbacks' className="hover:bg-gray-400  px-28 py-2 hover:rounded-[1.6rem] transition-all duration-300">Feedbacks</Link>
            <Link href='/Contato' className="hover:bg-gray-400  px-28 py-2 hover:rounded-[1.6rem] transition-all duration-300">Contato</Link>
          </div>

          <div className="flex flex-row gap-7 text-[2rem] items-center text-colorPrimary">
            <Link href='/Usuario'>
                <FaUserAlt loading='lazy' />
            </Link>
            <Link href='/Notificacao'>
                <IoNotifications loading='lazy' />
            </Link>
            {/* navbar mobile */}
            <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {
                isMenuAberto ? (<IoClose /> ) : (<HiMenuAlt4 />)
              }
                
            </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;