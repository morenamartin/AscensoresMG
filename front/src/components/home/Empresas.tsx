import Image from "next/image"
import sweet from "../../assets/empresas/aweet.png"
import flexelo from "../../assets/empresas/flexelo.png"
import signotel from "../../assets/empresas/signotel.png"
import sutecba from "../../assets/empresas/sutecba.png"

const Empresas = () => {
    return (
        <div className="flex flex-col items-center pb-12">
            <h2 className="font-bold text-[#193C91] my-10 text-lg">ALGUNAS EMPRESAS QUE CONFIAN EN NOSOTROS</h2>
            <div className="grid grid-cols-4 gap-20">
                <Image src={sweet} alt="sweet" width={180} className="duration-300 ease-in-out scale-100 hover:scale-110"/>
                <Image src={flexelo} alt="flexelo" width={180} className="duration-300 ease-in-out scale-100 hover:scale-110"/>
                <Image src={signotel} alt="signotel" width={180} className="duration-300 ease-in-out scale-100 hover:scale-110"/>
                <Image src={sutecba} alt="sutecba" width={180} className="duration-300 ease-in-out scale-100 hover:scale-110"/>
            </div>
            <p className="font-semibold text-center text-gray-600 px-[350px] mt-10">También brindamos mantenimiento a numerosos consorcios y edificios residenciales.
Nuestra cartera completa de clientes está disponible a solicitud.</p>
        </div>
    )
}

export default Empresas