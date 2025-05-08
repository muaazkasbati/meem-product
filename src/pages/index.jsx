// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Head from "next/head";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Meem Products</title>
//       </Head>
//       <Header />

//       <section className="max-w-[1200px] mx-auto pt-6 sm:pt-8 md:pt-10">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="flex-1 p-4">
//             <h1 className="text-4xl sm:text-5xl md:text-[80px] text-base/20 text-white font-bold uppercase mb-2">Experience the Joy of Urdu!</h1>
//             <p className="text-white text-base sm:text-lg md:text-[20px]">"میرے پہلے حروف" is a fun and colorful Urdu alphabet book that makes learning easy and exciting for little ones — with simple words, bright illustrations, and a layout that sparks curiosity and love for the Urdu language.</p>
//           </div>
//           <div className="flex-1 p-4 relative">
//             <img src="/images/mockup-1.png" alt="Mockup 1" className="w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto" />
//             <img src="/images/show-drop-1.png" alt="Mockup 1" className="absolute -bottom-32 -z-1" />
//           </div>
//         </div>
//       </section>

//       <section className="max-w-[1200px] mx-auto py-4 sm:py-6 md:py-24">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="flex-1 p-4 order-2 md:order-1 relative">
//             <img src="/images/mockup-2.png" alt="Mockup 2" className="w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto" />
//             <img src="/images/show-drop-2.png" alt="Mockup 1" className="absolute -bottom-32 -z-1" />
//           </div>
//           <div className="flex-1 p-4 order-1 md:order-2">
//             <h2 className="text-2xl sm:text-3xl md:text-[40px] text-base/20 text-white font-bold uppercase mb-2">What’s Inside ?</h2>
//             <ul className="text-white text-base sm:text-lg md:text-[20px] list-disc pl-5">
//               <li>Bright and bold illustrations to grab your child’s attention.</li>
//               <li>Easy-to-read Urdu words with clear visuals.</li>
//               <li>Carefully designed to build alphabet recognition and vocabulary.</li>
//             </ul>
//           </div>
//         </div>
//       </section>


//       <section className="max-w-[1200px] mx-auto pb-4 sm:pb-6 md:pb-14">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="flex-1 p-4">
//             <ul className="text-white text-base sm:text-lg md:text-[20px] list-disc pl-5">
//               <li>Track progress with fun star-marking activities after each letter.</li>
//               <li>Motivates kids to complete the full Urdu alphabet joyfully!</li>
//               <li>Designed for fun, interactive early education.</li>
//             </ul>
//           </div>
//           <div className="flex-1 p-4 relative">
//             <img src="/images/mockup-3.png" alt="Mockup 3" className="w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto" />
//             <img src="/images/show-drop-3.png" alt="Mockup 1" className="absolute -bottom-12 -z-1" />
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const textHover = {
    hover: { scale: 1.05, color: "#f0f0f0", transition: { duration: 0.3 } },
  };

  const imageHover = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <Head>
        <title>Meem Products</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header />
      </motion.div>

      <motion.section
        className="max-w-[1200px] mx-auto pt-6 sm:pt-8 md:pt-10"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="flex-1 p-4" whileHover="hover" variants={textHover}>
            <h1 className="text-4xl sm:text-5xl md:text-[80px] text-base/20 text-white font-bold uppercase mb-2">
              Experience the Joy of Urdu!
            </h1>
            <p className="text-white text-base sm:text-lg md:text-[20px]">
              "میرے پہلے حروف" is a fun and colorful Urdu alphabet book that makes learning easy and exciting for little ones — with simple words, bright illustrations, and a layout that sparks curiosity and love for the Urdu language.
            </p>
          </motion.div>
          <motion.div className="flex-1 p-4 relative" whileHover="hover" variants={imageHover}>
            <img src="/images/mockup-1.png" alt="Mockup 1" className="w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto" />
            <img src="/images/show-drop-1.png" alt="Shadow 1" className="absolute -bottom-32 -z-1" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="max-w-[1200px] mx-auto py-4 sm:py-6 md:py-24"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="flex-1 p-4 order-2 md:order-1 relative" whileHover="hover" variants={imageHover}>
            <img src="/images/mockup-2.png" alt="Mockup 2" className="w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto" />
            <img src="/images/show-drop-2.png" alt="Shadow 2" className="absolute -bottom-32 -z-1" />
          </motion.div>
          <motion.div className="flex-1 p-4 order-1 md:order-2" whileHover="hover" variants={textHover}>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] text-base/20 text-white font-bold uppercase mb-2">
              What’s Inside ?
            </h2>
            <ul className="text-white text-base sm:text-lg md:text-[20px] list-disc pl-5">
              <li>Bright and bold illustrations to grab your child’s attention.</li>
              <li>Easy-to-read Urdu words with clear visuals.</li>
              <li>Carefully designed to build alphabet recognition and vocabulary.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="max-w-[1200px] mx-auto pb-4 sm:pb-6 md:pb-14"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="flex-1 p-4" whileHover="hover" variants={textHover}>
            <ul className="text-white text-base sm:text-lg md:text-[20px] list-disc pl-5">
              <li>Track progress with fun star-marking activities after each letter.</li>
              <li>Motivates kids to complete the full Urdu alphabet joyfully!</li>
              <li>Designed for fun, interactive early education.</li>
            </ul>
          </motion.div>
          <motion.div className="flex-1 p-4 relative" whileHover="hover" variants={imageHover}>
            <img src="/images/mockup-3.png" alt="Mockup 3" className="w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto" />
            <img src="/images/show-drop-3.png" alt="Shadow 3" className="absolute -bottom-12 -z-1" />
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}