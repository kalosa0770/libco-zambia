import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart4, 
  ShoppingCart, 
  Truck, 
  GraduationCap, 
  CheckCircle2,
  ArrowRight,
  X,
  Send
} from "lucide-react";
import { toast } from 'react-toastify';

// Assets
import imgMainCoupling from "../assets/asset3.png"; 
import imgGateValve from "../assets/consultation.png";
import imgButterflyValve from "../assets/training.png";
import imgCheckValve from "../assets/asset2.png";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false);

  // Form Submission Handler
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Using your existing access key from Navbar
    formData.append("access_key", "788e8c75-eb09-401e-993d-4aa98d1df4b8");
    formData.append("subject", `New Specialist Inquiry: ${services[activeTab].title}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Request sent! Our specialists will contact you soon.");
      setIsSpecialistOpen(false);
    } else {
      toast.error("Form submission failed. Please try again.");
    }
  };

  const services = [
    {
      id: 0,
      title: "Management Consultancy",
      icon: <BarChart4 className="w-5 h-5" />,
      tagline: "Performance & Strategy",
      image: imgGateValve,
      items: ["Global Supply Chain Management", "Business Performance Management", "Total Quality Management", "Strategic Planning & Change", "Human Resources & Leadership", "Organizational Development"]
    },
    {
      id: 1,
      title: "Procurement Goods",
      icon: <ShoppingCart className="w-5 h-5" />,
      tagline: "Industrial Sourcing",
      image: imgMainCoupling,
      items: ["Industrial Valves & Actuators", "Piping & Coupling Systems", "Water Infrastructure Hardware", "Light & Heavy Equipment", "Electronic Products", "Office Furniture & Stationery"]
    },
    {
      id: 2,
      title: "Logistics & Shipping",
      icon: <Truck className="w-5 h-5" />,
      tagline: "Supply Chain Movement",
      image: imgCheckValve,
      items: ["Customs Clearing & Shipping", "Multi-modal: Air, Road, Sea", "Expediting Services", "Onsite Delivery & Handling", "Warehousing Solutions"]
    },
    {
      id: 3,
      title: "Training",
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: "Capacity Building",
      image: imgButterflyValve,
      items: ["e-Procurement (E-GP) Systems", "Tendering & Bid Preparation", "Business Plan Formulation", "Entrepreneur Development", "Financial Records Management"]
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12 md:mb-20">
          <p className="text-xs tracking-[0.25em] uppercase font-bold text-slate-500 mb-4">Our Expertise</p>
          <h2 className="font-rubik text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Business Solutions</span>
          </h2>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16 overflow-x-auto no-scrollbar pb-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 md:w-full min-w-[240px] md:min-w-0 group px-6 py-5 rounded-2xl text-left border transition-all duration-300 ${
                activeTab === index ? "bg-red-600 text-white border-red-600 shadow-xl" : "bg-white border-slate-200 hover:border-red-600/40 text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${activeTab === index ? "bg-white/20" : "bg-slate-100 group-hover:bg-red-50"}`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wide">{service.title}</h3>
              </div>
              <p className={`text-xs ${activeTab === index ? "text-white/80" : "text-slate-500"}`}>{service.tagline}</p>
            </button>
          ))}
        </div>

        {/* MAIN DISPLAY PANEL */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative bg-slate-50 flex items-center justify-center p-12 md:p-20">
                  <motion.img 
                    src={services[activeTab].image} 
                    className="w-full rounded-2xl object-contain z-10" 
                    alt={services[activeTab].title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/30" />
                </div>

                <div className="p-8 md:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">{services[activeTab].title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[activeTab].items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsSpecialistOpen(true)}
                    className="mt-10 inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all group"
                  >
                    Get Specialist Advice <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FORM MODAL */}
        <AnimatePresence>
          {isSpecialistOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsSpecialistOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative z-10 w-full max-w-xl bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Request <span className="text-red-600">Specialist Advice</span></h3>
                    <p className="text-slate-500 text-xs uppercase tracking-widest mt-1 font-bold">Inquiry for: {services[activeTab].title}</p>
                  </div>
                  <button onClick={() => setIsSpecialistOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition text-slate-400">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Hidden input to track service type automatically */}
                  <input type="hidden" name="service_category" value={services[activeTab].title} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-900 uppercase ml-2">Full Name</label>
                      <input required type="text" name="name" placeholder="Name" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:border-red-600" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-900 uppercase ml-2">Email Address</label>
                      <input required type="email" name="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:border-red-600" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-900 uppercase ml-2">Describe Your Requirements</label>
                    <textarea required name="message" rows={4} placeholder={`How can we help you with ${services[activeTab].title}?`} className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:border-red-600" />
                  </div>

                  <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-lg shadow-red-200 uppercase text-[11px] tracking-widest">
                    Submit Advisory Request <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}