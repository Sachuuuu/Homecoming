"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EnvelopeOpening({
  onOpen
}: {
  onOpen: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const [finishing, setFinishing] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      setFinishing(true);
    }, 1150);

    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(161,42,58,0.24),transparent_32%),linear-gradient(180deg,#1A0D10_0%,#2A1116_100%)]"
      animate={
        finishing
          ? {
              opacity: 0,
              scale: 1.04,
              filter: "blur(10px)"
            }
          : {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            }
      }
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ transformOrigin: "center center" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={finishing ? { opacity: [0, 0.2, 0] } : { opacity: 0 }}
        transition={{
          duration: 0.85,
          ease: "easeOut"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,161,91,0.22),transparent_42%)]" />
      </motion.div>

      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open envelope"
        className="relative h-full w-full cursor-pointer"
      >
        <div className="absolute inset-0 flex items-end justify-center px-4 pb-10 sm:pb-14">
          <div className="relative w-full max-w-[760px]">
            {!opening && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 text-center text-sm uppercase tracking-[0.35em] text-[#E2C48A]"
              >
                Tap to Open
              </motion.p>
            )}

            <motion.div
              animate={
                finishing
                  ? { y: -22, scale: 1.015 }
                  : { y: 0, scale: 1 }
              }
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative mx-auto aspect-square w-full"
              style={{ transformOrigin: "bottom center" }}
            >
              {/* Closed envelope */}
              <motion.div
                initial={{ opacity: 1, scale: 1, y: 0 }}
                animate={
                  opening
                    ? { opacity: 0, scale: 0.988, y: 6 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                transition={{
                  duration: 1.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute inset-0"
                style={{ transformOrigin: "bottom center" }}
              >
                <Image
                  src="/envelope/envelop.png"
                  alt="Closed envelope"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_26px_60px_rgba(0,0,0,0.32)]"
                />
              </motion.div>

              {/* Opened envelope */}
              <motion.div
                initial={{ opacity: 0, scale: 0.975, y: 12 }}
                animate={
                  opening
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.975, y: 12 }
                }
                transition={{
                  duration: 1.15,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute inset-0"
                style={{ transformOrigin: "bottom center" }}
              >
                <Image
                  src="/envelope/opened.png"
                  alt="Opened envelope"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_26px_60px_rgba(0,0,0,0.32)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}