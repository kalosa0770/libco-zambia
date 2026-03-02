import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-white pt-16  border-t border-slate-100">
        <div className="container mx-auto md:px-36 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8 mb-12">
            <div>
              <h3 className="font-rubik text-xl font-black text-slate-900">
                LIBCO <span className="text-blue-600">Zambia Limited</span>
              </h3>
              <p className="font-quicksand text-slate-500 text-sm mt-1">Unified Business Solutions Architecture</p>
            </div>
            
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8  font-quicksand font-bold text-sm text-slate-400">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-blue-600 transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
  
          <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-quicksand text-xs text-slate-400">
              © {currentYear} LIBCO Zambia Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs font-quicksand font-bold text-slate-400">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }