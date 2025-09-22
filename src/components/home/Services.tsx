import { CircleCheckBig, ClipboardCheck, FileText, Headphones, Wrench, Zap } from "lucide-react"

const InfoServicesCards =  [
    {
        titulo: "MANTENIMIENTO",
        texto: "Entendemos la importancia de un ascensor en el día a día de nuestros clientes",
        icono: <Wrench className="stroke-1 w-9 h-9"/>,
        hover: "Realizamos controles mensuales para garantizar el correcto funcionamiento de tu ascensor, prevenir fallas y alargar su vida útil. Nuestro servicio incluye revisión, limpieza, lubricación y ajustes técnicos."
    },
    {
        titulo: "ATENCIÓN DE URGENCIA 24/7",
        texto: "Nos comprometemos a resolver cualquier problema de manera rápida y eficiente",
        icono: <Headphones className="stroke-1 w-9 h-9"/>,
        hover: "Ante cualquier imprevisto, podés contar con nuestro equipo técnico disponible las 24 horas. Atendemos emergencias los 365 días del año con respuesta rápida y profesional."
    },
    {
        titulo: "TRANSPARENCIA EN REPARACIONES",
        texto: "Notificación por escrito de las reparaciones a realizar o realizadas en caso de urgencia.",
        icono: <FileText className="stroke-1 w-9 h-9"/>,
        hover: "Cada reparación urgente incluye un informe técnico detallado donde se explica qué se hizo, por qué fue necesario y cual es su valor. Así garantizamos claridad y confianza en todo momento."
    },
    {
        titulo: "ASISTENCIA EN INSPECCIONES",
        texto: "Acompañamos durante inspecciones del GCBA y ayudamos a resolver observaciones.",
        icono: <CircleCheckBig className="stroke-1 w-9 h-9"/>,
        hover: "Si tu edificio debe pasar una inspección oficial, te acompañamos en todo el proceso. Nos encargamos de que el ascensor cumpla con las exigencias técnicas y ayudamos a resolver cualquier observación."
    },
    {
        titulo: "MODERNIZACIÓN DE ASCENSORES",
        texto: "Actualizamos equipos antiguos para mejorar su seguridad y adaptarlos a la normativa.",
        icono: <Zap className="stroke-1 w-9 h-9"/>,
        hover: "Actualizamos ascensores antiguos sin necesidad de reemplazarlos por completo. Mejoramos su seguridad, apariencia y rendimiento, cumpliendo con las normativas actuales."
    },
    {
        titulo: "ASESORAMIENTO SOBRE NORMATIVA VIGENTE",
        texto: "Brindamos información actualizada sobre las normativas  en la Ciudad de Buenos Aires.",
        icono: <ClipboardCheck className="stroke-1 w-9 h-9"/>,
        hover: "Te explicamos de forma clara qué exige la ley sobre el uso y mantenimiento de ascensores. Además, te guiamos en los trámites con el Gobierno de la Ciudad para que todo esté en regla."
    },
]

const ServicesCard = () => {
    return (
        <>
        {InfoServicesCards.map((card, index) => (
            <div key={index} className="group rounded-xl border-2 mt-10 w-[350px] min-h-60 px-5 pt-5 border-[#D9D9D9] bg-white relative overflow-hidden">
                <div className="bg-[#D9D9D9] rounded-full w-16 mb-4 h-16 flex items-center justify-center">
                    {card.icono}
                </div>
                <div className="text-start">
                    <span className="text-[#193C91] font-bold">{card.titulo}</span>
                    <p className="text-[#737373] mt-2 font-semibold">{card.texto}</p>
                </div>

                {/* Hover oculto por defecto */}
                <div className="absolute inset-0 flex items-center text-base justify-center px-10 transition-opacity duration-700 opacity-0 bg-[#294361f3] group-hover:opacity-100">
                    <p className="font-medium text-white">{card.hover}</p>
                </div>
            </div>
        ))
        }
        </>
    )
}

const Services = () => {
    return (
        <div className="w-full pt-20 pb-20 text-center h-fit bg-[#F4F4F4]">
            <h1 className="text-3xl font-bold text-[#193C91]">NUESTROS SERVICIOS</h1>
            <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 px-14 justify-items-center">
                <ServicesCard />
            </div>
        </div>
    )
}

export default Services