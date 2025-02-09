import Image from "next/image";

const Sobre = () => {
  return (
    <div className="relative max-w-[100vw] h-screen bg-colorSecundary ">
      <div className="flex justify-center items-start gap-10 py-10 pt-28 h-screen">
        <div>
          <section className="text-colorPrimary max-w-[35rem]">
            <div className="px-5 ">
              {/* Análise */}
              <div className="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-200 flex-row ">
                <div className="h-20 w-20 mr-5 inline-flex items-center justify-center rounded-full bg-colorTree text-colorPrimary flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-16 h-16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow text-left mt-0">
                  <h2 className="text-colorPrimary text-lg title-font font-medium mb-2">
                    Análise
                  </h2>
                  <p className="leading-relaxed text-colorPrimary">
                  A IA avalia o TCC, identificando erros ortográficos, sugerindo melhorias e comparando com outros trabalhos.
                  </p>
                </div>
              </div>
              {/* Revisao */}
              <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 flex-row">
                <div className="flex-grow text-left mt-0">
                  <h2 className="text-colorPrimary text-lg title-font font-medium mb-2">
                    Revisão
                  </h2>
                  <p className="leading-relaxed text-base">
                  Feedback detalhado com sugestões para aprimorar a escrita, estrutura e coesão do texto, sem reescrevê-lo.
                  </p>
                </div>

                {/* Profissionais Qualificados */}
                <div className="w-20 h-20 ml-3 inline-flex items-center justify-center rounded-full bg-colorTree text-colorPrimary flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="60px"
                    height="60px"
                  >
                    <path
                      d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 
                    54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 
                    13 19.281 19.281 13 27 13 z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center mx-auto flex-row">
                <div className="w-20 h-20 mr-5 inline-flex items-center justify-center rounded-full bg-colorTree text-colorPrimary flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-16 h-16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow text-left mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Profissionais Qualificados
                  </h2>
                  <p className="leading-relaxed text-base">
                  Conexão com especialistas para mentoria e correção humanizada, com negociação direta entre aluno e professor.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col max-w-[40rem]">
          <div>
            <span className="text-colorPrimary text-[1.5rem] font-light">
              SOBRE NÓS
            </span>
            <div className="flex items-center h-16 gap-5">
              <h1 className="text-[3rem] text-colorPrimary font-semibold">
                O que é a{" "}
              </h1>
              <Image
                src="/Logo.AVIF"
                alt="Logo da seção Sobre"
                className=""
                width={350}
                height={50}
              />
              <h1 className="text-[3rem] text-colorPrimary font-semibold">?</h1>
            </div>

            <div className="text-[1rem] text-colorPrimary pt-4">
              <p>
                Um projeto que tem como objetivo criar uma plataforma que
                auxilia estudantes na revisão e correção de seus TCCs,
                combinando inteligência artificial e suporte de professores
                especializados. A IA será treinada para analisar textos
                acadêmicos, identificar erros ortográficos, comparar com outros
                trabalhos e sugerir melhorias, sem reescrever o conteúdo, mas
                oferecendo uma mentoria tecnológica para aperfeiçoamento do
                material.
              </p>
              <br />
              <p>
                Além disso, a plataforma funcionará como um espaço para
                freelancers acadêmicos, permitindo que alunos encontrem
                professores para correção humanizada, mentoria e suporte na
                estruturação do TCC. O estudante define sua necessidade e
                orçamento, e os profissionais podem aceitar ou negociar uma
                contraproposta até chegarem a um acordo justo.
              </p>
            </div>

            <div className="flex justify-start items-start pt-10">
              <button className=" bg-colorPrimary hover:bg-[#151a2c4e] shadow-2xl px-40 py-2 rounded-lg text-colorWhite font-semibold transition-all duration-300">
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
