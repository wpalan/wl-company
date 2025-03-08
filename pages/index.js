import Image from "next/image";
import { Poppins } from "next/font/google";
import Swip from "@/Components/swiper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInText = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const fadeInSection = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

export default function Home() {
  return (
    <motion.main 
        variants={fadeInText}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[url('/fondo2.jpg')] bg-auto font-poppins overflow-x-hidden overflow-y-hidden">
    <nav className="flex justify-around bg-gray-400/15 text-black py-4 sm:justify-around">
      
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-row-reverse text-center"
      >
        <img src="/logo.png" className="w-32 h-32 md:w-40 md:h-40" alt="Logo" />
      </motion.div>

      <motion.div
        variants={fadeInText}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center md:flex"
      >
        <ul className="flex space-x-10 sm:space-x-4">
          {["Nosotros", "Políticas", "Equipo", "Servicios", "Contacto"].map((item, index) => (
            <motion.li
              key={index}
              className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500 cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </nav>

      <header className=" mx-auto flex items-center h-screen w-screen bg-black/50 ">
        <motion.div
        variants={fadeInText}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} className="w-screen h-full">
          <img src="/oficina.jpg" alt="Oficina" className="w-full h-full object-cover" />
        </motion.div>

        <div className="w-1/2 flex flex-col justify-center text-left px-10">
          <p className="text-3xl font-bold text-black">Diseño y Programación de Páginas Web</p>
          <p className="text-xl mt-2 text-gray-700">Especialistas en Diseño Web Profesional</p>
          <p className="text-lg mt-2 text-gray-600">Diseño y Desarrollo que inspiran.</p>
        </div>
      </header>


      <content className="text-black container px-4 mx-auto ">
      
      <motion.article 
         variants={fadeInSection}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.10 }}
      className="text-center w-full mt-40 h-auto">
          <div className="text-center mx-auto mb-20">
          <h2 className="text-4xl ml-20 font-bold">Sobre WL Company</h2>
          </div>

          <div className="grid grid-cols-3 gap-x-8 gap-y-4 place-items-center divide-x-2 divide-blue-800 px-4 items-stretch md:grid-cols-3">
  <div className="pr-2 h-full flex items-center">
    <p>
      Nos comprometemos a ofrecer soluciones personalizadas que no solo se vean bien y/o atractivas,
      sino que también brinden una experiencia de usuario fluida, accesible y eficaz.
    </p>
  </div>

  <div className="flex justify-center items-center h-full pl-20">
    <img src="/monitor.jpg" className="rounded-full border-4 border-[#EFB810]" />
  </div>

  <div className="pt-6 pl-8 h-full flex items-center">
    <ul className="list-disc">
      <li>Especialistas en la experiencia de usuario</li>
      <li>Responsabilidad y fidelidad con el cliente</li>
      <li className="-indent-32">Atención de gran calidad</li>
    </ul>
  </div>
</div>

      <motion.div 
         variants={fadeInSection}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
      className="text-center p-20">
        <h2 className="text-4xl ml-20 font-bold">Nuestro equipo</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2">  
            <div className="relative flex justify-center">
              <img src="/desarrollow.png" className="object-cover w-full h-auto" />
              <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold">Wozniezka Pizarro Alan</h2>
                <h3 className="text-lg">Programador y desarrollador Web</h3>
                <p className="text-sm">
                  Formación en Front End Developer en la UTN, Web full Stack en J.P. Morgan y Tecnicatura en Programación en la UTN.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img src="/diseño.jpg" className="object-cover w-full h-auto" />
              <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold">Nahuel Lera</h2>
                <h3 className="text-lg">Diseñador & Marketin Digital</h3>
                <p className="text-sm">
                Formación en la UNLU en Administración, AACAM gestión y materiales, y capacitado en el área de Marketing Digital.
                </p>
              </div>
            </div>



           </div> 


           

        </motion.article>

        <motion.article 
           variants={fadeInSection}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
        className="container  mx-auto text-center w-full min-h-screen py-20 px-4">
          <h2 className="mt-20 mb-10 text-4xl font-bold">Nuestras políticas de trabajo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-2 border-blue-500 bg-slate-200/50 w-[25rem] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <img src="/empresarial.jpg" className="w-full h-60 object-cover rounded-lg mb-4"></img>
                <p className="pt-4 ">
                Nos esforzamos para comprender las metas de cada cliente, ofreciendo
                soporte continuo y asegurándonos de que sus necesidades sean cubiertas
                incluso después de la entrega del proyecto
                </p>
          </div>


          <div className="border-2 border-blue-500 bg-slate-200/50 w-[25rem] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <img src="/implementos.png" className="w-full h-60 border-b-2 border-blue-500"></img>
                  <p className="pt-4">Estamos actualizados con las últimas tendencias en diseño web,
                  tecnología y herramientas para poder ofrecer las soluciones más
                  innovadoras y eficientes a nuestros clientes</p>
            </div>



              <div className="border-2 border-blue-500 bg-slate-200/50 w-[25rem] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <img src="/reunion.jpg" className="w-full h-60 border-b-2 border-blue-500"></img>
                <p className="pt-4 ">
                Ofrecemos honorarios correspondientes al trabajo realizado,
                buscando siempre soluciones que se ajusten al presupuesto de nuestros
                clientes sin comprometer la calidad del producto final
                </p>
              </div>
        </div>
        </motion.article>

      <motion.article
         variants={fadeInSection}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
       className="grid text-center items-center justify-center w-screen h-screen">
        <h2 className="text-4xl font-bold pb-20">Servicios</h2>
        <p className="text-justify">La presencia en internet, a través de la WEB, lo que
brinda es visibilidad 24/7, para que potenciales clientes
conozcan la oferta del negocio y la empresa, sus
productos e información de la misma en cualquier
momento, puede impulsar el marketing y promoción de
esta manera. Así, a través de internet puede ampliar el
alcance que puede tener desde Argentina para cualquier
parte del mundo.

Tenes una primera impresión o carta de presentación
vistosa y profesional, aumenta la confianza en los
clientes al investigar sobre la empresa o marca.

La WEB no solo sirve para tener mayor visita o mayor
visibilidad, uno puede ofrecer servicio de venta online,
teniendo su propio eCommerce y brindar detalles
específicos que quiera brindar sobre sus productos.

En estos años el no tener presencia en la WEB puede
achicar tus posibilidades de crecer o de competir con
otros, se podría decir que es casi una obligación el tener
una WEB.</p>
        <Swip className='container items-center w-full h-64 md:h-96'/>

      </motion.article>

      <motion.article 
        variants={fadeInSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6 pt-60 pb-60 w-screen ">

  <div className="space-y-4">
    <h2 className="text-3xl font-bold">Contacto</h2>
    <p className="text-lg">📧 Correo electrónico:</p>
    <p className="text-gray-700">wlcreatorwebdesign@gmail.com</p>

    <p className="text-lg">📞 Teléfonos:</p>
    <p className="text-gray-700">
      11 6107-2745 <br /> 11 5624-8349
    </p>
  </div>

  <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-4 border-blue-200">
    <h3 className="text-xl font-semibold mb-4">
      ¿Querés comunicarte con nosotros? ¡Completa este formulario y nos contactaremos a la brevedad!
    </h3>
    <form
      target="_blank"
      action="https://formsubmit.co/wlcreatorwebdesign@gmail.com"
      method="POST"
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          className="w-full p-2 border border-gray-300 rounded "
          placeholder="Nombre Completo"
          required
        />
        <input
          type="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Correo Electrónico"
          required
        />
      </div>

      <textarea
        name="message"
        className="w-full p-3 border border-gray-300 rounded resize-none"
        placeholder="Tu Mensaje"
        rows="6"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Enviar Mensaje
      </button>
    </form>
  </div>
</motion.article>


      </content>
      <footer className="w-full bg-black text-white py-10 px-6 grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
  <div className="p-6">
    <img src="logo2.jpg" className="w-40 h-40 md:align-middle " alt="Logo" />
    <p className="mx-6">11 6107-2745 <br /> 11 5624-8349</p>
  </div>

  <div className="mx-auto pt-10 text-center items-center">
    <p>WL Creator Company</p>
    <p className="mt-20">Buenos Aires, Argentina.</p>
    <p>2025 - Diseñado y desarrollado por WL CREATOR COMPANY. Todos los derechos reservados.</p>
  </div>
</footer>

    </motion.main>
  )
}
