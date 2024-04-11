import React from 'react'

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp-effect";
const hero = () => {
  return (
    <LampContainer>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 pt-4 bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl"
    >
      <div className="flex flex-col">
        <p className='text-opacity-75'>
        Quienes somos
        </p>
        <p className="text-2xl font-normal flex px-32">Nuestro propósito es ayudar a las comunidades latinoamericanas a lograr lo mejor en bienestar, finanzas y productividad. A través de la tecnología que tenemos el poder de generar un impacto significativo a gran escala, es nuestra elección lograr que tenga un impacto positivo.</p>
      </div>
    </motion.h1>
  </LampContainer>
  )
}

export default hero
