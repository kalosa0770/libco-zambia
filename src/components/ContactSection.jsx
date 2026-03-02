import { Mail, Phone, MapPin, Send } from "lucide-react";
import contactBg from "../assets/asset4.png"; 

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden group">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={contactBg} 
          alt="Contact Background" 
          className="w-full h-full object-cover grayscale-[50%] brightness-[0.3]" 
        />
        {/* Gradient Overlay for professional depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Brand Messaging */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-white"></div>
                <span className="font-quicksand font-bold text-white uppercase tracking-[0.3em] text-xs">
                  Connect With Us
                </span>
              </div>
              <h2 className="font-rubik text-4xl md:text-5xl font-black text-white mt-2 leading-tight">
                Let’s Discuss Your <br />
                <span className="text-blue-500">Business Goals</span>
              </h2>
              <p className="mt-6 text-white font-quicksand text-sm max-w-md leading-relaxed opacity-80">
                Our team is ready to provide specialized solutions for your next project. 
                Reach out for a technical consultation.
              </p>
            </div>
          </div>

          {/* Right: Minimalist Contact Info (No Cards/Form) */}
          <div className="space-y-12 lg:pl-20">
            {[
              { icon: <Mail className="w-5 h-5" />, label: "Email Us", val: "info@libcozambia.com" },
              { icon: <Phone className="w-5 h-5" />, label: "Call Support", val: "+260-XXX-XXX-XXX" },
              { icon: <MapPin className="w-5 h-5" />, label: "Our Office", val: "Lusaka, Zambia" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group/item">
                <div className="text-white mt-1 shrink-0 group-hover/item:text-blue-500 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-quicksand font-bold text-slate-500 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="font-rubik font-bold text-white text-sm md:text-lg tracking-tight hover:text-blue-400 transition-colors cursor-pointer">
                    {item.val}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button following the same style as your previous buttons */}
            <div className="pt-4">
               <button className="bg-blue-600 hover:bg-blue-500 text-white font-quicksand font-black py-4 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98] uppercase text-[12px] tracking-widest">
                  Get Started <Send className="w-4 h-4" />
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}