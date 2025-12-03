"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Debe ser un email válido").min(1, "El correo es obligatorio"),
  phone: z
    .string()
    .regex(/^(\+54)?\s?(9)?\s?\d{2,4}\s?\d{6,8}$/, "Debe ser un teléfono válido")
    .min(1, "El teléfono es obligatorio"),
  empresa: z.string().optional(),
  domicilio: z.string().min(2, "El domicilio es obligatorio"),
  consulta: z.string().min(10, "La consulta es obligatoria"),
});

type FormValues = z.infer<typeof formSchema>;

const Form = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      empresa: "",
      domicilio: "",
      consulta: "",
    },
  });

  const sendMail = async (data: FormValues) => {
    setLoading(true);

    try {
      const response = await fetch("https://mail-ascensores.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || "Consulta enviada con éxito", {
          position: "top-right",
          hideProgressBar: true,
          draggable: true,
          autoClose: 60000,
        });
        reset(); // Limpia el formulario
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al enviar la consulta", {
        position: "top-right",
        hideProgressBar: true,
        draggable: true,
        autoClose: 60000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] h-fit pt-4">
      <ToastContainer className="mt-14" />
      <form onSubmit={handleSubmit(sendMail)} className="flex flex-col gap-6">
        
        {/* Nombre y Email */}
        <div className="flex-col md:grid md:grid-cols-2 justify-between w-[100%] md:gap-6 ">

          <div className="flex flex-col">
            <input
              {...register("name")}
              type="text"
              placeholder="Nombre"
              disabled={isSubmitting}
              className="p-2 rounded-xl bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B6BBF]"
            />
            {errors.name && (
              <div className="mt-1 ml-3 text-sm text-red-400">{errors.name.message}</div>
            )}
          </div>

          <div className="flex flex-col mt-5 md:mt-0">
            <input
              {...register("email")}
              type="email"
              placeholder="Correo electrónico"
              disabled={isSubmitting}
              className="p-2 rounded-xl bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B6BBF]"
            />
            {errors.email && (
              <div className="mt-1 ml-3 text-sm text-red-400">{errors.email.message}</div>
            )}
          </div>
        </div>

        {/* Teléfono y Empresa */}
        <div className="flex-col md:grid md:grid-cols-2 justify-between w-[100%] gap-6 ">
          <div className="flex flex-col">
            <input
              {...register("phone")}
              type="tel"
              placeholder="Teléfono"
              disabled={isSubmitting}
              className="p-2 rounded-xl bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B6BBF]"
            />
            {errors.phone && (
              <div className="mt-1 ml-3 text-sm text-red-400">{errors.phone.message}</div>
            )}
          </div>
          <div className="flex flex-col mt-5 md:mt-0">
            <input
              {...register("empresa")}
              type="text"
              placeholder="Empresa/Administración (opcional)"
              disabled={isSubmitting}
              className="p-2 rounded-xl bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B6BBF]"
            />
          </div>
        </div>

        <div className="flex flex-col mt-5 md:mt-0">
          <input
            {...register("domicilio")}
            type="text"
            placeholder="Domicilio"
            disabled={isSubmitting}
            className="p-2 rounded-xl bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B6BBF]"
          />
          {errors.domicilio && (
            <div className="mt-1 ml-3 text-sm text-red-400">{errors.domicilio.message}</div>
          )}
        </div>

        {/* Consulta */}
        <div className="flex flex-col">
          <textarea
            {...register("consulta")}
            placeholder="Consulta o mensaje"
            disabled={isSubmitting}
            className="p-2 resize-none h-36 rounded-xl bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B6BBF]"
          />
          {errors.consulta && (
            <div className="mt-1 ml-3 text-sm text-red-400">{errors.consulta.message}</div>
          )}
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            isSubmitting
              ? "bg-[#18325f] cursor-not-allowed"
              : "bg-[#3B6BBF] hover:bg-[#2e63be]"
          } flex flex-row items-center gap-2 py-3 rounded-lg justify-center text-white font-medium transition-colors`}
        >
          {loading ? (
            <span>Enviando...</span>
          ) : (
            <>
              <Send size={18} /> Enviar consulta
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;