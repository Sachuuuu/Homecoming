"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const petals = Array.from({ length: 18 });

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-couple.jpg"
          alt="Couple background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,13,16,0.72)_0%,rgba(91,15,26,0.42)_38%,rgba(26,13,16,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,42,58,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(198,161,91,0.12),transparent_24%)]" />

      <div className="absolute inset-0 overflow-hidden">
        {petals.map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#A12A3A]/70 to-[#F6EFEA]/20 blur-sm"
            style={{
              width: i % 3 === 0 ? 14 : 8,
              height: i % 3 === 0 ? 14 : 8,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 12 : -12, 0],
              opacity: [0.25, 0.8, 0.25]
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-shell relative z-10 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#E2C48A]"
          >
            Homecoming Celebration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="font-serif text-5xl leading-tight text-[#FFF4EE] drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-8xl"
          >
            Mahinsa <span className="text-[#E2C48A]">&</span> Buddhimanthi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-[#E8D3D7] sm:text-lg"
          >
            Together with their families invite you to celebrate their
            homecoming in warmth, tradition, and joy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="#rsvp"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#5B0F1A,#7A1626)] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_35px_rgba(91,15,26,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(91,15,26,0.28)] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/40"
            >
              RSVP Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}