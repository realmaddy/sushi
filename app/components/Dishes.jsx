"use client";
import { motion } from "framer-motion";

const dishes = [
  { name: "Sushi Roll", icon: "🍣" },
  { name: "Nigiri", icon: "🍤" },
  { name: "Sashimi", icon: "🐟" },
  { name: "Maki", icon: "🥢" },
  { name: "Temaki", icon: "🌯" },
  { name: "Salmon Bowl", icon: "🍛" },
  { name: "Tuna Bowl", icon: "🍱" },
  { name: "Shrimp Sushi", icon: "🦐" },
  { name: "Ramen", icon: "🍜" },
  { name: "Gyoza", icon: "🥟" },
];

export default function Dishes() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10">Our Dishes</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {dishes.map((dish, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow"
          >
            <div className="text-5xl">{dish.icon}</div>
            <p className="mt-3 text-lg font-semibold">{dish.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
