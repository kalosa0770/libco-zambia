import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import asset1 from "../assets/asset1.png"; 
import asset2 from "../assets/asset2.png"; 
import asset3 from "../assets/asset3.png"; 
import asset4 from "../assets/asset4.png"; 
import asset5 from "../assets/asset5.png"; 
import asset6 from "../assets/asset6.png"; 

export default function ImageShowcase() {
  const images = [
    { id: 1, src: asset1, title: "Precision Valves" },
    { id: 2, src: asset2, title: "Coupling Systems" },
    { id: 3, src: asset3, title: "Industrial Piping" },
    { id: 4, src: asset4, title: "Logistics Fleet" },
    { id: 5, src: asset5, title: "Safety Gear" },
    { id: 6, src: asset6, title: "Infrastructure" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items visible
  const itemsVisible = { mobile: 1, tablet: 2, desktop: 4 };
  const maxIndex = images.length - itemsVisible.desktop;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-libco-red"></span>
              <span className="font-quicksand font-bold text-slate-500 uppercase tracking-widest text-[11px]">
                Product Showcase
              </span>
            </div>
            <h2 className="font-rubik text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-libco-red to-red-800">Industrial Hardware</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="group p-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-900 transition-all duration-300 shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={22} className="group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="group p-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-900 transition-all duration-300 shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={22} className="group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-visible"> 
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsVisible.desktop)}% - ${currentIndex * 1.5}rem)`,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {images.map((img) => (
                <div
                  key={img.id}
                  className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex-shrink-0"
                >
                  <div className="group relative">
                    {/* The Card */}
                    <div className="relative aspect-[4/5] bg-white rounded-[2rem] border border-slate-100 p-8 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200 group-hover:-translate-y-2">
                      
                      {/* Subtle Pattern Background */}
                      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" 
                           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />

                      <img
                        src={img.src}
                        alt={img.title}
                        className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-xl"
                      />

                      {/* Glassmorphism Overlay on Hover */}
                      <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 flex justify-between items-center shadow-lg">
                          <div>
                            <p className="text-[10px] uppercase tracking-widest font-bold text-libco-red">Libco Certified</p>
                            <p className="text-slate-900 font-bold text-sm">{img.title}</p>
                          </div>
                          <div className="p-2 bg-slate-900 rounded-lg text-white">
                            <Maximize2 size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Custom Progress Bar */}
        <div className="mt-16 max-w-xs mx-auto">
            <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-libco-red"
                    animate={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
                />
            </div>
            <div className="flex justify-between mt-4 font-quicksand text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>01 — Showcase</span>
                <span>0{images.length} — Total</span>
            </div>
        </div>
      </div>
    </section>
  );
}