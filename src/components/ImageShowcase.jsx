import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image Assets
import asset1 from "../assets/asset1.png"; 
import asset2 from "../assets/asset2.png"; 
import asset3 from "../assets/asset3.png"; 
import asset4 from "../assets/asset4.png"; 
import asset5 from "../assets/asset5.png"; 
import asset6 from "../assets/asset6.png"; 

export default function ImageShowcase() {
  // Doubling the array to create a seamless infinite loop effect
  const images = [
    { id: 1, src: asset1 },
    { id: 2, src: asset2 },
    { id: 3, src: asset3 },
    { id: 4, src: asset4 },
    { id: 5, src: asset5 },
    { id: 6, src: asset6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic Timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header with Navigation */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-libco-red"></div>
              <span className="font-quicksand font-bold text-libco-red uppercase tracking-[0.3em] text-[10px]">
                Service Gallery
              </span>
            </div>
            <h2 className="font-rubik text-3xl md:text-5xl font-black text-slate-900">
              Our <span className="text-libco-red">Services</span>
            </h2>
          </div>

          <div className="flex gap-2">
            <button onClick={handlePrev} className="p-3 rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={handleNext} className="p-3 rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* The Sliding Track */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex overflow-hidden -mx-3">
            <motion.div 
              className="flex"
              animate={{ 
                // On Mobile: Shift by 100% per index
                // On Desktop: Shift by 25% per index (since 4 items show)
                x: `-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 100 : 25)}%` 
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: "100%" }}
            >
              {/* We render the list twice to ensure the "next" items are always available to slide into view */}
              {[...images, ...images].map((img, idx) => (
                <div 
                  key={idx} 
                  className="flex-none px-3 w-full lg:w-1/4"
                >
                  <div className="relative aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 p-10 flex items-center justify-center group hover:border-blue-200 transition-colors duration-500">
                    <img 
                      src={img.src} 
                      alt="Equipment" 
                      className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Subtle Item Indicator */}
                    <div className="absolute top-8 right-10">
                       <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Bar Loader */}
          <div className="mt-12 max-w-xs mx-auto h-[2px] bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              key={currentIndex}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 7, ease: "linear" }}
              className="h-full bg-libco-red w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}