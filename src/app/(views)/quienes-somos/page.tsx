import Cartitas from "@/components/quienes-somos/Lista"
import { Building2, ClipboardCheck, TrendingUp, Wrench } from "lucide-react"

const cartitas = [
    {
        icono: <Wrench className="w-10 h-10 text-[#597FAC] stroke-1"/>,
        span: "Mantenimiento de ascensores"
    },
    {
        icono: <ClipboardCheck className="w-10 h-10 text-[#597FAC] stroke-1"/>,
        span: "Cumplimiento de normativa vigente"
    },
    {
        icono: <Building2 className="w-10 h-10 text-[#597FAC] stroke-1"/>,
        span: "Conservación para consorcios e industrias"
    },
    {
        icono: <TrendingUp className="w-10 h-10 text-[#597FAC] stroke-1"/>,
        span: "Modernización de ascensores"
    },
]

const QuienesSomos = () => {

    return (
        <>
            <div className={`relative pt-14 h-[310vh] md:h-[140vh] lg:h-[170vh] bg-[#1A2F47] `}>

                {/* <div className="absolute top-0 w-full h-full bg-black/40"></div> */}

                <div className={`z-10 w-full lg:absolute h-fit`}>

                    <div className="flex flex-col items-center justify-center mt-10">
                        <h1 className="text-3xl text-[#58A9FF] font-semibold">¿QUIENES SOMOS?</h1>
                        <div className="border-b-2 bg-[#4B86C5] border-blue-400 w-[70px]"></div>
                    </div>

                    <div className=" lg:grid lg:grid-cols-[800px_400px] gap-20 mt-20">
                        <div className="h-fit">
                            <p className="px-3 text-lg text-center text-white md:text-xl md:px-16 lg:text-start">Nos especializamos en el mantenimiento y conservación de ascensores y afines, cumpliendo con todos los requisitos técnicos exigidos por el GCBA. Renovamos equipos para mejorar seguridad, rendimiento y adaptar el ascensor a la normativa actual.</p>
                            <div className="flex flex-col items-center px-24 md:grid md:grid-cols-2 md:justify-items-center">
                                {cartitas.map((cartita, index) => (
                                    <div key={index} className="flex  hover:scale-105 duration-500 px-4 flex-col items-center justify-center w-72 h-32 mt-10 bg-[#193C91] rounded-[35px]">
                                        {cartita.icono}
                                        <span className="text-base text-center text-white">{cartita.span}</span>
                                    </div>

                                ))
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center mt-20 lg:mt-0 lg:items-start">
                                <h1 className="text-xl font-bold text-white">
                                    CÓMO TRABAJAMOS
                                    <div className="border-b-2 border-[#193C91] w-full"></div>
                                </h1>
                                <div className="grid mt-10">
                                    {[
                                        "CONFIANZA",
                                        "PUNTUALIDAD",
                                        "SEGURIDAD",
                                        "RESPONSABILIDAD",
                                        "TRANSPARENCIA",
                                        "ATENCIÓN PERSONALIZADA"
                                    ].map((item, idx, arr) => (
                                        <div key={item}>
                                            <div className="flex flex-row items-center gap-4">
                                                <div className="w-12 h-12 bg-[#193C91] rounded-full hover:scale-125 duration-500"></div>
                                                <span className="font-bold text-white">{item}</span>
                                            </div>
                                            {idx < arr.length - 1 && (
                                                <div className="w-1 h-5 ml-[22px] my-1 bg-white"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <Cartitas />

                </div>
                
            </div>


        </>
        
    )
}

export default QuienesSomos
