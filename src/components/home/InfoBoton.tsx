const InfoBoton = () => {
    return (
        <div className="bg-[#1A2F47] w-[100%] z-0 h-fit pt-12 lg:pt-40 text-center pb-12">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl font-medium text-white">Relevamiento técnico sin costo</h1>
                <p className="font-normal leading-7 mt-4 text-[#D5D5D5] text-[20px] px-2 md:px-10 lg:px-60">Realizamos una inspección sin costo, únicamente visual, sin pruebas ni manipulación del equipo. Evaluamos el estado general del ascensor para detectar posibles fallas y verificar el cumplimiento básico de la normativa vigente.</p>
                <a href="/contacto" className="bg-[#FC8F13] hover:bg-[#d4760a] rounded-lg font-bold text-white w-fit px-12 py-2 mt-4">
                    Comenzá con nosotros
                </a>
            </div>
        </div>
    )
}

export default InfoBoton