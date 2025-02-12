import Image from "next/image";
import Link from "next/link";

const Tccia = () => {
  return (
    <div
      className="max-w-[100vw] w-full bg-cover bg-right-top "
      style={{ backgroundImage: "url(/test3.svg)" }}
    >
      <div className="min-h-screen">
        <div className="flex flex-col md:flex-row mx-8 pb-10 max-w-[100vw] pt-16 md:pt-36 justify-center gap-10 lg:gap-24 items-center">
          <div className="max-w-[30rem] pt-20">
            <h1 className="font-bold text-colorPrimary text-[4rem]">
              TCClass IA
            </h1>
            <h2 className="text-colorPrimary">Preocupado com seu TCC?</h2>
            <p className="text-colorPrimary font-light">
              A IA analisa seu TCC, identifica erros, sugere melhorias e compara
              com outros trabalhos. Oferece um feedback detalhado para aprimorar
              a escrita, estrutura e coesão sem reescrevê-lo, garantindo um
              texto mais claro, coerente e bem estruturado.
            </p>

            <div className="pt-5">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 me-1 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95
                </p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  out of
                </p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  5
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="">
              <div className="bg-colorSecundary px-[4rem] py-[6rem] rounded-2xl shadow-2xl flex flex-col justify-center items-center">
                <button className="bg-colorPrimary hover:bg-[#151a2c4e] w-[10rem] px-1 mt-5 py-2 rounded-xl font-semibold text-colorWhite shadow-2xl transition-all duration-300">
                  Faça Upload
                </button>

                <p className="text-colorPrimary text-[1.5rem] font-semibold pt-5">
                  Ou arraste seu arquivo,
                </p>
                <span className="text-colorPrimary font-light text-[0.8rem]">
                  {" "}
                  Voce será redirecionado para outra página...
                </span>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <p className="text-colorPrimary font-light">
                Qual parte lhe dá mais dificuldade em produzir seu TCC?
              </p>
              <div className="flex flex-row gap-3">
                <Link
                  href="https://www.blogdoead.com.br/tag/vida-na-universidade/como-fazer-um-tcc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-colorPrimary w-10 h-10 p-1 flex justify-center items-center rounded-md ">
                    <Image
                      src="/blogDoEad.png"
                      alt="Blog do Ead de dicas para TCC"
                      width={70}
                      height={50}
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.todamateria.com.br/conclusao-tcc/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-colorPrimary w-10 h-10 p-1 flex justify-center items-center rounded-md ">
                    <Image
                      src="/logoTodaMateria.webp"
                      alt="Blog do Ead de dicas para TCC"
                      width={70}
                      height={50}
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.normasabnt.org/trabalho-de-conclusao-de-curso/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-colorPrimary w-10 h-10 p-1 flex justify-center items-center rounded-md ">
                    <Image
                      src="/logoNormasAbnt.png"
                      alt="Blog do Ead de dicas para TCC"
                      width={70}
                      height={50}
                    />
                  </div>
                </Link>

                <Link
                  href="https://www.faesa.br/blog/como-fazer-um-tcc-dicas-e-estrategias-eficazes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-colorPrimary w-10 h-10 p-1 flex justify-center items-center rounded-md ">
                    <Image
                      src="/logoFaesa.png"
                      alt="Blog do Ead de dicas para TCC"
                      width={70}
                      height={50}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tccia;
