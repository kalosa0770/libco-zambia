import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="font-quicksand font-bold text-blue-600 uppercase tracking-widest text-xs">
                Get In Touch
              </span>
              <h2 className="font-rubik text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
                Let’s Discuss Your <br />
                <span className="text-blue-600">Business Goals</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: "Email Us", val: "info@libcozambia.com" },
                { icon: <Phone />, label: "Call Support", val: "+260-XXX-XXX-XXX" },
                { icon: <MapPin />, label: "Our Office", val: "Lusaka, Zambia" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-quicksand font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="font-rubik font-bold text-slate-900 text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 p-4 rounded-xl font-quicksand focus:outline-none focus:border-blue-600 transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-slate-200 p-4 rounded-xl font-quicksand focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-white border border-slate-200 p-4 rounded-xl font-quicksand focus:outline-none focus:border-blue-600 transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-white border border-slate-200 p-4 rounded-xl font-quicksand focus:outline-none focus:border-blue-600 transition-colors" />
              <button className="w-full bg-slate-900 text-white font-quicksand font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}