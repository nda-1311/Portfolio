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
          {/* Google Maps Embed */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-64 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8578756583447!2d106.66834877583384!3d10.822200989334916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752917f6b0b5b5%3A0x8d6f1d8c8c8c8c8c!2zNjkgTMOqIFbEg24gVGjhu40sIFBoxrDhu51uZyAxNCwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1732588800000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - 69 Lê Văn Thọ, Gò Vấp, TP.HCM"
            ></iframe>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            {[
              {
                name: "GitHub",
                icon: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.54 1.28.16 2.3.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z",
                href: "https://github.com/nda-1311",
              },
              {
                name: "Facebook",
                icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                href: "https://www.facebook.com/nda.1311",
              },
              {
                name: "Zalo",
                // Zalo official logo SVG - uses multiple paths
                icon: [
                  "M 78.4 2.18 H 25.644 L 25.643 2.18 c 1.994 0.013 3.989 0.025 5.984 0.025 c 0.119 0 0.276 -0.059 0.335 0.136 c -0.038 0.352 -0.394 0.394 -0.61 0.53 c -3.891 2.28 -7.447 5.01 -10.431 8.388 c -4.929 5.578 -8.35 11.982 -9.507 19.429 c -2.043 13.143 2.064 24.303 11.355 33.615 c 1.649 1.67 1.865 2.967 0.551 5.205 c -1.589 2.691 -4.01 4.518 -6.582 6.188 c -0.276 0.157 -0.551 0.352 -0.826 0.53 c -0.411 0.352 -0.157 0.53 0.195 0.687 v -0.008 c 5.01 0.983 9.901 0.314 14.716 -1.157 c 1.632 -0.492 3.259 -0.983 4.912 -1.394 c 1.119 -0.297 2.297 -0.237 3.378 0.157 c 12.457 4.281 24.752 3.891 36.853 -1.416 c 4.929 -2.179 9.43 -5.247 13.241 -9.074 c 0.195 -0.195 0.335 -0.492 0.687 -0.513 c 0.178 0.275 0.081 0.568 0.081 0.865 v 11.495 c 0 0.002 0 0.003 0 0.005 L 90 75.865 V 13.78 C 90 7.373 84.806 2.18 78.4 2.18 z",
                  "M 54.896 33.548 v -1.127 h 3.374 v 15.835 h -1.928 c -0.793 0 -1.441 -0.64 -1.441 -1.433 l 0 0 c -1.361 0.992 -3.039 1.585 -4.853 1.585 c -4.544 0 -8.227 -3.679 -8.227 -8.218 s 3.683 -8.218 8.227 -8.218 C 51.857 31.963 53.536 32.552 54.896 33.548 C 54.896 33.544 54.896 33.548 54.896 33.548 z M 40.943 27.331 v 0.513 c 0 0.958 -0.127 1.738 -0.75 2.657 l -0.076 0.085 c -0.136 0.153 -0.454 0.517 -0.606 0.712 L 28.681 44.886 h 12.258 v 1.924 c 0 0.797 -0.648 1.441 -1.445 1.441 H 23.617 v -0.907 c 0 -1.11 0.275 -1.606 0.623 -2.123 l 11.541 -14.288 H 24.095 v -3.607 h 16.848 V 27.331 z M 62.36 48.256 c -0.665 0 -1.204 -0.538 -1.204 -1.199 V 27.331 h 3.611 v 20.925 H 62.36 z M 75.444 31.862 c 4.573 0 8.282 3.709 8.282 8.278 c 0 4.573 -3.709 8.278 -8.282 8.278 c -4.573 0 -8.282 -3.709 -8.282 -8.278 C 67.162 35.57 70.867 31.862 75.444 31.862 z M 50.043 45.018 c 2.674 0 4.84 -2.166 4.84 -4.836 c 0 -2.666 -2.166 -4.832 -4.84 -4.832 c -2.674 0 -4.84 2.166 -4.84 4.832 C 45.203 42.856 47.373 45.018 50.043 45.018 z M 75.444 45.013 c 2.687 0 4.87 -2.183 4.87 -4.87 c 0 -2.687 -2.183 -4.866 -4.87 -4.866 c -2.691 0 -4.87 2.179 -4.87 4.866 C 70.57 42.831 72.748 45.013 75.444 45.013 z",
                  "M 16.106 76.912 c -0.352 -0.157 -0.606 -0.335 -0.195 -0.687 c 0.276 -0.178 0.551 -0.373 0.826 -0.53 c 2.573 -1.67 4.993 -3.497 6.582 -6.188 c 1.314 -2.238 1.098 -3.535 -0.551 -5.205 c -9.291 -9.312 -13.398 -20.472 -11.355 -33.615 c 1.157 -7.447 4.578 -13.851 9.507 -19.429 c 2.984 -3.378 6.54 -6.108 10.431 -8.388 c 0.216 -0.136 0.572 -0.178 0.61 -0.53 c -0.059 -0.195 -0.216 -0.136 -0.335 -0.136 c -6.62 0 -13.241 -0.14 -19.84 0.038 C 5.48 2.421 0 7.313 0 14.327 c 0.038 20.51 0 41.003 0 61.491 c 0 6.349 4.853 11.673 11.198 11.927 c 5.366 0.199 10.749 0.021 16.11 0.021 c 0.394 0 0.788 0.021 1.174 0.064 h 28.389 c 7.074 0 14.144 0.038 21.218 0 h 0.097 c 6.561 -0.059 11.825 -5.404 11.787 -11.965 V 64.37 c 0 -0.297 0.097 -0.589 -0.081 -0.865 c -0.352 0.021 -0.492 0.318 -0.687 0.513 c -3.81 3.827 -8.312 6.896 -13.241 9.074 c -12.101 5.307 -24.396 5.696 -36.853 1.416 c -1.081 -0.394 -2.259 -0.453 -3.378 -0.157 c -1.653 0.411 -3.281 0.903 -4.912 1.394 c -4.815 1.471 -9.706 2.14 -14.716 1.157",
                ],
                href: "https://zalo.me/0358102981",
                viewBox: "0 0 90 90",
                isMultiPath: true,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                title={social.name}
              >
                <div className="w-7 h-7 flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    fill={social.name === "Zalo" ? "none" : "currentColor"}
                    viewBox={social.viewBox || "0 0 24 24"}
                  >
                    {social.isMultiPath ? (
                      social.icon.map((path, pathIndex) => (
                        <path
                          key={pathIndex}
                          d={path}
                          fill={
                            social.name === "Zalo"
                              ? pathIndex === 0
                                ? "#fff"
                                : "currentColor"
                              : undefined
                          }
                        />
                      ))
                    ) : (
                      <path d={social.icon} />
                    )}
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
