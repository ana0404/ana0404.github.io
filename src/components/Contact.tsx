import { useState, type FormEvent } from "react";
import Reveal from "./ui/Reveal";
import WipeReveal from "./ui/WipeReveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ email: '', phone: '' });

  const validate = () => {
    let isValid = true;
    const newErrors = { email: '', phone: '' };

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'INVALID EMAIL FORMAT';
      isValid = false;
    }

    if (!formData.phone || formData.phone.length < 10 || !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'INVALID PHONE FORMAT';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    const subject = encodeURIComponent("New Contact Request from " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    window.location.href = `mailto:anamika.dashore01@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full relative pt-24 px-6 md:px-12 bg-background flex flex-col justify-between transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <WipeReveal width="100%" wipeColor="var(--accent-red)">
          <div className="bg-accent-red text-white p-8 md:p-16 flex flex-col justify-between min-h-[50vh] relative group transition-colors">
            <div className="flex justify-between items-start mb-12 md:mb-24">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase shrink-0">05 / CONTACT ME</span>
              <div className="w-3 h-3 rounded-full bg-white animate-pulse shrink-0"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-end">
              <div className="w-full md:w-1/2 flex flex-col">
                <p className="text-5xl md:text-8xl font-serif italic leading-none tracking-tighter hover:italic mb-8 md:mb-12">Initiate Contact</p>
                <a href="mailto:anamika.dashore01@gmail.com" className="text-sm md:text-lg font-mono hover:underline underline-offset-4 decoration-2">anamika.dashore01@gmail.com</a>
              </div>
              
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase opacity-70">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="bg-transparent border-b border-white/30 p-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors uppercase font-mono text-sm tracking-wider"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase opacity-70">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData(p => ({ ...p, email: e.target.value }));
                        if (errors.email) setErrors(p => ({ ...p, email: '' }));
                      }}
                      className={`bg-transparent border-b p-2 placeholder-white/30 focus:outline-none transition-colors uppercase font-mono text-sm tracking-wider ${errors.email ? 'border-amber-300 text-amber-50' : 'border-white/30 text-white focus:border-white'}`}
                      placeholder="YOUR EMAIL"
                    />
                    {errors.email && <span className="text-[10px] font-mono tracking-widest text-amber-200 mt-1">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-mono tracking-widest uppercase opacity-70">Phone</label>
                    <input 
                      id="phone"
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData(p => ({ ...p, phone: e.target.value }));
                        if (errors.phone) setErrors(p => ({ ...p, phone: '' }));
                      }}
                      className={`bg-transparent border-b p-2 placeholder-white/30 focus:outline-none transition-colors uppercase font-mono text-sm tracking-wider ${errors.phone ? 'border-amber-300 text-amber-50' : 'border-white/30 text-white focus:border-white'}`}
                      placeholder="YOUR PHONE"
                    />
                    {errors.phone && <span className="text-[10px] font-mono tracking-widest text-amber-200 mt-1">{errors.phone}</span>}
                  </div>
                  <button 
                    type="submit"
                    className="mt-4 border border-white px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-accent-red transition-colors self-start"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </WipeReveal>
      </div>

      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end mt-16 pb-8 border-t border-border pt-8">
        <div className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground mb-6 sm:mb-0">
          &copy;{new Date().getFullYear()} PORTFOLIO — DATA ARCHITECT & AI ENGINEER
        </div>
        <div className="flex gap-4 text-[11px] font-mono font-bold">
          <a href="https://github.com/ana0404" target="_blank" rel="noopener noreferrer" className="bg-accent-red text-white px-4 py-2 hover:opacity-80 transition-opacity uppercase tracking-widest">GH</a>
          <a href="https://www.linkedin.com/in/anamika-dashore/" target="_blank" rel="noopener noreferrer" className="bg-accent-red text-white px-4 py-2 hover:opacity-80 transition-opacity uppercase tracking-widest">LI</a>
        </div>
      </footer>
    </section>
  );
}
