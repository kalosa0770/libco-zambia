import { 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-20">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-16 border-b border-slate-200">
          
          {/* BRAND */}
          <div>
            <h3 className="font-rubik text-2xl font-black text-libco-red mb-4">
              LIBCO <span className="text-slate-900">ZAMBIA LTD</span>
            </h3>
            <p className="font-quicksand text-slate-600 text-sm leading-relaxed max-w-sm">
              Delivering integrated, performance-driven business solutions 
              across consultancy, procurement, logistics, and training.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-rubik text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">
              Company
            </h4>
            <ul className="space-y-4 font-quicksand text-sm text-slate-600">
              <li>
                <a href="#about" className="hover:text-libco-red transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-libco-red transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-libco-red transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-rubik text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 font-quicksand text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-libco-red" />
                <span>
                  Mandahill Side Office – Room 02, Lusaka, Zambia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-libco-red" />
                <span>
                  +260 976 598 288 / +260 966 598 288
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-libco-red" />
                <a href="mailto:info@libcozambia.com" className="hover:text-libco-red transition-colors">
                  info@libcozambia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">
          <p className="font-quicksand text-xs text-slate-500 text-center md:text-left">
            © {currentYear} LIBCO Zambia Limited. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs font-quicksand font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}