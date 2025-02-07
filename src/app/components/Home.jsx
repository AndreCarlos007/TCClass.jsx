import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const Home = () => {
  return (
    <div>
    <div
      className="relative bg-cover w-full max-w-full h-screen max-h-[80vh] pb-28 order-1"
      style={{ backgroundImage: "url(/backgroundHom.AVIF)",}}
    >
        <div  className="">
        <div className="flex justify-center items-center gap-40">
          <div>
            <div className=" flex flex-col max-w-[30rem] leading-none text-colorWhite">
              <h1 className="text-[4.5rem] font-black">
                Revise e Corrija <span className="text-colorTree">seus Tccs!</span>
              </h1>
              <span className="text-[1.3rem] font-medium italic">
                Rápido e fácil... em poucos segundos...<p className="text-colorTree">de "graça".</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className=" shadow-2xl px-[2.5rem] py-[2.5rem] rounded-2xl  bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  flex flex-col gap-2 text-center mt-28">
              <div className="">
                <span className="text-[1.2rem] text-colorWhite font-light">
                  Se conecte para usufruir <br /> de nossos recursos!
                </span>
              </div>
              <button className="bg-colorPrimary hover:bg-[#13383a4e] px-4 py-2 rounded-3xl font-semibold text-colorWhite">
                Entrar
              </button>
              <button className="bg-colorTree hover:bg-[#13383a4e] px-5 py-2 rounded-3xl font-semibold text-colorWhite">
                Cadastre-se
              </button>
            </div>
            <div className="flex justify-center text-center text-colorWhite h-full w-full bg-gray-300 shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  p-2 mb-4 rounded-xl font-bold">
              <span className="font-light">
                QUAL O TEMA DO SEU TCC? <br /> <p className="italic">não sabe? posso sugerir vários!</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
             <div className=" bg-red-600 absolute flex w-full py-[20vh] ">
                    <div>
                        <MdOutlineKeyboardDoubleArrowDown />
                    </div>
             </div>
      </div>
  );
};

export default Home;
