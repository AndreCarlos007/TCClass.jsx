import Image from "next/image";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" bg-bgWhite w-full max-w-[100vw] border-b-2 border-black z-10 ">
        <div className="flex h-4 justify-between items-center mx-28 my-7">
          <div>
            <Link href='/Home'>
                <Image src='/Logo.AVIF' alt="Logo TCClass" 
                width={150} 
                height={50} 
                loading="lazy"
                />
            </Link>
          </div>

          <div className="gap-5 text-[1rem] text-colorPrimary font-medium ">

            <Link href='/Home' className="hover:bg-colorSecundary  px-3 py-2 hover:rounded-[1.6rem]">Inicio</Link>
            <Link href='/Sobre' className="hover:bg-colorSecundary  px-3 py-2 hover:rounded-[1.6rem]">Sobre</Link>
            <Link href='/Tccia' className="hover:bg-colorSecundary  px-3 py-2 hover:rounded-[1.6rem]">TCClass-IA</Link>
            <Link href='/Tccprof' className="hover:bg-colorSecundary  px-3 py-2 hover:rounded-[1.6rem]">TCClass-Prof</Link>
            <Link href='/Feedbacks' className="hover:bg-colorSecundary  px-3 py-2 hover:rounded-[1.6rem]">Feedbacks</Link>
            <Link href='/Contato' className="hover:bg-colorSecundary  px-3 py-2 hover:rounded-[1.6rem]">Contato</Link>
          </div>
          <div className="flex flex-row gap-7 text-[2rem] text-colorPrimary">
            <Link href='/Usuario'>
                <FaUserAlt loading='lazy' />
            </Link>
            <Link href='/Notificacao'>
                <IoNotifications loading='lazy' />
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
