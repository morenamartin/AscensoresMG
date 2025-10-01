"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const WhatsApp =  () => {
    const [transition, setTransition] = useState(false)

    useEffect(() => {
        setTransition(true)
        const timeout = setTimeout(() => {
            setTransition(false)
        }, 2500)
        return () => clearTimeout(timeout)
    },[])

    return(
        <a
            className={`
                fixed p-2 z-50 bg-white  border-2 border-black  rounded-full h-14 bottom-4 right-4
                transition-all duration-700 overflow-hidden cursor-pointer
                ${transition ? "w-fit px-2 ease-in" : "w-14 justify-center"}
            `}   
            onMouseEnter={() => setTransition(true)}
            onMouseLeave={() => setTransition(false)} 
            style={{
                minWidth: transition ? 260 : 56,
                maxWidth: transition ? 400 : 56,
            }}
            href={`https://wa.me/5491144299037?text=${encodeURIComponent("Hola, quería consultarte sobre...")}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {transition ? 
                <div className={`flex flex-row items-center gap-4 pl-2 pr-1`}>
                    <span className="text-black whitespace-nowrap">¡Comunicate con nosotros ahora!</span> 
                    <Image src="/wsplogo.svg" alt="logowsp"  width={40} height={40}/>
                </div>
            :
                <Image src="/wsplogo.svg" alt="logowsp"  width={40} height={40}/>
            }
        </a>
    )
}

export default WhatsApp