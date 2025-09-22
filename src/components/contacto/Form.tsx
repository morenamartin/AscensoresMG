"use client"
import { Send } from "lucide-react"
import Input from "./Input"
import { Field, Formik, FormikHelpers } from "formik"
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Values {
  name: string;
  email: string;
  phone: string;
  empresa: string;
  consulta: string;
}

const Form = () => {
    const [loading, setLoading] = useState(false)

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

    const sendMail = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
        const body = {
            "to": values.email,
            "name": values.name,
            "email": values.email,
            "phone": values.phone,
            "empresa": values.empresa,
            "consulta": values.consulta
        }

        setLoading(true)

        try {
            await axios.post("https://mail-ascensores.onrender.com/send-email", body)
            .then(response => {
                toast.success(`${response.data.message}`, {
                    position: "top-right",
                    hideProgressBar: true,
                    draggable: true,
                    autoClose: 60000,
                })
            })
            resetForm()
        } catch(error: any) {
            toast.error("Hubo un error al mandar la consulta", {
                position: "top-right",
                hideProgressBar: true,
                draggable: true,
                autoClose: 60000,
            })
        }finally {
            setLoading(false)
        }

    }


    return (
        <div className="w-[100%] h-fit pt-4">
            <ToastContainer className="mt-14"/>
        <Formik
            initialValues={{
                name: "",
                email: '',
                phone: '' ,
                empresa: "",
                consulta: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values: Values, resetForm: FormikHelpers<Values>) => {
                sendMail(values, resetForm)
            }}
            >
            {({ isSubmitting, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
                
                <div className="flex flex-col justify-center gap-6 md:flex-row">
                    <div className="flex flex-col">
                        <Field as={Input} name="name" id="name" placeholder="Escribí tu nombre" disabled={isSubmitting}/>
                        {errors.name && touched.name ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.name}</div>
                        ) : null}
                    </div>
                    <div className="flex flex-col">
                        <Field as={Input} name="email" id="email" placeholder="Correo electrónico" disabled={isSubmitting}/>
                        {errors.email && touched.email ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.email}</div>
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-6 md:flex-row">
                    <div className="flex flex-col">
                        <Field as={Input} name="phone" id="phone" placeholder="Telefono" disabled={isSubmitting}/>
                        {errors.phone && touched.phone ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.phone}</div>
                        ) : null}
                    </div>
                    <div>
                        <Field as={Input} name="empresa" id="empresa" placeholder="Empresa (opcional)" disabled={isSubmitting} />   
                    </div>
                </div>

                    <div className="flex flex-col">
                        <Field
                            disabled={isSubmitting}
                            placeholder="Escriba su consulta o mensaje"
                            as={"textarea"}
                            name="consulta"
                            id="consulta"
                            className="p-2 resize-none h-36 rounded-xl"
                        />
                        {errors.consulta && touched.consulta ? (
                            <div className="mt-1 ml-3 text-sm text-red-600">{errors.consulta}</div>
                        ) : null}
                    </div>

                <button type="submit" disabled={isSubmitting} className={`${isSubmitting ? "bg-[#18325f] hover:bg-none" : "bg-[#3B6BBF] hover:bg-[#2e63be]"} flex flex-row items-center gap-2  py-1 rounded-lg justify-center text-white`}>
                    {loading ? <span>Enviando...</span> :
                    <>
                        <Send /> Enviar consulta    
                    </>}
                </button>          
            </div>
        </form>
        )}
        </Formik>
        </div>
    )
}

export default Form
