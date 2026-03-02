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

// Image Assets
import imgMainCoupling from "../assets/asset3.png"; 
import imgGateValve from "../assets/consultation.png";
import imgButterflyValve from "../assets/training.png";
import imgCheckValve from "../assets/shipping.png";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(1);

  const services = [
    {
      id: 0,
      title: "Management Consultancy",
      icon: <BarChart4 className="w-5 h-5" />,
      tagline: "Performance & Strategy",
      image: imgGateValve, // Using another asset for consultancy background
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
      image: imgCheckValve, // Using another asset for logistics background
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
      image: imgButterflyValve, // Using another asset for training background
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
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-slate-900"></div>
            <span className="font-quicksand font-bold text-slate-900 uppercase tracking-[0.2em] text-xs">
              Our Expertise
            </span>
          </div>
          <h2 className="font-rubik text-3xl md:text-5xl font-black text-libco-red leading-tight">
            Integrated Business <br />
            <span className="underline decoration-libco-red/20 underline-offset-8">Solutions Structure</span>
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 pb-6 lg:pb-0 mb-8 gap-4 no-scrollbar">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex-none lg:w-full flex items-center justify-center gap-3 px-6 py-5 rounded-2xl font-quicksand font-bold text-sm transition-all border cursor-pointer ${
                activeTab === index 
                ? "bg-slate-900 text-white border-slate-900 shadow-xl -translate-y-1" 
                : "bg-slate-50 text-slate-900 border-slate-100 hover:bg-white hover:border-blue-200"
              }`}
            >
              {service.icon}
              <span className="whitespace-nowrap">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Full Width Specialization Card */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-gray-50 ounded-[3rem] p-8 md:p-20 relative overflow-hidden flex flex-col justify-center"
            >
              {/* Background Product Image */}
              {services[activeTab].image && (
                <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
                  <motion.img 
                    initial={{ scale: 1.2, rotate: 5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={services[activeTab].image} 
                    className="w-full h-full object-contain"
                    alt="Industrial backdrop"
                  />
                </div>
              )}

              {/* Decorative Gradient for Text Readability */}
              

              {/* Content Grid */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  
                  <h3 className="font-rubik text-lg md:text-xl font-bold text-gray-900 mb-8">
                    {services[activeTab].title}
                  </h3>
                  
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                    {services[activeTab].items.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900/20 flex items-center justify-center border border-blue-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <span className="font-quicksand font-bold text-slate-900 text-sm md:text-base leading-tight">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <button className="flex items-center gap-4 bg-libco-red text-white px-8 py-4 rounded-full font-quicksand font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all group">
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