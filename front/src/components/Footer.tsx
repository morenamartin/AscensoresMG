import Image from "next/image"
import logo from "../assets/logo.png"
import { Mail, MapPin, Phone } from "lucide-react"

const contactos = [
    {
        icono: <Phone className="text-[#4A90E2]"/>,
        contacto: "11 1234 5678"
    },
    {
        icono: <Mail className="text-[#4A90E2]"/>,
        contacto: "ascensoresmg@gmail.com"
    },
    {
        icono: <MapPin className="text-[#4A90E2]"/>,
        contacto: "Flores, CABA"
    },
]

const Footer = () => {
    return (
        <div className="w-full bg-[#1A2F47] h-fit px-4 md:px-24 pb-6">
            <div className="md:grid md:grid-cols-[400px_2fr_2fr] gap-16 py-10">
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <Image src="/logo.png" width={50} alt="logo" height={50}/>
                        <h1 className="text-2xl font-bold text-white">Ascensores MG <span className="text-xl">src</span></h1>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[#cacaca] font-regular">
                        Especialistas en mantenimiento, conservación y modernización de ascensores. Más de 25 años de experiencia brindando servicios de calidad.
                    </p>
                </div>
                <div>
                    <h1 className="pt-10 text-lg font-bold text-white md:pt-4">Información de Contacto</h1>
                    <div className="flex flex-col gap-4 mt-6">
                        {
                            contactos.map((contacto, index) => (
                                <div key={index} className="flex flex-row gap-3">
                                    {contacto.icono}
                                    <span className="text-sm text-[#cacaca] font-normal">{contacto.contacto}</span>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
            </div>  
            <div className="h-[1px] bg-white w-full mb-6"></div>
            <div className="text-center">
                <span className="text-[#949494]">© 2025 Ascensores MG SRL. Todos los derechos reservados.</span>
            </div>
        </div>
    )
}

export default Footer