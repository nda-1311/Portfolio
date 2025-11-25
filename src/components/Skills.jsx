import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight mb-3">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Công nghệ & công cụ tôi sử dụng hàng ngày
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {data.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 group-hover:bg-primary/10 transition-colors">
                <img
                  src={skill.icon}
                  alt={`${skill.name} Icon`}
                  className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="font-bold text-sm text-slate-900 dark:text-white text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
