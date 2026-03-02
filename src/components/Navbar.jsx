import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Global Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
          scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-[15deg] transition-transform duration-300">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-rubik font-black text-xl tracking-tighter text-slate-900 leading-none">
                LIBCO
              </span>
              <span className="font-quicksand text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] leading-none mt-1">
                Zambia Limited
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-quicksand font-bold text-sm text-slate-600 hover:text-blue-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="font-quicksand font-bold flex items-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-xl hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-100 transition-all cursor-pointer">
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-900 bg-slate-50 rounded-xl border border-slate-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* The Drawer */}
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] z-[70] shadow-2xl md:hidden px-8 pt-4 pb-12"
            >
              {/* Handle for visual cue */}
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8" />

              <div className="flex justify-between items-center mb-10">
                <h3 className="font-rubik font-bold text-2xl text-slate-900">Menu</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="font-quicksand font-bold text-xl text-slate-700 hover:text-blue-600 flex justify-between items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <button className="w-full font-quicksand font-extrabold bg-blue-600 text-white py-5 rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-95 transition-transform">
                  Request a Quote <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}