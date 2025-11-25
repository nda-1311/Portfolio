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
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 group hover:shadow-lg transition-all duration-300"
            >
              <FiMail className="text-primary text-2xl group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                {data.personal.email}
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 group hover:shadow-lg transition-all duration-300"
            >
              <FiPhone className="text-primary text-2xl group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                {data.personal.phone}
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 group hover:shadow-lg transition-all duration-300"
            >
              <FiMapPin className="text-primary text-2xl group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                {data.personal.location}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
