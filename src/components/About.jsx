import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const About = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Contact card animation variants
  const contactCardVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  // Contact info with colors
  const contactInfo = [
    {
      icon: FiMail,
      value: data.personal.email,
      bgFrom: "from-blue-50",
      bgTo: "to-blue-100",
      darkBgFrom: "dark:from-blue-900/30",
      darkBgTo: "dark:to-blue-800/30",
      iconColor: "text-blue-600",
      darkIconColor: "dark:text-blue-400",
      glowColor: "from-blue-400/20 via-blue-400/20 to-blue-400/20",
    },
    {
      icon: FiPhone,
      value: data.personal.phone,
      bgFrom: "from-green-50",
      bgTo: "to-green-100",
      darkBgFrom: "dark:from-green-900/30",
      darkBgTo: "dark:to-green-800/30",
      iconColor: "text-green-600",
      darkIconColor: "dark:text-green-400",
      glowColor: "from-green-400/20 via-green-400/20 to-green-400/20",
    },
    {
      icon: FiMapPin,
      value: data.personal.location,
      bgFrom: "from-purple-50",
      bgTo: "to-purple-100",
      darkBgFrom: "dark:from-purple-900/30",
      darkBgTo: "dark:to-purple-800/30",
      iconColor: "text-purple-600",
      darkIconColor: "dark:text-purple-400",
      glowColor: "from-purple-400/20 via-purple-400/20 to-purple-400/20",
    },
  ];

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 py-20 md:py-28"
      id="about"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-5 gap-16 items-center"
      >
        {/* Image */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl ring-4 ring-slate-100 dark:ring-slate-800"
            style={{ backgroundImage: `url("${data.personal.aboutImage}")` }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-3 flex flex-col gap-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight"
          >
            Về Tôi
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
          >
            {data.about.description}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 mt-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={contactCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  delay: 0.6 + index * 0.1,
                }}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden border border-slate-200/50 dark:border-slate-700/50"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.glowColor} blur-xl`}
                  />
                </div>

                {/* Icon Container */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className={`relative p-3 rounded-lg bg-gradient-to-br ${info.bgFrom} ${info.bgTo} ${info.darkBgFrom} ${info.darkBgTo} flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <info.icon
                    className={`${info.iconColor} ${info.darkIconColor} text-2xl relative z-10`}
                  />
                </motion.div>

                {/* Text */}
                <motion.span
                  className="text-slate-700 dark:text-slate-200 font-medium relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {info.value}
                </motion.span>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ transform: "skewX(-20deg)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
