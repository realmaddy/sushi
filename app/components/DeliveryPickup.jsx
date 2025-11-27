"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Store } from "lucide-react";

export default function DeliveryPickup() {
  const [option, setOption] = useState("delivery");

  return (
    <section className="py-32">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-14 text-sushiDark dark:text-white"
      >
        Choose Your <span className="text-sushiOrange">Order Option</span>
      </motion.h2>

      {/* OPTION CARDS */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">

        {/* DELIVERY CARD */}
       <motion.div
  onClick={() => setOption("delivery")}
  whileHover={{ scale: 1.05 }}
  className={`
    w-60 h-40 p-4 rounded-2xl cursor-pointer shadow-md 
    bg-white dark:bg-[#1a1a1b]
    border-2 transition flex flex-col
    ${option === "delivery" ? "border-sushiOrange shadow-xl" : "border-transparent"}
  `}
>
  <Truck className="w-7 h-7 text-sushiOrange mb-2" />

  <h3 className="text-lg font-semibold text-sushiDark dark:text-white">
    Delivery to Home
  </h3>

  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
    We deliver sushi to your door.
  </p>
</motion.div>

<motion.div
  onClick={() => setOption("pickup")}
  whileHover={{ scale: 1.05 }}
  className={`
    w-60 h-40 p-4 rounded-2xl cursor-pointer shadow-md
    bg-white dark:bg-[#1a1a1b]
    border-2 transition flex flex-col
    ${option === "pickup" ? "border-sushiOrange shadow-xl" : "border-transparent"}
  `}
>
  <Store className="w-7 h-7 text-sushiOrange mb-2" />

  <h3 className="text-lg font-semibold text-sushiDark dark:text-white">
    Pickup From Store
  </h3>

  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
    Come pick up your sushi yourself.
  </p>
</motion.div>


      </div>

      {/* FORM */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="max-w-xl mx-auto mt-14 bg-white dark:bg-[#1a1a1b] p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10"
>
  <h3 className="text-2xl font-bold text-sushiDark dark:text-white mb-8">
    {option === "delivery" ? "Delivery Information" : "Pickup Information"}
  </h3>

  <div className="space-y-6">

    {/* FULL NAME */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Full Name</label>
      <div className="relative">
        <input
          type="text"
          className="
            w-full pl-12 pr-4 py-3 rounded-xl 
            bg-gray-100 dark:bg-[#242424] 
            text-black dark:text-white 
            outline-none border border-transparent 
            focus:border-sushiOrange transition
          "
          placeholder="John Doe"
        />
        <svg
          className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      </div>
    </div>

    {/* PHONE NUMBER */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Phone Number</label>
      <div className="relative">
        <input
          type="text"
          className="
            w-full pl-12 pr-4 py-3 rounded-xl 
            bg-gray-100 dark:bg-[#242424] 
            text-black dark:text-white 
            outline-none border border-transparent 
            focus:border-sushiOrange transition
          "
          placeholder="+212 600-000000"
        />
        <svg
          className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.86 19.86 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75 12.05 12.05 0 0 0 .57 1.81 1 1 0 0 1-.23 1L8 8a16 16 0 0 0 8 8l1.44-1.44a1 1 0 0 1 1-.24 12.05 12.05 0 0 0 1.81.57A1 1 0 0 1 22 16.92z"/>
        </svg>
      </div>
    </div>

    {/* ADDRESS (Delivery Only) */}
    {option === "delivery" && (
      <>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Address</label>
          <div className="relative">
            <input
              type="text"
              className="
                w-full pl-12 pr-4 py-3 rounded-xl 
                bg-gray-100 dark:bg-[#242424] 
                text-black dark:text-white 
                outline-none border border-transparent 
                focus:border-sushiOrange transition
              "
              placeholder="123 Sushi Street"
            />
            <svg
              className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300">City</label>
          <div className="relative">
            <input
              type="text"
              className="
                w-full pl-12 pr-4 py-3 rounded-xl 
                bg-gray-100 dark:bg-[#242424] 
                text-black dark:text-white 
                outline-none border border-transparent 
                focus:border-sushiOrange transition
              "
              placeholder="Casablanca"
            />
            <svg
              className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2 7 7 7-7 2 2-9 9-9-9z"/>
            </svg>
          </div>
        </div>
      </>
    )}

    {/* SUBMIT BUTTON */}
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full mt-4 py-4 bg-sushiOrange text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-[#e7691f] transition"
    >
      Confirm Order
    </motion.button>

  </div>
</motion.div>


    </section>
  );
}
