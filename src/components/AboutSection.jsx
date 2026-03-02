import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import asset3 from "../assets/asset3.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
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
                className="w-full h-[550px] object-cover"
              />
              {/* Blue Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Experience Floating Badge (Inspired by Techa) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:right-10 z-30 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl text-center"
            >
              <span className="font-rubik block text-4xl font-black">20+</span>
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
              <h2 className="font-rubik text-3xl md:text-5xl font-extrabold text-libco-red leading-[1.1] tracking-tight">
                Unified Solutions for a <br />
                Competitive Global Market
              </h2>

              {/* About Text */}
              <p className="font-quicksand mt-6 text-sm md:text-lg text-slate-900 leading-relaxed max-w-xl font-medium">
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
                <button className="font-quicksand font-bold bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-libco-red transition-all shadow-lg shadow-slate-100 cursor-pointer">
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
    </section>
  );
}