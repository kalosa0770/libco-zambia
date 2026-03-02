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

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      title: "Management Consultancy",
      icon: <BarChart4 className="w-5 h-5" />,
      tagline: "Performance & Strategy",
      desc: "LB assists organizations in attaining efficiency and compliance with high-performance standards.",
      items: [
        "Global Supply Chain Management",
        "Business Performance Management",
        "Total Quality Management",
        "Strategic Planning & Change Management",
        "Human Resources & Leadership",
        "Organizational Development"
      ]
    },
    {
      id: 1,
      title: "Procurement Goods",
      icon: <ShoppingCart className="w-5 h-5" />,
      tagline: "Global Sourcing",
      desc: "We source goods and services according to client needs at the lowest possible costs.",
      items: [
        "Procurement Proficiency & Audits",
        "Systems Design from Scratch",
        "Computers and Accessories",
        "Office Furniture & Stationery",
        "Light & Heavy Equipment",
        "Electronic Products"
      ]
    },
    {
      id: 2,
      title: "Logistics & Shipping",
      icon: <Truck className="w-5 h-5" />,
      tagline: "Supply Chain Movement",
      desc: "Seamless freight solutions covering Air, Road, and Sea with expert clearing agents.",
      items: [
        "Customs Clearing & Shipping Agent",
        "Multi-modal: Air, Road, and Sea",
        "Expediting Services",
        "Onsite Delivery upon request"
      ]
    },
    {
      id: 3,
      title: "Training",
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: "Capacity Building",
      desc: "Empowering your workforce with specialized business and procurement training.",
      items: [
        "e-Procurement (E-GP) Systems",
        "Tendering & Bid Preparation",
        "Business Plan Formulation",
        "Entrepreneur Development",
        "Financial Management & Records"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-16">
          <span className="font-quicksand font-bold text-blue-600 uppercase tracking-widest text-[10px] md:text-xs border-l-4 border-blue-600 pl-4">
            Our Solutions
          </span>
          <h2 className="font-rubik text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            Integrated Business <br className="hidden md:block" />
            <span className="text-blue-600">Services Structure</span>
          </h2>
        </div>

        {/* Navigation: Buttons for Mobile, Tabs for Desktop */}
        <div className="flex overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 mb-10 gap-3 no-scrollbar snap-x">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex-none snap-start flex items-center gap-3 px-5 py-3.5 rounded-xl font-quicksand font-bold text-sm transition-all border-2 cursor-pointer ${
                activeTab === index 
                ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100" 
                : "bg-white text-slate-500 border-slate-100 hover:border-blue-200"
              }`}
            >
              {service.icon}
              <span className="whitespace-nowrap">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Profile Summary */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-blue-50 text-blue-700 w-fit px-4 py-1.5 rounded-lg font-quicksand font-bold text-[10px] uppercase tracking-widest">
                  {services[activeTab].tagline}
                </div>
                <h3 className="font-rubik text-2xl md:text-3xl font-bold text-slate-900">
                  {services[activeTab].title}
                </h3>
                <p className="font-quicksand text-base md:text-lg text-slate-600 leading-relaxed">
                  {services[activeTab].desc}
                </p>
                <div className="hidden lg:block pt-4">
                  <button className="flex items-center gap-3 font-quicksand font-bold text-blue-600 hover:gap-5 transition-all cursor-pointer">
                    Request Details <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Service Items Grid */}
              <div className="lg:col-span-7 bg-slate-50 rounded-[2rem] p-6 md:p-10 border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {services[activeTab].items.map((item, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      key={i} 
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="font-quicksand font-bold text-slate-700 text-sm md:text-base leading-snug">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {/* Mobile-only Action Button */}
                <div className="lg:hidden mt-8">
                  <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-quicksand font-bold flex items-center justify-center gap-2">
                    Request This Service <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}