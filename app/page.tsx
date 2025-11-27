"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DeliveryPickup from "./components/DeliveryPickup"; // تأكد المسار صحيح

// Animations
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } };

export default function Home() {
  const [open, setOpen] = useState(false);

  // Popular dishes data
  const dishes = [
    {
      id: 1,
      name: "Salmon Roll",
      price: "45.00 MAD",
      desc: "Fresh salmon with creamy avocado.",
      image: "/dish-1.png",
    },
    {
      id: 2,
      name: "Vegetable Maki",
      price: "30.00 MAD",
      desc: "Healthy mixed veggies & seaweed.",
      image: "/dish-2.png",
    },
    {
      id: 3,
      name: "California Roll",
      price: "40.00 MAD",
      desc: "Crab, avocado & sesame seeds.",
      image: "/dish-3.png",
    },
    {
      id: 4,
      name: "Salmon Cheese Roll",
      price: "48.00 MAD",
      desc: "Salmon with philadelphia cheese.",
      image: "/dish-4.png",
    },
    {
      id: 5,
      name: "Teriyaki Roll",
      price: "52.00 MAD",
      desc: "Chicken teriyaki with sesame.",
      image: "/dish-5.png",
    },
    {
      id: 6,
      name: "Crunchy Roll",
      price: "46.00 MAD",
      desc: "Crispy texture & fresh ingredients.",
      image: "/dish-6.png",
    },
  ];

  return (
    <main className="relative min-h-screen bg-sushiCream dark:bg-[#0d0d0f] overflow-hidden flex flex-col">
      {/* SIDEBARS */}
      <div className="absolute inset-y-0 left-0 w-20 bg-sushiOrange" />
      <div className="absolute inset-y-0 right-0 w-14 bg-sushiOrange" />

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          fixed top-0 left-0 right-0 z-50 
          bg-white/70 dark:bg-black/40 
          backdrop-blur-xl 
          shadow-[0_4px_20px_rgba(0,0,0,0.06)]
          border-b border-white/40 dark:border-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-8 md:px-20 h-20 flex items-center justify-between">
          {/* LOGO */}
          <p className="text-2xl font-bold text-sushiDark dark:text-white tracking-tight">
            SuShi
          </p>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-12 text-[16px] font-medium">
            {["Menu", "Gallery", "Chefs", "Contact"].map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -3 }}
                className="
                  cursor-pointer 
                  text-gray-600 dark:text-gray-300 
                  hover:text-sushiOrange 
                  transition 
                  relative
                "
              >
                {item}

                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-sushiOrange rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-sushiDark dark:text-white"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE DRAWER ================= */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-[#111] shadow-xl z-50 p-6"
      >
        <button
          onClick={() => setOpen(false)}
          className="text-2xl text-sushiDark dark:text-white mb-6"
        >
          ✕
        </button>

        <ul className="flex flex-col gap-6 text-lg text-sushiDark dark:text-gray-300">
          <li className="hover:text-sushiOrange">Menu</li>
          <li className="hover:text-sushiOrange">Gallery</li>
          <li className="hover:text-sushiOrange">Chefs</li>
          <li className="hover:text-sushiOrange">Contact</li>
        </ul>
      </motion.div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* ================= CONTENT ================= */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-20 flex-1">
        {/* ================= HERO ================= */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="pt-40 pb-24 grid md:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT */}
          <motion.div variants={fadeLeft} className="space-y-7">
            <p className="text-sushiOrange tracking-[0.25em] font-medium text-xs uppercase">
              Enjoy Delicious
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[62px] font-bold leading-tight text-sushiDark dark:text-white"
            >
              Fresh Sushi <br /> Everyday
            </motion.h1>

            <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
              Premium Japanese sushi prepared with fresh ingredients every day.
            </p>

            <motion.button
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-sushiOrange text-white rounded-full font-semibold shadow-[0_15px_35px_rgba(255,122,47,0.45)] hover:bg-[#ff6b17] transition text-lg"
            >
              Order Now
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div variants={fadeRight}>
            <Image
              src="/placeholder-hero.png"
              width={560}
              height={380}
              alt="hero sushi"
              priority
            />
          </motion.div>
        </motion.div>

        {/* ================= NEWLY ADDED ================= */}
        <section className="py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            transition={{ staggerChildren: 0.15 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeLeft} className="space-y-6">
              <p className="text-sushiOrange text-sm tracking-[0.25em] uppercase">
                Newly Added
              </p>

              <h2 className="text-5xl font-bold leading-tight text-sushiDark dark:text-white">
                Samurai Salmon <br />
                <span className="text-sushiOrange">Cheese Roll</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                A fusion masterpiece combining soft cheese with rich fresh salmon.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-10 py-4 bg-sushiOrange text-white rounded-full font-semibold shadow-lg hover:bg-[#ff6b17] transition"
              >
                Order Now
              </motion.button>
            </motion.div>

            <motion.div variants={fadeRight}>
              <Image
                src="/placeholder-added.png"
                width={480}
                height={350}
                alt="added sushi"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ================= POPULAR DISHES ================= */}
        <section className="py-28">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-14 text-sushiDark dark:text-white"
          >
            Popular Dishes
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {dishes.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="
                  bg-white dark:bg-[#1a1a1b] 
                  p-6 rounded-3xl shadow-lg 
                  hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer
                "
              >
                <Image
                  src={item.image}
                  width={180}
                  height={140}
                  alt={item.name}
                  className="mx-auto mb-4 rounded-xl object-contain"
                />

                <h3 className="text-lg font-semibold text-sushiDark dark:text-white text-center">
                  {item.name}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                  {item.desc}
                </p>

                <p className="text-sushiOrange font-bold text-center mt-2 text-lg">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= DELIVERY / PICKUP MERGED HERE ================= */}
        <DeliveryPickup />

        {/* ================= GALLERY ================= */}
        <section className="py-32">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 text-sushiDark dark:text-white"
          >
            Sushi <span className="text-sushiOrange">Gallery</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              "/gallery-1.png",
              "/gallery-2.png",
              "/gallery-3.png",
              "/gallery-4.png",
              "/gallery-5.png",
              "/gallery-6.png",
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="bg-white dark:bg-[#1a1a1b] rounded-3xl shadow-xl p-6 flex items-center justify-center hover:shadow-2xl transition cursor-pointer"
              >
                <Image
                  src={img}
                  width={300}
                  height={300}
                  alt="gallery sushi"
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= CHEFS ================= */}
        <section className="py-32">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-sushiDark dark:text-white"
          >
            Meet Our <span className="text-sushiOrange">Master Chefs</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Chef Saito", img: "/chef1.png" },
              { name: "Chef Nakamura", img: "/chef2.png" },
              { name: "Chef Tanaka", img: "/chef3.png" },
            ].map((chef, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1 }}
                className="bg-white dark:bg-[#1a1a1b] rounded-3xl p-6 flex flex-col items-center shadow-lg hover:-translate-y-2 transition"
              >
                <Image
                  src={chef.img}
                  width={200}
                  height={200}
                  alt={chef.name}
                  className="rounded-full mb-6 shadow-md object-cover"
                />
                <h3 className="text-xl font-semibold text-sushiDark dark:text-white">
                  {chef.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Master Chef</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-32">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-14 text-sushiDark dark:text-white"
          >
            What Our <span className="text-sushiOrange">Customers Say</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1 }}
                className="bg-white dark:bg-[#1a1a1b] p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  “Best sushi I've ever tasted. Fresh ingredients, amazing flavors.”
                </p>

                <div className="flex items-center gap-4 mt-5">
                  <Image
                    src={`/testimonial-${i}.png`}
                    width={50}
                    height={50}
                    alt="customer"
                    className="rounded-full shadow object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sushiDark dark:text-white">
                      Customer {i}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Happy Client
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#1f1b27] dark:bg-[#141218] rounded-3xl p-16 text-white shadow-xl overflow-hidden"
          >
            {/* BLUR DECOR */}
            <div className="absolute -right-24 -top-20 w-[380px] h-[380px] rounded-full overflow-hidden opacity-30 blur-xl pointer-events-none">
              <Image
                src="/placeholder-newsletter.png"
                alt="decor sushi"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -left-24 bottom-0 w-[280px] h-[280px] rounded-full overflow-hidden opacity-20 blur-2xl pointer-events-none">
              <Image
                src="/placeholder-newsletter.png"
                alt="decor sushi"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="relative z-[2] max-w-xl">
              <h3 className="text-4xl font-bold mb-3 text-orange-300">
                Newsletter
              </h3>

              <p className="text-gray-300 mb-10 text-lg">
                Receive offers, promotions & sushi updates.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 w-full md:w-80 bg-white text-black rounded-full outline-none border-2 border-transparent focus:border-sushiOrange transition"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white/10 hover:bg-white hover:text-sushiOrange text-white border border-white rounded-full font-semibold transition"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </section>

      {/* ================= FOOTER (Always at bottom) ================= */}
      <footer className="relative z-20 py-20 mt-10 text-gray-700 dark:text-gray-300 bg-sushiCream dark:bg-[#0d0d0f]">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <div className="grid md:grid-cols-4 gap-16 text-sm">
            <div>
              <h4 className="font-semibold text-xl text-sushiDark dark:text-white">
                SuShi
              </h4>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Best Japanese food in town.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Main Menu</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Menu</li>
                <li>Events</li>
                <li>Offer</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                <li>Contact</li>
                <li>Order & Returns</li>
                <li>Videos</li>
                <li>Reservation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <p>2464 Royal Ln, Mesa, NJ 45463</p>
              <p className="mt-2">9:00 AM — 11:00 PM</p>
            </div>
          </div>

          <p className="text-center mt-10 text-gray-500 dark:text-gray-400 text-xs">
            © 2025 SuShi. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
