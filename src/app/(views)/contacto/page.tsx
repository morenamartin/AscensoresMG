import Form from "@/components/contacto/Form"
import { Mail, Phone } from "lucide-react"

export const generateMetadata = () => {
  return {
    title: "Contacto | Ascensores MG - Más de 25 años de experiencia",
    description: "Contáctenos vía WhatsApp, email o formulario. Especialistas en mantenimiento y modernización de ascensores. Respuesta en 24 hs.",
  };
};


const Contacto = () => {
    return(
        <div className="pt-14 bg-[#1A2F47]">
            <div className="mt-16 text-center">
                <h1 className="text-[#4A90E2] text-4xl px-2">Póngase en contacto con nosotros</h1>
                <h2 className="mt-3 text-xl text-white">Puede comunicarse a través de los siguientes medios</h2>
            </div>
            <div className="flex flex-col items-center gap-20 pb-16 mt-16 lg:gap-0 lg:grid lg:grid-cols-2 lg:items-start">
                <div className="flex flex-col gap-6 md:px-20">

                    <a 
                        className="bg-[#1F3958] h-20 w-[90vw] md:w-[540px] rounded-2xl flex flex-row px-4 gap-4 items-center hover:scale-105 transition ease-in hover:bg-[#284669]"
                        href={`https://wa.me/5491140864329?text=${encodeURIComponent("Hola, quería consultarte sobre...")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-[#356CAC] rounded-xl w-12 h-12 flex justify-center items-center">
                            <Phone className="text-white"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white">Télefono</span>
                            <span className="text-gray-400">11 1234 5678</span>
                        </div>
                    </a>
                        <a 
                        className="bg-[#1F3958] h-20 w-[90vw] md:w-[540px] rounded-2xl flex flex-row px-4 gap-4 items-center hover:scale-105 transition ease-in hover:bg-[#284669]"
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=morenakiaramartin@gmail.com&su=${encodeURIComponent("Consulta")}&body=${encodeURIComponent("Hola, quería consultarte sobre...")}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        >
                        <div className="bg-[#356CAC] rounded-xl w-12 h-12 flex justify-center items-center">
                            <Mail className="text-white"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white">Correo Electrónico </span>
                            <span className="text-[#AAAAAA]">ascensoresmg@gmail.com</span>
                        </div>
                    </a>

                </div>
                <div>
                    <div className="bg-[#1F3958] h-fit pb-6 w-[350px] md:w-[800px] lg:w-[600px] rounded-2xl flex flex-col px-4 gap-4 items-center">
                        <h3 className="mt-6 text-white">O bien, complete el siguiente formulario</h3>
                        <Form />
                        <span className="text-sm text-center text-gray-300">“Respondemos consultas dentro de las 24 h hábiles. Muchas gracias por su interés.”</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto