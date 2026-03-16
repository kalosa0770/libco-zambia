import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import asset3 from "../assets/asset3.png";

export default function AboutSection() {
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Background Decorative Element */}
      <div className="absolute left-0 bottom-0 w-1/4 opacity-5 bg-blue-600 h-64 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left: Single Professional Image with Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
              <img 
                src={asset3}
                alt="LIBCO Team Collaboration" 
                className="w-full object-cover"
              />
              {/* Blue Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Experience Floating Badge (Inspired by Techa) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:right-10 z-30 bg-slate-900 text-white p-4 rounded-3xl shadow-2xl text-center"
            >
              <span className="font-rubik block text-xs font-black">20+</span>
              <span className="font-quicksand block text-xs uppercase font-bold tracking-widest mt-1">Years of</span>
              <span className="font-quicksand block text-xs uppercase font-bold tracking-widest leading-none">Excellence</span>
            </motion.div>
          </motion.div>

          {/* Right: Text Content (About, Mission, Vision) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="space-y-8">
              {/* Section Tagline */}
              <div className="inline-flex items-center gap-3">
                <div className="h-[2px] w-8 bg-slate-900" />
                <span className="font-quicksand text-[10px] md:text-sm font-bold text-slate-900 uppercase tracking-[0.15em]">
                  About LIBCO Zambia Limited
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-rubik text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-libco-red to-red-800">
              Competitive  Market
                </span>
              </h2>

              {/* About Text */}
              <p className="font-quicksand mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                LIBCO (LB) is a service-oriented company incorporated in the Republic of Zambia. 
                We offer seamless business solutions to reputable organizations, providing 
                first-class unified services across Zambia, Africa, and internationally.
              </p>

              {/* Mission & Vision (Techa-style List) */}
              <div className="space-y-6 pt-4">
                {/* Mission Item */}
                <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all group">
                  <div className="bg-slate-900 p-3 rounded-xl h-fit group-hover:rotate-12 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-rubik text-xl font-bold text-slate-900">Our Mission</h3>
                    <p className="font-quicksand text-slate-900 mt-2 leading-relaxed">
                      To provide quality solutions that assist organizations in attaining efficiency, 
                      professionalism, and compliance with high-performance standards.
                    </p>
                  </div>
                </div>

                {/* Vision Item */}
                <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all group">
                  <div className="bg-slate-900 p-3 rounded-xl h-fit group-hover:rotate-12 transition-transform">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-rubik text-xl font-bold text-slate-900">Our Vision</h3>
                    <p className="font-quicksand text-slate-900 mt-2 leading-relaxed">
                      To generate a first-class unified services structure and business solutions 
                      within Zambia, Africa, and internationally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Call to Action Link */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setIsPartnershipOpen(true)}
                  className="font-quicksand font-bold bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-libco-red transition-all shadow-lg shadow-slate-100 cursor-pointer"
                >
                  Learn More
                </button>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={asset3} alt="team" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">
                    +12
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isPartnershipOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPartnershipOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="relative z-10 w-[90%] max-w-xl bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-rubik text-2xl md:text-3xl font-black text-slate-900">
                    About LIBCO Zambia
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Discover our mission, core services, and how we drive reliable outcomes across markets.
                  </p>
                </div>
                <button
                  onClick={() => setIsPartnershipOpen(false)}
                  className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  LIBCO Zambia is a full-spectrum business solutions provider, delivering procurement,
                  logistics, consulting, and training services across Africa, Asia, Europe and North America.
                </p>
                <p>
                  Founded on a commitment to quality, innovation, and compliance, we work with governments,
                  enterprises, and NGOs to optimize supply chains, implement strategic change, and enhance
                  operational performance.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>End-to-end procurement and sourcing expertise</li>
                  <li>Integrated logistics and customs-clearance operations</li>
                  <li>Performance-driven management consultancy</li>
                  <li>Practical skill development and professional training</li>
                </ul>
                <p>
                  To explore how we can support your goals, contact us at <strong>info@libcozambia.com</strong>
                  
                </p>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsPartnershipOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}