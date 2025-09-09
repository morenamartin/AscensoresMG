import Image from "next/image"
import imagenFondo from "../../../assets/imagenQuienesSOmos.png"
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
            <div className="relative pt-14">
                <Image src={imagenFondo} className="w-full" alt="fondo"/>

                <div className="absolute z-10 w-full top-36">

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl text-[#193C91] font-bold">¿QUIENES SOMOS?</h1>
                        <div className="border-b-2 bg-[#4B86C5] border-blue-400 w-[70px]"></div>
                    </div>

                    <div className="grid grid-cols-[800px_400px] gap-20 mt-20">
                        <div className="h-fit">
                            <p className="px-16 text-xl text-white">Nos especializamos en el mantenimiento y conservación de ascensores y afines, cumpliendo con todos los requisitos técnicos exigidos por el GCBA. Renovamos equipos para mejorar seguridad, rendimiento y adaptar el ascensor a la normativa actual.</p>
                            <div className="grid grid-cols-2 px-24 justify-items-center">
                                {cartitas.map((cartita, index) => (
                                    <div key={index} className="flex px-4 flex-col items-center justify-center w-72 h-32 mt-10 bg-[#193C91] rounded-[35px]">
                                        {cartita.icono}
                                        <span className="text-base text-center text-white">{cartita.span}</span>
                                    </div>

                                ))
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start">
                                <h1 className="text-xl font-bold text-white">
                                    CÓMO TRABAJAMOS
                                    <div className="border-b-2 border-[#193C91] w-full"></div>
                                </h1>
                                <div className="grid mt-10 grdi-rows-6">
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-[#193C91] rounded-full"></div>
                                        <span className="font-bold text-white">CONFIANZA</span>
                                    </div>

                                    <div className="w-1 h-5 ml-[22px] my-1 bg-white"></div>

                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-[#193C91] rounded-full"></div>
                                        <span className="font-bold text-white">PUNTUALIDAD</span>
                                    </div>

                                    <div className="w-1 h-5 ml-[22px] my-1 bg-white"></div>

                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-[#193C91] rounded-full"></div>
                                        <span className="font-bold text-white">SEGURIDAD</span>
                                    </div>

                                    <div className="w-1 h-5 ml-[22px] my-1 bg-white"></div>

                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-[#193C91] rounded-full"></div>
                                        <span className="font-bold text-white">RESPONSABILIDAD</span>
                                    </div>

                                    <div className="w-1 h-5 ml-[22px] my-1 bg-white"></div>

                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-[#193C91] rounded-full"></div>
                                        <span className="font-bold text-white">TRANSPARENCIA</span>
                                    </div>

                                    <div className="w-1 h-5 ml-[22px] my-1 bg-white"></div>

                                    <div className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-[#193C91] rounded-full"></div>
                                        <span className="font-bold text-white">ATENCIÓN PERSONALIZADA</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid h-20 grid-cols-3 px-16 mt-24">
                        <div className="flex flex-col gap-4 pr-10 border-r-2 border-[#4B86C5]">
                            <h1 className="text-xl font-bold text-white w-fit">
                                NUESTRA HISTORIA
                                <div className="border-b-2 border-[#193C91] w-full"></div>
                            </h1>
                            <p className="text-base font-semibold text-white">
                                Somos una empresa familiar fundada en febrero de 2003, con más de 25 años de experiencia en el rubro. Desde nuestros inicios nos propusimos ofrecer un servicio de calidad con compromiso, responsabilidad e idoneidad.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 px-10 border-r-2 border-[#4B86C5]">
                            <h1 className="text-xl font-bold text-white w-fit">
                                NUESTRO CRECIMIENTO
                                <div className="border-b-2 border-[#193C91] w-full"></div>
                            </h1>
                            <p className="text-base font-semibold text-white">
                                Crecimos gracias a la recomendación directa de nuestros clientes. Ese reconocimiento, para nosotros, vale más que cualquier premio.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 pl-10">
                            <h1 className="text-xl font-bold text-white w-fit">
                                NUESTRO EQUIPO
                                <div className="border-b-2 border-[#193C91] w-full"></div>
                            </h1>
                            <p className="text-base font-semibold text-white">
                                Nuestro equipo técnico está formado por profesionales con más de 20 años de experiencia. Trabajamos con técnicos propios, altamente capacitados, para garantizar atención directa y segura.
                            </p>
                        </div>
                    </div>

                </div>
                
            </div>


        </>
        
    )
}

export default QuienesSomos
