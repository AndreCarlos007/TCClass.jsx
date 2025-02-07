import Image from "next/image"


const Sobre = () => {
  return (
    <div className="relative w-full max-w-[100vw]">
        <div className="flex justify-center items-start gap-56">
            <div>
                CARROSSEL DE COISAS 
            </div>

            <div className="flex flex-col max-w-[25rem] leading-[-20rem]">
                <span>
                    SOBRE NÓS
                </span>
                <div>
                    <div className="flex items-center">
                    <h1>O que é a </h1>
                    <Image src='/Logo.AVIF' alt="Logo da seção Sobre" width={200} height={50} />
                    </div>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos.
                    </p>
                    <br />
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos.
                    </p>

                    <div>
                        <button>SAIBA MAIS</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Sobre
