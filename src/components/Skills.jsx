import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation variants với spring
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight mb-3">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Công nghệ & công cụ tôi sử dụng hàng ngày
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          {data.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-2xl" />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl" />
              </div>

              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="relative p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/50 group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-all duration-500"
              >
                <motion.img
                  src={skill.icon}
                  alt={`${skill.name} Icon`}
                  className="h-12 w-12 object-contain relative z-10"
                  whileHover={{
                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.p
                className="font-bold text-sm text-slate-900 dark:text-white text-center relative z-10"
                whileHover={{
                  scale: 1.05,
                  color: "#3b82f6",
                }}
                transition={{ duration: 0.2 }}
              >
                {skill.name}
              </motion.p>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
