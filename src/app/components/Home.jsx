import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div
        className="relative bg-top bg-cover w-full max-w-[100vw] h-screen max-h-[90vh]"
        style={{ backgroundImage: "url(/BackgroundHom.AVIF)" }}
      >
        <div className="">
          <div className="flex flex-col md:flex-row justify-center items-center sm:gap-5 md:gap-0 pt-20 lg:gap-10 md:pt-12">
            <div className="sm:mt-8">
              <div className=" flex flex-col max-w-[17.8rem] md:max-w-[30rem] text-colorWhite">
                <h1 className=" text-[2rem] md:text-[4rem] font-black leading-[2rem] md:leading-[4rem]">
                  Revise e Corrija{" "}
                  <span className="text-colorTree">seu Tcc!</span>
                </h1>
                <span className="text-[1.3rem] font-light italic">
                  Rápido e fácil... em poucos segundos...
                  <p className="text-colorTree">de "graça".</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className=" shadow-2xl px-[1rem] py-[0.5rem] md:px-[2.5rem] md:py-[2.5rem] rounded-2xl  bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  flex flex-col gap-2 text-center mt-1 md:mt-28">
                <div className="">
                  <span className="text-[1.2rem] text-colorWhite font-light">
                    Se conecte para usufruir <br /> de nossos recursos!
                  </span>
                </div>
                <button className="bg-colorPrimary hover:bg-[#151a2c4e] px-4 py-2 rounded-3xl font-semibold text-colorWhite transition-all duration-300">
                  Entrar
                </button>
                <button className="bg-colorTree hover:bg-[#151a2c4e] px-5 py-2 rounded-3xl font-semibold text-colorWhite transition-all duration-300">
                  Cadastre-se
                </button>
              </div>
              <div className="flex justify-center text-center text-colorWhite h-full w-full bg-gray-300 shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  p-2 mb-4 rounded-xl font-bold">
                <span className="font-light">
                  Qual o tema do seu tcc? <br />{" "}
                  <p className="italic">Não sabe? Posso sugerir vários!</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-colorSecundary">
        <FaArrowCircleDown className="text-colorPrimary cursor-pointer relative bottom-7 left-[40vw] md:left-[47.5vw] text-[4rem] border-[6px] border-colorSecundary bg-colorSecundary  rounded-full z-20 " />
      </div>
    </div>
  );
};

export default Home;
