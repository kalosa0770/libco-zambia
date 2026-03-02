import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Target, Settings, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12" />,
      title: "Consultation",
      phase: "Phase 01",
      desc: "We begin with an in-depth analysis of client needs, compliance requirements, and specific business goals to ensure a solid foundation.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategy",
      phase: "Phase 02",
      desc: "Our team develops tailored, high-performance solutions designed for efficiency, sustainable growth, and global competitiveness.",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Implementation",
      phase: "Phase 03",
      desc: "We execute seamless business solutions across various industries and regions, maintaining operational excellence throughout the transition.",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Results",
      phase: "Phase 04",
      desc: "The final phase focuses on ensuring sustainable outcomes, complete client satisfaction, and a long-term impact on organizational standards.",
    },
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-quicksand font-bold text-blue-600 uppercase tracking-widest text-xs">
            Our Structured Approach
          </span>
          <h2 className="font-rubik text-3xl md:text-5xl font-black text-slate-900 mt-3">
            Proven Work <span className="text-blue-600">Process</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Slide Card */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-10 md:p-20 text-center"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-50 text-blue-600 rounded-3xl mb-8">
                  {steps[activeStep].icon}
                </div>
                
                <span className="block font-quicksand font-bold text-blue-600 uppercase tracking-[0.3em] text-sm mb-4">
                  {steps[activeStep].phase}
                </span>
                
                <h3 className="font-rubik text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {steps[activeStep].title}
                </h3>
                
                <p className="font-quicksand text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Manual Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
              <button 
                onClick={prevStep}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-blue-600 hover:shadow-blue-100 transition-all pointer-events-auto cursor-pointer border border-slate-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextStep}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-blue-600 hover:shadow-blue-100 transition-all pointer-events-auto cursor-pointer border border-slate-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  activeStep === idx ? "w-12 bg-blue-600" : "w-3 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}