import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Projects = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 py-20 md:py-28"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3">
          Dự Án Nổi Bật
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          Những sản phẩm tôi tự hào đã xây dựng
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            <div className="relative overflow-hidden aspect-video">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url("${project.image}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 rounded-xl h-11 px-5 bg-primary text-white text-sm font-semibold hover:bg-blue-600 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                whileHover={{
                  x: 3,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                Xem Chi Tiết
                <FiExternalLink className="group-hover:rotate-45 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
