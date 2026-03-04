import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart4, 
  ShoppingCart, 
  Truck, 
  GraduationCap, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

import imgMainCoupling from "../assets/asset3.png"; 
import imgGateValve from "../assets/consultation.png";
import imgButterflyValve from "../assets/training.png";
import imgCheckValve from "../assets/asset2.png";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(1);

  const services = [
    {
      id: 0,
      title: "Management Consultancy",
      icon: <BarChart4 className="w-5 h-5" />,
      tagline: "Performance & Strategy",
      image: imgGateValve,
      items: [
        "Global Supply Chain Management",
        "Business Performance Management",
        "Total Quality Management",
        "Strategic Planning & Change",
        "Human Resources & Leadership",
        "Organizational Development"
      ]
    },
    {
      id: 1,
      title: "Procurement Goods",
      icon: <ShoppingCart className="w-5 h-5" />,
      tagline: "Industrial Sourcing",
      image: imgMainCoupling,
      items: [
        "Industrial Valves & Actuators",
        "Piping & Coupling Systems",
        "Water Infrastructure Hardware",
        "Light & Heavy Equipment",
        "Electronic Products",
        "Office Furniture & Stationery"
      ]
    },
    {
      id: 2,
      title: "Logistics & Shipping",
      icon: <Truck className="w-5 h-5" />,
      tagline: "Supply Chain Movement",
      image: imgCheckValve,
      items: [
        "Customs Clearing & Shipping",
        "Multi-modal: Air, Road, Sea",
        "Expediting Services",
        "Onsite Delivery & Handling",
        "Warehousing Solutions"
      ]
    },
    {
      id: 3,
      title: "Training",
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: "Capacity Building",
      image: imgButterflyValve,
      items: [
        "e-Procurement (E-GP) Systems",
        "Tendering & Bid Preparation",
        "Business Plan Formulation",
        "Entrepreneur Development",
        "Financial Records Management"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12 md:mb-20">
          <p className="text-xs tracking-[0.25em] uppercase font-bold text-slate-500 mb-4">
            Our Expertise
          </p>
          <h2 className="font-rubik text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-libco-red to-red-800">
            Business Solutions
            </span>
          </h2>
        </div>

        {/* TABS */}
        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16 overflow-x-auto no-scrollbar">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 md:w-full min-w-[220px] md:min-w-0 group px-5 md:px-6 py-5 rounded-2xl text-left border transition-all ${
                activeTab === index
                  ? "bg-libco-red text-white border-libco-red shadow-lg"
                  : "bg-white border-slate-200 hover:border-libco-red/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <div className={`p-2 rounded-lg ${
                  activeTab === index
                    ? "bg-white/20"
                    : "group-hover:bg-libco-red/10"
                }`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-xs md:text-sm uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
              <p className={`text-xs ${
                activeTab === index ? "text-white/80" : "text-slate-500"
              }`}>
                {service.tagline}
              </p>
            </button>
          ))}
        </div>

        {/* MAIN CONTENT PANEL */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-3xl shadow-[0_40px_100px_-30px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              
              <div className="grid md:grid-cols-2">
                
                {/* IMAGE (top on mobile) */}
                <div className="relative bg-white flex items-center justify-center p-10 md:p-0 min-h-[250px] md:min-h-[550px]">
                  <motion.img
                    key={services[activeTab].image}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    src={services[activeTab].image}
                    className="w-[70%] md:w-[75%] object-contain"
                    alt="Service Illustration"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-libco-red/10 pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-16 flex flex-col justify-center">
                  
                  <h3 className="font-rubik text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-10">
                    {services[activeTab].title}
                  </h3>

                  {/* Responsive Bullet Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                    {services[activeTab].items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-libco-red mt-1" />
                        <span className="text-slate-700 text-sm md:text-base font-medium">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 md:mt-14">
                    <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold tracking-wide hover:bg-libco-red transition-all group">
                      Get Specialist Advice
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}