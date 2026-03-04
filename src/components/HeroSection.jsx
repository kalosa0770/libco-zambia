import { motion } from "framer-motion";
import asset1 from "../assets/asset1.png";

export default function HeroSection() {
  // Animation Variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <header className="relative overflow-hidden min-h-[100svh] flex items-center bg-white">
      {/* 1. Refined Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        {/* Soft Gradient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-red-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100/80 backdrop-blur-sm border border-slate-200 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-libco-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-libco-red"></span>
              </span>
              <span className="font-quicksand text-[11px] md:text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">
                Libco Zambia Ltd • Global Operations
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-rubik text-4xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              First-Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-libco-red to-red-800">
                Unified Services
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="font-quicksand mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              LIBCO (LB) is a service-oriented leader providing seamless business solutions 
              to reputable organizations. Bridging quality and innovation across 
              <span className="text-slate-900 font-semibold underline decoration-libco-red/30 decoration-4 underline-offset-4"> Africa, Asia, Europe, and the US.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="font-quicksand mt-12 flex flex-col sm:flex-row gap-5">
              <motion.button 
                whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-900/20"
              >
                Explore Solutions
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(241, 245, 249, 1)", y: -4 }}
                className="px-10 py-5 border-2 border-slate-200 text-slate-800 font-bold rounded-2xl transition-all"
              >
                View Partnerships
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content: The Visual "Hero" */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 w-full max-w-[550px] mx-auto group">
              {/* Decorative "Frame" behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-white transition-transform duration-500 group-hover:scale-[1.02]" />
              
              <div className="overflow-hidden rounded-[1.5rem] shadow-2xl relative">
                <img 
                  src={asset1}
                  alt="LIBCO Global Team" 
                  className="w-full h-auto object-cover transform transition-transform duration-[2s] pl-10"
                />
                {/* Subtle Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}