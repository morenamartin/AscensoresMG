"use client"
import { Send } from "lucide-react"
import Input from "./Input"
import { ErrorMessage, Field, Formik } from "formik"
import * as Yup from "yup";

interface Values {
  name: string;
  email: string;
  phone: string;
  empresa: string;
  consulta: string;
}

const Form = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("El nombre es obligatorio"),
        email: Yup.string()
            .email("Debe ser un email válido")
            .required("El correo es obligatorio"),
        phone: Yup.string()
            .required("El teléfono es obligatorio"),
        empresa: Yup.string(),
        consulta: Yup.string()
            .required("La consulta es obligatoria"),
    });
    return (
        <div className="w-[100%] h-fit pt-4">
        <Formik
            initialValues={{
                name: "",
                email: '',
                phone: '' ,
                empresa: "",
                consulta: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values: Values, { setSubmitting }) => {
                alert("Enviado")
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
            >
            {({ isSubmitting, values, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
                
                <div className="flex flex-row justify-center gap-6">
                    <div className="flex flex-col">
                        <Field as={Input} name="name" id="name" placeholder="Escribí tu nombre"/>
                        {errors.name && touched.name ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.name}</div>
                        ) : null}
                    </div>
                    <div className="flex flex-col">
                        <Field as={Input} name="email" id="email" placeholder="Correo electrónico"/>
                        {errors.email && touched.email ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.email}</div>
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-6">
                    <div className="flex flex-col">
                        <Field as={Input} name="phone" id="phone" value={values.phone} placeholder="Telefono"/>
                        {errors.phone && touched.phone ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.phone}</div>
                        ) : null}
                    </div>
                    <div>
                        <Field as={Input} name="empresa" id="empresa" placeholder="Empresa (opcional)"/>   
                    </div>
                </div>

                    <div className="flex flex-col">
                        <Field
                            placeholder="Escriba su consulta o mensaje"
                            as="textarea"
                            name="consulta"
                            id="consulta"
                            className="p-2 resize-none h-36 rounded-xl"
                        />
                        {errors.consulta && touched.consulta ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.consulta}</div>
                        ) : null}
                    </div>

                <button type="submit" disabled={isSubmitting} className="flex flex-row items-center gap-2 bg-[#3B6BBF] hover:bg-[#2e63be] py-1 rounded-lg justify-center text-white">
                    <Send />
                    Enviar consulta    
                </button>          
            </div>
        </form>
        )}
        </Formik>
        </div>
    )
}

export default Form