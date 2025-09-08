import { Handshake, Scale, ShieldCheck } from "lucide-react"

const InfoCards = [
    {
        icono: <Handshake className="text-[#597FAC] w-10 h-10 st stroke-1"/>,
        titulo: "CONFIANZA",
        parrafo: "Construimos relaciones duraderas cumpliendo con lo acordado y estando siempre presentes cuando se nos necesita."
    },
    {
        icono: <ShieldCheck className="text-[#597FAC] w-10 h-10 st stroke-1"/>,
        titulo: "CREDIBILIDAD",
        parrafo: "Más de 25 años de experiencia, respaldo técnico y transparencia en cada paso. "
    },
    {
        icono: <Scale className="text-[#597FAC] w-10 h-10 st stroke-1"/>,
        titulo: "ÉTICA",
        parrafo: "Actuamos con responsabilidad, honestidad y respeto en cada servicio que brindamos."
    },
]

const Cards = () => {
    return (
        <div className="absolute z-10 flex flex-row items-center gap-20 top-[450px]">
            {InfoCards.map((card, index) => (
                <div key={index} className="flex flex-col items-center">
{/* CIRUCLO */}
                    <div className="absolute z-10 rounded-full flex items-center justify-center bg-[#1A2F47] w-20 h-20 border-[#597FAC] border-4">
                        {card.icono}
                    </div>

{/* CARTA */}
                    <div className="relative z-0 top-10 bg-[#1A2F47] w-72 h-[240px] pt-16 shadow-lg shadow-gray-900">
                        <div className="flex flex-col text-center">
                            <span className="text-[22px] font-bold text-[#B7B7B7]">{card.titulo}</span>
                            <p className="text-[#A3A3A3] mt-6 font-medium px-2 text leading-5">{card.parrafo}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards