import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Hero = ({ data }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="hero-gradient relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <motion.div
          style={{ y, opacity }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-slate-900 dark:text-white leading-tight tracking-tight"
            >
              <span className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 block mb-2">
                Xin chào, tôi là
              </span>
              <span className="text-4xl md:text-5xl font-black block text-primary leading-tight">
                {data.personal.name}
              </span>
              <span className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 block mt-2">
                {data.personal.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              {data.personal.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mt-2"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="group flex items-center gap-2.5 min-w-[160px] justify-center rounded-xl h-14 px-7 bg-primary text-white text-base font-semibold hover:bg-blue-600 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                <FiMail className="group-hover:rotate-12 transition-transform" />
                <span>Liên Hệ Ngay</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div
                className="w-64 h-64 md:w-80 md:h-80 bg-center bg-no-repeat bg-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url("${data.personal.heroImage}")` }}
              />

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -z-10 inset-0 w-full h-full rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
