import Image from "next/image";
import Cards from "@/components/home/Cards";
import InfoBoton from "@/components/home/InfoBoton";
import Services from "@/components/home/Services";
import Empresas from "@/components/home/Empresas";

export default function Home() {
  return (
    <>
      {/* Imagen y textos para pantallas grandes */}
      <div className="relative hidden pt-14 lg:block">
        <Image src="/fondoHome.jpg" width={2000} height={2000} alt="fondo" />
        <h1 className="absolute font-bold text-[#FAFAFA] text-4xl md:text-6xl lg:text-7xl  right-2 md:top-40 md:right-4 lg:right-28">
          Ascensores MG <span className="text-2xl md:text-4xl lg:text-5xl">srl</span>
        </h1>
        <h3 className="absolute md:text-2xl lg:text-3xl font-bold text-[#4B617A] top-32 md:top-60 right-2 md:right-4 lg:right-28">
          Mantenimiento de ascensores
        </h3>
      </div>

      <div className="relative hidden pt-14 md:block md:h-[85vh] md:overflow-hidden lg:hidden">
        <Image src="/2.jpg" width={1000} height={1000} alt="fondo" />
        <h1 className="absolute font-bold text-[#FAFAFA] text-4xl md:text-7xl top-40 right-2 md:top-40 md:right-4 lg:right-28">
          Ascensores MG <span className="text-2xl md:text-4xl lg:text-5xl">srl</span>
        </h1>
        <h3 className="absolute md:text-3xl font-bold text-[#4B617A] top-32 md:top-60 right-2 md:right-4 lg:right-28">
          Mantenimiento de ascensores
        </h3>
      </div>

      {/* Imagen y textos para pantallas chicas */}
      <div className="relative block pt-14 h-[140vh] md:hidden">
        <Image src="/1.jpg" fill alt="fondo móvil" />
        <h1 className="absolute font-bold text-[#FAFAFA] text-[40px] top-24 right-2">
          Ascensores MG <span className="text-xl">srl</span>
        </h1>
        <h3 className="absolute text-xl font-bold text-[#4B617A] top-36 right-2">
          Mantenimiento de ascensores
        </h3>
      </div>

      {/* Contenedor normal, sin absolute */}
      <div className="flex flex-col lg:items-center lg:mt-[-100px]">
        <Cards />
        <InfoBoton />
      </div>

      <Services />
      <Empresas />
    </>
  )
}
