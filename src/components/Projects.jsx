import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
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
      className="max-w-6xl mx-auto px-4 py-20 md:py-28"
      id="projects"
    >
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
        <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3">
          Dự Án Nổi Bật
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          Những sản phẩm tôi tự hào đã xây dựng
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{
              y: -12,
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-slate-200 dark:border-slate-700 flex flex-col"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none z-10" />

            {/* Image Container */}
            <div className="relative overflow-hidden aspect-video">
              <motion.div
                className="w-full h-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("${project.image}")` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Shine effect on image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ transform: "skewX(-20deg)" }}
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative z-20">
              <motion.h3
                className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                {project.description}
              </p>
              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl h-11 px-5 bg-primary text-white text-sm font-semibold hover:bg-blue-600 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all w-full group/button"
              >
                Xem Chi Tiết
                <FiExternalLink className="group-hover/button:rotate-45 group-hover/button:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
