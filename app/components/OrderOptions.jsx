"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function OrderOptions() {
  const [option, setOption] = useState("delivery"); // default: ldelivery

  return (
    <section className="py-14 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Choose Your Order Option</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Delivery Option */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-xl shadow-xl cursor-pointer w-72 text-center border-2 ${
            option === "delivery" ? "border-red-500" : "border-transparent"
          }`}
          onClick={() => setOption("delivery")}
        >
          <div className="text-5xl mb-3">🚚</div>
          <h3 className="text-xl font-semibold">Delivery to your home</h3>
          <p className="text-gray-600 mt-2">We deliver sushi right to your door.</p>
        </motion.div>

        {/* Pickup Option */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-xl shadow-xl cursor-pointer w-72 text-center border-2 ${
            option === "pickup" ? "border-red-500" : "border-transparent"
          }`}
          onClick={() => setOption("pickup")}
        >
          <div className="text-5xl mb-3">🏪</div>
          <h3 className="text-xl font-semibold">Pickup from store</h3>
          <p className="text-gray-600 mt-2">Come take your order from the shop.</p>
        </motion.div>
      </div>

      {/* FORM */}
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">

        <h3 className="text-xl font-bold mb-4">
          {option === "delivery" ? "Delivery Information" : "Pickup Information"}
        </h3>

        <form className="space-y-4">

          {/* Delivery form */}
          {option === "delivery" && (
            <>
              <input 
                type="text" 
                placeholder="Full name"
                className="w-full p-3 rounded border"
                required
              />

              <input 
                type="text" 
                placeholder="Phone number"
                className="w-full p-3 rounded border"
                required
              />

              <input 
                type="text" 
                placeholder="Address"
                className="w-full p-3 rounded border"
                required
              />

              <input 
                type="text" 
                placeholder="City"
                className="w-full p-3 rounded border"
                required
              />
            </>
          )}

          {/* Pickup form */}
          {option === "pickup" && (
            <>
              <input 
                type="text" 
                placeholder="Full name"
                className="w-full p-3 rounded border"
                required
              />

              <input 
                type="text" 
                placeholder="Phone number"
                className="w-full p-3 rounded border"
                required
              />

              <p className="text-gray-700">Pickup location: <b>Sushi Store - Downtown</b></p>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </section>
  );
}
