"use client"
import { Accordion, createTheme, ThemeProvider } from "flowbite-react";
import { AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const customTheme = createTheme({
  accordion: {
    root: { base: " bg-[#1F3958] !border-0 divide-y-0" },
    title: {
    base: "flex w-full items-center justify-between p-5 text-left font-medium !bg-[#1F3958] !text-white !outline-none !ring-0 !focus:outline-none !focus:ring-0",
    flush: { off: "", on: "" },
    open: { off: "", on: "" },
    arrow: { base: "h-6 w-6 shrink-0 -rotate-90 text-white transition-transform duration-300", open: { off: "", on: "rotate-40" } },
    heading: ""
    },
    content: {
    base: "p-5 first:rounded-t-lg last:rounded-b-lg !bg-[#1F3958] !text-white !outline-none !ring-0 !focus:outline-none !focus:ring-0"
    }
  }
});


const Preguntas = () => {
    return(
        <div className="pt-32 lg:py-32 bg-[#1A2F47] h-fit pb-16 lg:min-h-screen">
            <h1 className="text-4xl text-[#58A9FF] text-center mb-16">PREGUNTAS FRECUENTES</h1>

<ThemeProvider theme={customTheme}>
    <div className="w-[90%] lg:w-[60%] m-auto space-y-6">
        <Accordion>

        <AccordionPanel>
            <AccordionTitle>
                1. ¿Cada cuánto tiempo se debe hacer el mantenimiento del ascensor?
            </AccordionTitle>
            <AccordionContent>
            <p className="pr-10 mb-4 text-gray-500 dark:text-gray-400">
                Es obligatorio realizar mantenimiento mensual, de acuerdo con las normativas vigentes. Esto garantiza el correcto funcionamiento y la seguridad del equipo.
            </p>
            </AccordionContent>
        </AccordionPanel>


        <AccordionPanel>
            <AccordionTitle>2. ¿Qué incluye el servicio de mantenimiento?</AccordionTitle>
            <AccordionContent>
            <p className="pr-10 mb-4 text-gray-500 dark:text-gray-400">
                El servicio de mantenimiento esta regulado por la normativa vigente, incluye control de seguridades, engrase y limpieza
            </p>
            </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
            <AccordionTitle>3. ¿Qué pasa si el ascensor deja de funcionar fuera del horario laboral?</AccordionTitle>
            <AccordionContent>
            <p className="pr-10 mb-4 text-gray-500 dark:text-gray-400">
                Contamos con servicio de asistencia 24/7 para emergencias. Puede contactarnos por teléfono o WhatsApp y un técnico acudirá lo antes posible.
            </p>
            </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
            <AccordionTitle>4. ¿Qué se considera una emergencia?</AccordionTitle>
            <AccordionContent>
            <p className="pr-10 mb-4 text-gray-500 dark:text-gray-400">
                Se considera una emergencia cuando hay una persona atrapada dentro del ascensor o cuando un ascensor único queda fuera de servicio, afectando la movilidad segura de los usuarios.
            </p>
            </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
            <AccordionTitle>5. ¿Qué garantía tienen los trabajos realizados?</AccordionTitle>
            <AccordionContent>
            <p className="pr-10 mb-4 text-gray-500 dark:text-gray-400">
                Ofrecemos garantía escrita en todos nuestros servicios. El tiempo depende del tipo de intervención (instalación, reparación, etc.).
            </p>
            </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
            <AccordionTitle>6. ¿Qué normas deben cumplir los ascensores en Argentina?</AccordionTitle>
            <AccordionContent>
            <p className="pr-10 mb-4 text-gray-500 dark:text-gray-400">
                Los ascensores deben cumplir con las normativas vigentes según el código de edificación del gobierno de la Ciudad de Buenos Aires y la AGC (Agencia Gubernamental de control).
            </p>
            </AccordionContent>
        </AccordionPanel>
        


        </Accordion>
    </div>
</ThemeProvider>

        </div>
    )
    
}

export default Preguntas