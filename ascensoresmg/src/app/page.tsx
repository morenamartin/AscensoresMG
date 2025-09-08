import Image from "next/image";

import imagenHome from "../assets/imagenHome.png"
import Cards from "@/components/home/Cards";
import InfoBoton from "@/components/home/InfoBoton";
import Services from "@/components/home/Services";
import Empresas from "@/components/home/Empresas";

export default function Home() {
  return (
    <>
      <div className="relative pt-14">
        <Image src={imagenHome} className="w-full" alt="fondo"/>
        <h1 className="absolute font-bold text-[#FAFAFA] text-7xl top-40 right-28">
          Ascensores MG <span className="text-5xl">srl</span>
        </h1>
        <h3 className="absolute text-3xl font-bold text-[#4B617A] top-60 right-28">Mantenimiento de ascensores</h3>
      </div>

      {/* Contenedor normal, sin absolute */}
      <div className="flex flex-col items-center mt-[-100px]">
        <Cards />
        <InfoBoton />
      </div>

      <Services />
      <Empresas />
    </>
  )
}
