import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Giới Thiệu", href: "#about" },
    { label: "Kỹ Năng", href: "#skills" },
    { label: "Dự Án", href: "#projects" },
    { label: "Liên Hệ", href: "#contact" },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md shadow-md"
          : "bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 border-b border-slate-200 dark:border-slate-800">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-900 dark:text-white hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            <span className="material-symbols-outlined text-primary text-2xl">
              interests
            </span>
            <h2 className="text-lg font-bold leading-tight tracking-tight">
              Portfolio Của Tôi
            </h2>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  opacity: 0,
                  animation: `fadeInDown 0.5s ease-out ${
                    index * 0.1
                  }s forwards`,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-900 dark:text-white p-2"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-b border-slate-200 dark:border-slate-800"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>

      {/* Material Icons Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </header>
  );
};

export default Header;
