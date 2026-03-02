import { motion } from "framer-motion";

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 border-l-4 border-blue-600 mb-6">
              <span className="font-quicksand text-[10px] md:text-sm font-bold text-blue-800 uppercase tracking-[0.15em]">
                Republic of Zambia • Established Global Partner
              </span>
            </div>

            {/* Title using your Rubik variable */}
            <h1 className="font-rubik text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              First-Class <br />
              <span className="text-blue-600">Unified Services</span>
            </h1>

            {/* Body Text using your Quicksand variable */}
            <p className="font-quicksand mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
              LIBCO (LB) is a service-oriented leader providing seamless business solutions 
              to reputable organizations. Bridging quality and innovation across 
              <span className="text-blue-900 font-bold"> Africa, Asia, Europe, and the US.</span>
            </p>

            {/* Buttons using your Quicksand variable */}
            <div className="font-quicksand mt-10 flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all text-center cursor-pointer"
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
            <div className="relative z-20 overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[650px]" 
                 style={{ 
                   borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                 }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                alt="LIBCO Global Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
            </div>

            
          </motion.div>
        </div>
      </div>
    </header>
  );
}