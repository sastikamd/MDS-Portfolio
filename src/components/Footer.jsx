import React from 'react'
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div
      className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img className='h-7 lg:h-11' src="/assets/logo-white.svg" alt="Sastika logo" />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2026 Personal Portfolio</p>
        <p>Made by Sastika M D</p>
      </div>
    </motion.div>
  )
}
