import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Swip() {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
        className="w-full max-w-screen-lg border-2 border-blue-500"
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px] flex items-center justify-center md:h-[500px]">
            <img src="/onepage.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6 sm:p-6">
              <h2 className="text-white text-2xl font-bold mb-4 sm:text-2xl md:text-3xl">
                One Page Profesional para tu Negocio
              </h2>
              <p className="text-white max-w-lg text-sm sm:text-base md:text-lg">
                Diseño y desarrollo de una página web moderna, rápida y optimizada
                para destacar tu negocio. Una One Page perfecta para mostrar tus
                servicios, captar clientes y mejorar tu presencia online.
                <br />✔ Diseño atractivo y responsive
                <br />✔ Carga rápida y optimización SEO básica
                <br />✔ Integración de formularios de contacto y redes sociales
                <br />✔ Adaptada a tus necesidades
                <br />
                ¡Impulsa tu negocio con una web efectiva y profesional!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[500px] flex items-center justify-center md:h-[500px]">
            <img src="/ecommerce.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6 sm:p-6">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">eCommerce</h2>
              <p className="text-white max-w-lg text-sm sm:text-base md:text-lg">
                Lleva tu negocio al siguiente nivel con una tienda online sencilla
                y efectiva. Diseñamos un eCommerce para que puedas vender
                productos o servicios de manera fácil y profesional.
                <br />✔ Diseño atractivo y adaptable a todos los dispositivos
                <br />✔ Integración con plataformas de pago seguras
                <br />✔ Catálogo de productos optimizado
                <br />✔ Carga rápida y SEO básico para mejor visibilidad
                <br />✔ Formularios de contacto y conexión con redes sociales
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[500px] flex items-center justify-cente md:h-[500px]">
            <img src="/institucional.png" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-white text-2xl font-bold mb-4">
                Web Institucional Profesional
              </h2>
              <p className="text-white max-w-lg">
                Refuerza la presencia digital de tu empresa con una web
                institucional moderna y optimizada. Una solución profesional para
                transmitir confianza, mostrar servicios y conectar con tus
                clientes.
                <br />✔ Diseño a medida y responsive
                <br />✔ Optimización SEO básica para mayor visibilidad
                <br />✔ Integración con formularios de contacto y redes sociales
                <br />✔ Secciones personalizadas (Nosotros, Servicios, Contacto, etc.)
                <br />✔ Seguridad y rendimiento garantizados
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
