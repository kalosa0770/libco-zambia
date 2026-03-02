import { motion } from "framer-motion";
import asset1 from "../assets/asset1.png";

export default function HeroSection() {
  return (
    <header className="relative bg-white overflow-hidden min-h-[100svh] lg:min-h-[95vh] flex items-center">
      {/* Background Decorative Blur */}
      <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Professional Asymmetric Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left order-2 lg:order-1"
          >
            {/* Tagline using your Quicksand variable */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border-l-4 border-libco-red mb-6">
              <span className="font-quicksand text-[10px] md:text-sm font-bold text-slate-900 uppercase tracking-[0.15em]">
                Libco Zambia Ltd • Established Global Partner
              </span>
            </div>

            {/* Title using your Rubik variable */}
            <h1 className="font-rubik text-3xl md:text-5xl font-extrabold text-libco-red leading-[1.1] tracking-tight">
              First-Class <br />
              Unified Services
            </h1>

            {/* Body Text using your Quicksand variable */}
            <p className="font-quicksand mt-6 text-sm md:text-lg text-slate-900 leading-relaxed max-w-xl font-medium">
              LIBCO (LB) is a service-oriented leader providing seamless business solutions 
              to reputable organizations. Bridging quality and innovation across 
              <span className="text-libco-red font-bold"> Africa, Asia, Europe, and the US.</span>
            </p>

            {/* Buttons using your Quicksand variable */}
            <div className="font-quicksand mt-10 flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-libco-red/20 transition-all text-center cursor-pointer"
              >
                Explore Solutions
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-slate-50 transition-all text-center cursor-pointer"
              >
                View Partnerships
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content: The Visual Asset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full max-w-[550px] lg:max-w-none mx-auto lg:mx-0"
          >
            {/* The "Infotek" Mask (Organic Shape) */}
            <div className="relative z-20 overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[650px] border-[12px] border-slate-50" 
                 style={{ 
                   borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                 }}>
              <img 
                    src={asset1}
                    alt="LIBCO Global Team" 
                className="w-full h-full object-cover p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
            </div>

            
          </motion.div>
        </div>
      </div>
    </header>
  );
}