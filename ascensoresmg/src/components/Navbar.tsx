import Image from "next/image"

import logo from "../assets/logo.png"

const Navbar = () => {
    return(
        <div className="flex flex-row items-center justify-between z-30 w-[100%] bg-white px-28 h-14 fixed">
            <div>
                <Image width={50} height={50} src={logo} alt="logo"/>
            </div>
            <div className="flex flex-row gap-10 text-sm">
                <a href="">PREGUNTAS FRECUENTES</a>
                <a href="">¿QUIENES SOMOS?</a>
                <a href="">CONTACTO</a>
            </div>
        </div>
    )
}

export default Navbar