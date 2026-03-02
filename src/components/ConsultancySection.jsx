import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BarChart3, Globe, Users, Settings, Briefcase, Zap } from "lucide-react";

export default function ConsultancySection() {
  const [activeTab, setActiveTab] = useState(null);

  const consultancyAreas = [
    {
      title: "Global Supply Chain & Procurement",
      icon: <Globe className="w-6 h-6" />,
      content: "LB offers expert consultancy in Global Supply Chain Management and Procurement. We help organizations streamline their sourcing strategies and logistics across Africa, Asia, Europe, and the US.",
      items: ["Global Supply Chain Management", "Procurement Consultancy"]
    },
    {
      title: "Performance & Strategic Planning",
      icon: <BarChart3 className="w-6 h-6" />,
      content: "Driving efficiency through data-backed strategies. We specialize in aligning organizational goals with high-performance standards.",
      items: ["Business Performance Management", "Strategic Planning", "Total Quality Management"]
    },
    {
      title: "Human Capital & Leadership",
      icon: <Users className="w-6 h-6" />,
      content: "Building the foundations of a professional workforce. Our consultancy focuses on developing the leaders of tomorrow and optimizing current HR structures.",
      items: ["Human Resources Management", "Leadership Development", "Change Management"]
    },
    {
      title: "Organizational Development",
      icon: <Settings className="w-6 h-6" />,
      content: "Transforming the core of your business. We provide tools for organizational growth, development, and scaling in competitive environments.",
      items: ["Organizational Development", "Business Development Services"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Static Intro */}
          <div className="lg:w-1/3 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="font-quicksand font-bold text-blue-600 uppercase tracking-widest text-sm">
                Expertise & Guidance
              </span>
            </div>
            <h2 className="font-rubik text-4xl font-extrabold text-slate-900 leading-tight">
              Management <br />
              <span className="text-blue-600">Consultancy</span>
            </h2>
            <p className="font-quicksand text-lg text-slate-600 leading-relaxed">
              LB offers specialized consultancy in various areas designed to assist 
              organizations in attaining efficiency, professionalism, and compliance 
              with global standards.
            </p>
            <div className="pt-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-rubik font-bold text-slate-900">Need Advice?</p>
                  <p className="font-quicksand text-sm text-slate-500">Contact our senior consultants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Dropdowns */}
          <div className="lg:w-2/3 space-y-4">
            {consultancyAreas.map((area, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  activeTab === index ? "border-blue-600 shadow-xl shadow-blue-50" : "border-slate-100 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      activeTab === index ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                    }`}>
                      {area.icon}
                    </div>
                    <span className="font-rubik text-xl font-bold text-slate-900">
                      {area.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                    activeTab === index ? "rotate-180 text-blue-600" : ""
                  }`} />
                </button>

                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-2 ml-14">
                        <p className="font-quicksand text-slate-600 mb-6 leading-relaxed">
                          {area.content}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {area.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              <span className="font-quicksand font-bold text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}