import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: "",
    });

    try {
      // EmailJS Configuration
      const result = await emailjs.sendForm(
        "service_aiahg2e", // Service ID
        "template_u82pwc9", // Template ID
        formRef.current,
        "m8NryUWomPLvi53yC" // Public Key
      );

      if (result.text === "OK") {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message:
            "Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.",
        });
        setFormData({ name: "", email: "", message: "" });

        // Tự động ẩn thông báo sau 5 giây
        setTimeout(() => {
          setStatus({
            submitting: false,
            submitted: false,
            error: false,
            message: "",
          });
        }, 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message:
          "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.",
      });

      // Tự động ẩn thông báo lỗi sau 5 giây
      setTimeout(() => {
        setStatus({
          submitting: false,
          submitted: false,
          error: false,
          message: "",
        });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 py-20 md:py-28 w-full"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3">
          Liên Hệ Với Tôi
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          Bạn có dự án thú vị? Hãy cùng nhau biến ý tưởng thành hiện thực!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Status Messages */}
          {status.submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
            >
              <FiCheckCircle className="text-green-600 dark:text-green-400 text-xl flex-shrink-0" />
              <p className="text-green-700 dark:text-green-300 text-sm">
                {status.message}
              </p>
            </motion.div>
          )}

          {status.error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
            >
              <FiAlertCircle className="text-red-600 dark:text-red-400 text-xl flex-shrink-0" />
              <p className="text-red-700 dark:text-red-300 text-sm">
                {status.message}
              </p>
            </motion.div>
          )}

          <motion.input
            whileFocus={{ scale: 1.02 }}
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-14 px-5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-900 dark:text-white"
            placeholder="Họ và tên"
            type="text"
            required
            disabled={status.submitting}
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-14 px-5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-900 dark:text-white"
            placeholder="Email của bạn"
            type="email"
            required
            disabled={status.submitting}
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none text-slate-900 dark:text-white"
            placeholder="Nội dung tin nhắn..."
            rows="6"
            required
            disabled={status.submitting}
          />

          <button
            type="submit"
            disabled={status.submitting}
            className="group flex items-center justify-center gap-2.5 h-14 px-6 bg-primary text-white text-base font-semibold rounded-xl hover:bg-blue-600 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status.submitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Đang gửi...</span>
              </>
            ) : (
              <>
                <FiSend className="group-hover:translate-x-1 transition-transform" />
                <span>Gửi Tin Nhắn</span>
              </>
            )}
          </button>
        </motion.form>

        {/* Map & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-64 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATXCJyH-eWDMws_TsmA0GZfIX4y_1Bu0QeadTC7HAqFG9JWy__63zHHqe0aD1H8EgczLMqty1IMOnrmWiseOJlWHER3GOME8opyMD88hrIzbkwf2HCIqHqGlLoNRmb0JXYbFqGQpB8tbCVXaCrj9xNTWARNwHlf3_Qysoww74xObY_7IH14u5GHhWMDf-eubxrOgyDzHWtNNRDKpLayGipEkeYPdTImYdCnWYddCqsipqJwHjTPfUtu-Rg21wT04VFZcrFY2fOzY_I"
              alt="Map showing location"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex justify-center md:justify-start gap-4">
            {[
              {
                icon: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.54 1.28.16 2.3.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z",
                href: "#",
              },
              {
                icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                href: "#",
              },
              {
                icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                href: "#",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
