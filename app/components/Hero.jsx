"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/sushi-hero.jpg')] bg-cover bg-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl font-bold">Fresh Sushi Delivered To You</h1>
        <p className="mt-4 text-lg">Order your favorite sushi with one click.</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-red-500 rounded-xl text-white font-semibold"
        >
          Order Now
        </motion.button>
      </motion.div>
    </section>
  );
}
