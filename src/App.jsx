import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ImageShowcase from "./components/ImageShowcase";

function App() {
  return (
    <>
      <Navbar />
      <main className="selection:bg-blue-100 selection:text-blue-900 min-h-screen bg-white pt-26 pb-10">
        
        {/* 1. Hero: Pure White */}
        {/* Provides a clean, high-impact entry point */}
        <HeroSection /> 
        
        {/* 2. About: Soft Gray Separation */}
        {/* The slate-50 background gives the Mission/Vision cards an 'anchored' feel */}
        <section className=" bg-slate-50 border-y border-slate-100">
          <AboutSection />
        </section>

        {/* 3. Services: Pure White */}
        {/* Keeps the focus entirely on your service tabs and icons */}
        <section className="bg-white">
          <ServicesSection />
        </section>

        {/* 4. Contact: Soft Gray Separation */}
        {/* This subtle gray makes the white form inputs look much cleaner and easier to find */}
        <section className=" bg-slate-50 border-y border-slate-100">
          <ImageShowcase />
        </section>

        {/* 5. Footer: Pure White */}
        {/* A minimalist finish to keep the site feeling airy and modern */}
        <section className="bg-white">
          <Footer />
        </section>
        
      </main>
    </>
  );
}

export default App;