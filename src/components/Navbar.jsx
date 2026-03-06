import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield, Send, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "788e8c75-eb09-401e-993d-4aa98d1df4b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    toast(data.success ? "Your message has been sent successfully!" : "There was an error sending your message. Please try again.");
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* LEFT SIDE: Brand */}
          <div className="flex items-center gap-2 md:gap-5">
            <button
              className="lg:hidden p-2 text-slate-900 bg-white shadow-sm rounded-lg border border-slate-100 active:scale-90 transition-transform"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
              <img 
                src={logo} 
                alt="LIBCO Logo" 
                className="w-7 md:w-11 h-7 md:h-11 object-contain transition-transform group-hover:rotate-3" 
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-rubik text-[13px] md:text-xl font-black text-libco-red leading-none tracking-tight uppercase">
                  LIBCO <span className="text-slate-900">ZAMBIA</span>
                </h1>
                <p className="text-[7px] md:text-[10px] font-quicksand font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 hidden xs:block">
                  Limited
                </p>
              </div>
            </div>
          </div>

          {/* CENTER: Desktop Nav */}
          <ul className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-quicksand font-bold text-[12px] uppercase tracking-[0.15em] text-slate-900 hover:text-libco-red transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-libco-red transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE: Modal Trigger */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsQuoteOpen(true)}
              className="font-quicksand font-extrabold text-[9px] md:text-[11px] uppercase tracking-widest bg-slate-900 text-white px-4 md:px-7 py-2.5 md:py-3.5 rounded-full hover:bg-libco-red hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span className="hidden sm:inline">Get in Touch</span>
              <span className="sm:hidden">Contact us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- RESPONSIVE MODAL: GET A QUOTE --- */}
      <AnimatePresence>
        {isQuoteOpen && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl bg-white rounded-t-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto"
            >
              <div className="p-6 md:p-12">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div>
                    <h3 className="font-rubik text-xl md:text-3xl font-black text-slate-900 uppercase">
                      Get in <span className="text-libco-red">Touch</span>
                    </h3>
                    <p className="font-quicksand font-bold text-slate-900 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                      First Class Unified Services
                    </p>
                  </div>
                  <button onClick={() => setIsQuoteOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-6 h-6 text-slate-900" />
                  </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-900 uppercase ml-2">Full Name</label>
                      <input type="text" name="fullName" placeholder="Enter your full name" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-quicksand text-sm focus:outline-none focus:border-libco-red" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-900 uppercase ml-2">Email Address</label>
                      <input type="email" name="email" placeholder="Enter your email address" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-quicksand text-sm focus:outline-none focus:border-libco-red" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-900 uppercase ml-2">Inquiry Type</label>
                    <select name="inquiryType" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-quicksand text-sm text-slate-500 focus:outline-none focus:border-libco-red">
                      <option>Industrial Procurement</option>
                      <option>Management Consultancy</option>
                      <option>Logistics Solutions</option>
                      <option>Training</option>
                      <option>Other Services</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-900 uppercase ml-2">Message</label>
                    <textarea name="message" rows={3} placeholder="Provide details about the items or services needed..." className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-quicksand text-sm focus:outline-none focus:border-libco-red" />
                  </div>
                  
                  <button type="submit" className="w-full bg-libco-red text-white font-quicksand font-black py-4 md:py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-libco-red/20 uppercase text-[11px] tracking-widest mt-2">
                    Submit Request <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-6 md:mt-8 flex items-center gap-3 text-slate-400 justify-center">
                  <CheckCircle2 className="w-4 h-4 text-libco-red" />
                  <span className="text-[9px] font-quicksand font-bold uppercase tracking-[0.2em]">Enterprise-Ready Response</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MOBILE DRAWER (Left Side) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/10 backdrop-blur-[2px] z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 400 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[280px] bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-50">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-6 h-6" />
                    <span className="font-rubik font-bold text-[10px] text-slate-900 uppercase tracking-widest">Menu</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400">
                    <X className="w-5 h-5" />
                  </button>
              </div>

              <div className="flex-1 px-3 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center p-4 rounded-xl font-quicksand font-bold text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="p-6 bg-slate-50/80 border-t border-slate-100">
                <button 
                  onClick={() => { setIsOpen(false); setIsQuoteOpen(true); }}
                  className="w-full font-quicksand font-extrabold text-[10px] uppercase bg-libco-red text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-libco-red-100"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}