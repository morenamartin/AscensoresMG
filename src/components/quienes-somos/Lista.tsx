"use client"
import { useEffect, useState } from "react"


const Cartitas = () => {
    const [transition, setTransition] = useState(false)
    const [transition2, setTransition2] = useState(false)
    const [transition3, setTransition3] = useState(false)

    const sections = [
        {
            key: "historia",
            title: "NUESTRA HISTORIA",
            text: "Somos una empresa familiar fundada en febrero de 2003, con más de 25 años de experiencia en el rubro. Desde nuestros inicios nos propusimos ofrecer un servicio de calidad con compromiso, responsabilidad e idoneidad.",
            transition: transition,
            border: true,
        },
        {
            key: "crecimiento",
            title: "NUESTRO CRECIMIENTO",
            text: "Crecimos gracias a la recomendación directa de nuestros clientes. Ese reconocimiento, para nosotros, vale más que cualquier premio.",
            transition: transition2,
            border: true,
        },
        {
            key: "equipo",
            title: "NUESTRO EQUIPO",
            text: "Nuestro equipo técnico está formado por profesionales con más de 20 años de experiencia. Trabajamos con técnicos propios, altamente capacitados, para garantizar atención directa y segura.",
            transition: transition3,
            border: false,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const width = window.innerWidth
            const factor = width < 768 ? 3 : 1 

            if (window.scrollY > 400 * factor) {
                setTransition(true)
                setTimeout(() => {
                    setTransition2(true)
                },500)
                setTimeout(() => {
                    setTransition3(true)
                },1000)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="flex flex-col gap-12 px-4 mt-24 h-fit lg:gap-4 md:px-16 lg:grid lg:grid-cols-3">
            {sections.map((section) => (
            <div
                key={section.key}
                className={`${section.transition ? "opacity-100 duration-700 ease-in" : "opacity-0"} flex items-center flex-col gap-4 px-4 md:px-10 ${section.border ? "border-b-2 lg:border-b-[#1A2F47] lg:border-r-2 pb-12 border-[#4B86C5]" : ""}`}
            >
                <h1 className="text-xl font-bold text-white w-fit">
                {section.title}
                <div className="border-b-2 border-[#193C91] w-full"></div>
                </h1>
                <p className="text-base font-semibold text-center text-white">
                {section.text}
                </p>
            </div>
            ))}
        </div>
    )
}

export default Cartitas