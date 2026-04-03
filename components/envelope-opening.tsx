// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function EnvelopeOpening({
//   onOpen
// }: {
//   onOpen: () => void;
// }) {
//   const [opening, setOpening] = useState(false);
//   const [finishing, setFinishing] = useState(false);

//   const handleOpen = () => {
//     if (opening) return;

//     setOpening(true);

//     setTimeout(() => {
//       setFinishing(true);
//     }, 1150);

//     setTimeout(() => {
//       onOpen();
//     }, 2000);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[120] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(161,42,58,0.24),transparent_32%),linear-gradient(180deg,#1A0D10_0%,#2A1116_100%)]"
//       animate={
//         finishing
//           ? {
//               opacity: 0,
//               scale: 1.04,
//               filter: "blur(10px)"
//             }
//           : {
//               opacity: 1,
//               scale: 1,
//               filter: "blur(0px)"
//             }
//       }
//       transition={{
//         duration: 0.85,
//         ease: [0.22, 1, 0.36, 1]
//       }}
//       style={{ transformOrigin: "center center" }}
//     >
//       <motion.div
//         className="pointer-events-none absolute inset-0"
//         animate={finishing ? { opacity: [0, 0.2, 0] } : { opacity: 0 }}
//         transition={{
//           duration: 0.85,
//           ease: "easeOut"
//         }}
//       >
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,161,91,0.22),transparent_42%)]" />
//       </motion.div>

//       <button
//         type="button"
//         onClick={handleOpen}
//         aria-label="Open envelope"
//         className="relative h-full w-full cursor-pointer"
//       >
//         <div className="absolute inset-0 flex items-end justify-center px-4 pb-10 sm:pb-14">
//           <div className="relative w-full max-w-[760px]">
//             {!opening && (
//               <motion.p
//                 initial={{ opacity: 0, y: 8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-6 text-center text-sm uppercase tracking-[0.35em] text-[#E2C48A]"
//               >
//                 Tap to Open
//               </motion.p>
//             )}

//             <motion.div
//               animate={
//                 finishing
//                   ? { y: -22, scale: 1.015 }
//                   : { y: 0, scale: 1 }
//               }
//               transition={{
//                 duration: 0.85,
//                 ease: [0.22, 1, 0.36, 1]
//               }}
//               className="relative mx-auto aspect-square w-full"
//               style={{ transformOrigin: "bottom center" }}
//             >
//               {/* Closed envelope */}
//               <motion.div
//                 initial={{ opacity: 1, scale: 1, y: 0 }}
//                 animate={
//                   opening
//                     ? { opacity: 0, scale: 0.988, y: 6 }
//                     : { opacity: 1, scale: 1, y: 0 }
//                 }
//                 transition={{
//                   duration: 1.05,
//                   ease: [0.22, 1, 0.36, 1]
//                 }}
//                 className="absolute inset-0"
//                 style={{ transformOrigin: "bottom center" }}
//               >
//                 <Image
//                   src="/envelope/envelop.png"
//                   alt="Closed envelope"
//                   fill
//                   priority
//                   className="object-contain object-bottom drop-shadow-[0_26px_60px_rgba(0,0,0,0.32)]"
//                 />
//               </motion.div>

//               {/* Opened envelope */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.975, y: 12 }}
//                 animate={
//                   opening
//                     ? { opacity: 1, scale: 1, y: 0 }
//                     : { opacity: 0, scale: 0.975, y: 12 }
//                 }
//                 transition={{
//                   duration: 1.15,
//                   delay: 0.08,
//                   ease: [0.22, 1, 0.36, 1]
//                 }}
//                 className="absolute inset-0"
//                 style={{ transformOrigin: "bottom center" }}
//               >
//                 <Image
//                   src="/envelope/opened.png"
//                   alt="Opened envelope"
//                   fill
//                   priority
//                   className="object-contain object-bottom drop-shadow-[0_26px_60px_rgba(0,0,0,0.32)]"
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </button>
//     </motion.div>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function EnvelopeOpening({
//   onOpen
// }: {
//   onOpen: () => void;
// }) {
//   const [opening, setOpening] = useState(false);
//   const [finishing, setFinishing] = useState(false);

//   const handleOpen = () => {
//     if (opening) return;

//     setOpening(true);

//     setTimeout(() => {
//       setFinishing(true);
//       onOpen();
//     }, 900);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[120] overflow-hidden"
//       style={{
//         perspective: "1600px",
//         background:
//           "radial-gradient(circle at top, rgba(161,42,58,0.25), transparent 40%), linear-gradient(180deg,#14080A,#2A1116)"
//       }}
//       initial={{ opacity: 0 }}
//       animate={
//         finishing
//           ? { opacity: 0, scale: 1.05, filter: "blur(10px)" }
//           : { opacity: 1 }
//       }
//       transition={{ duration: 1.2, ease: "easeOut" }}
//     >
//       <button onClick={handleOpen} className="relative w-full h-full">

//         {/* TAP TEXT */}
//         {!opening && (
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute bottom-10 w-full text-center text-sm uppercase tracking-[0.35em] text-[#E2C48A]"
//           >
//             Tap to Open
//           </motion.p>
//         )}

//         {/* ===================== */}
//         {/* TOP FLAP (OVERSIZED) */}
//         {/* ===================== */}
//         <motion.div
//           className="fixed inset-0 origin-bottom z-[30]"
//           initial={{ rotateX: 0 }}
//           animate={opening ? { rotateX: -165 } : { rotateX: 0 }}
//           transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             transformStyle: "preserve-3d",
//             scale: 1.35,              // 🔥 BIGGER COVERAGE
//             top: "-10%"              // 🔥 overscan top
//           }}
//         >
//           <Image
//             src="/envelope/flap.png"
//             alt="top flap"
//             fill
//             priority
//             className="object-cover"
//           />
//         </motion.div>

//         {/* ===================== */}
//         {/* BOTTOM FLAP (OVERSIZED + FLIPPED) */}
//         {/* ===================== */}
//         <motion.div
//           className="fixed inset-0 origin-top z-[20]"
//           initial={{ rotateX: 0 }}
//           animate={opening ? { rotateX: 165 } : { rotateX: 0 }}
//           transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             transformStyle: "preserve-3d",
//             scale: 1.35,            // 🔥 MATCH TOP
//             bottom: "-10%"          // 🔥 overscan bottom
//           }}
//         >
//           <div className="w-full h-full rotate-180">
//             <Image
//               src="/envelope/flap.png"
//               alt="bottom flap"
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* ===================== */}
//         {/* WAX SEAL */}
//         {/* ===================== */}
//         <motion.div
//           className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[40]"
//           animate={
//             opening
//               ? { scale: 0.3, opacity: 0 }
//               : { scale: 1, opacity: 1 }
//           }
//           transition={{ duration: 0.5 }}
//         >
//           <div
//             className="w-20 h-20 rounded-full flex items-center justify-center"
//             style={{
//               background:
//                 "radial-gradient(circle,#d4af37,#b8962e)",
//               border: "5px solid #a3831f",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
//             }}
//           >
//             <span className="text-black text-xl font-serif tracking-widest">
//               B&M
//             </span>
//           </div>
//         </motion.div>

//         {/* DARK OVERLAY */}
//         <motion.div
//           className="fixed inset-0 bg-black pointer-events-none"
//           initial={{ opacity: 0 }}
//           animate={opening ? { opacity: 0.25 } : { opacity: 0 }}
//         />
//       </button>
//     </motion.div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function EnvelopeOpening({
  onOpen,
}: {
  onOpen: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Unmount and reveal the main page smoothly after the main flaps finish sliding
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-[120] overflow-hidden bg-transparent flex items-center justify-center">
      
      {/* Invisible full-screen button to catch clicks anywhere */}
      <div 
        className="absolute inset-0 z-[100] cursor-pointer" 
        onClick={handleOpen} 
      />

      {!isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-16 z-[130] animate-pulse text-sm uppercase tracking-[0.35em] text-[#E2C48A] pointer-events-none drop-shadow-md"
        >
          Tap to Open
        </motion.p>
      )}

      {/* ========================================== */}
      {/* LAYER 1: BOTTOM FLAP (Moves DOWN)          */}
      {/* ========================================== */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 h-[130vh] pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: isOpen ? "130vh" : "0%" }} 
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }} 
      >
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full rotate-180 text-[#1A0D10] drop-shadow-[0_-8px_16px_rgba(0,0,0,0.6)]"
        >
          {/* Classic sharp V-shape meeting at X=50, Y=75 */}
          <path 
            d="M 0 0 H 100 V 50 L 50 75 L 0 50 Z" 
            fill="currentColor" 
          />
        </svg>
      </motion.div>

      {/* ========================================== */}
      {/* LAYER 2: TOP FLAP (Moves UP)               */}
      {/* ========================================== */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 h-[70vh] pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: isOpen ? "-100vh" : "0%" }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
      >
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full text-[#2A1116]"
          style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.5))" }}
        >
          {/* Classic sharp V-shape meeting at X=50, Y=75 */}
          <path 
            d="M 0 0 H 100 V 50 L 50 75 L 0 50 Z" 
            fill="currentColor" 
          />
        </svg>
      </motion.div>

      {/* ========================================== */}
      {/* LAYER 3: WAX SEAL (Moves DOWN Independently) */}
      {/* ========================================== */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        initial={{ y: "0%", opacity: 1 }}
        // Moves further down (150vh) and disappears slightly as it drops
        animate={{ y: isOpen ? "150vh" : "0%", opacity: isOpen ? 0.4 : 1 }} 
        // 1.0s duration is much faster than the 1.4s bottom flap, causing it to detach and fall independently
        transition={{ duration: 1.0, ease: [0.77, 0, 0.175, 1] }}
      >
        {/* Adjusted top position to exactly 52.5vh to perfectly lock onto the sharp point */}
        <div 
          className="absolute left-1/2 w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] flex items-center justify-center"
          style={{ 
            top: "52.5vh", 
            transform: "translate(-50%, -50%)" 
          }} 
        >
          {/* Your PNG Seal Image */}
          <Image 
            src="/envelope/seal.png" 
            alt="Wax Seal" 
            fill 
            className="object-contain" 
            priority 
            unoptimized
          />
            
          {/* The M&B Initials perfectly centered over the image */}
          <span className="relative z-10 font-serif text-3xl sm:text-4xl tracking-wider text-[#E2C48A] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            M&B
          </span>
          
        </div>
      </motion.div>

    </div>
  );
}