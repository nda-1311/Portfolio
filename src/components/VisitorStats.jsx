import { motion } from "framer-motion";
import { useVisitorTracker } from "../hooks/useVisitorTracker";

const VisitorStats = () => {
  const { totalVisits, onlineUsers, loading } = useVisitorTracker();

  if (loading) {
    return null; // Không hiển thị gì khi đang loading
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2"
    >
      {/* Total Visits */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <svg
          className="w-4 h-4 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {totalVisits.toLocaleString()} lượt xem
        </span>
      </motion.div>

      {/* Online Users */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-2 h-2 bg-green-500 rounded-full"
        />
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {onlineUsers} đang online
        </span>
      </motion.div>
    </motion.div>
  );
};

export default VisitorStats;
