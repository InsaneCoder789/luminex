import { useState, useEffect } from 'react';
import { Navbar, Hero, ProductSection } from './components/Layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Globe, Instagram, Linkedin, ArrowLeft, Upload, ShieldCheck, Truck, CreditCard, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

gsap.registerPlugin(ScrollTrigger);

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Upload Your Photo', content: 'Select your favorite moment. Our team optimizes the image for the perfect glow and clarity.' },
    { num: '02', title: 'Artistic Review', content: 'Our design team meticulously adjusts every detail to ensure a stunning final result.' },
    { num: '03', title: 'Handcraft with Love', content: 'Art meets precision. Every unit is handcrafted with obsessed attention to detail.' },
    { num: '04', title: 'Premium Packaging', content: 'Safe transit to your home. Protected by high-quality multi-layer padding.' },
    { num: '05', title: 'The Perfect Gift', content: 'The final reveal. Experience the glow that brings your memories to life.' },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="blob bg-luminex-accent-yellow w-[800px] h-[800px] -bottom-40 -left-40 opacity-15" />
      <div className="blob bg-luminex-accent-purple w-[600px] h-[600px] top-20 right-0 opacity-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(251,191,36,0.02),transparent)]" />
      <div className="container mx-auto relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40 mb-20 text-center md:text-left">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-8 relative"
            >
              <div className="text-[80px] font-serif italic text-white/5 leading-none absolute -top-12 -left-4 select-none">
                {s.num}
              </div>
              <div className="w-12 h-[1px] bg-luminex-yellow/40 mt-4"></div>
              <h3 className="text-xl font-light tracking-tight text-white/80">{s.title}</h3>
              <p className="text-white/30 leading-relaxed text-[10px] font-light uppercase tracking-widest">
                {s.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LimitedEdition({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="min-h-[800px] flex items-center relative overflow-hidden bg-luminex-black border-y border-white/5">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          src="video200.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luminex-black via-luminex-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-luminex-black via-transparent to-luminex-black opacity-60" />
      </div>

      <div className="blob bg-luminex-yellow w-[1000px] h-[1000px] -bottom-40 left-[-200px] opacity-20 pointer-events-none blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10 py-40">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="space-y-12 max-w-3xl"
        >
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-luminex-yellow font-black glow-text drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">A Donum Original</span>
            <h2 className="text-6xl md:text-[8rem] font-serif italic leading-[0.8] tracking-tighter text-white drop-shadow-[0_0_50px_rgba(251,191,36,0.1)]">Luminex<br />M1<span className="not-italic text-luminex-yellow text-glow">.</span></h2>
          </div>
          
          <div className="space-y-10">
            <p className="text-white/80 leading-relaxed uppercase tracking-[0.2em] text-[12px] max-w-xl font-medium drop-shadow-sm">
              A future-forward exploration of illuminated art. Our most ambitious engineering project to date, designed to transform any environment into a gallery of light.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <button 
                onClick={onOrder}
                className="px-16 py-8 bg-luminex-yellow text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all shadow-[0_0_60px_rgba(251,191,36,0.5)] active:scale-95 border border-luminex-yellow/50"
              >
                Place Order
              </button>
              
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-full border border-luminex-yellow/50 flex items-center justify-center group-hover:border-luminex-yellow transition-colors shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                   <div className="w-2 h-2 rounded-full bg-luminex-yellow shadow-[0_0_10px_#fbbf24]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-luminex-yellow/60 font-bold">Status</span>
                  <span className="text-xs font-mono text-luminex-yellow">Batch 01 Production</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 grid grid-cols-2 md:grid-cols-2 gap-12 border-t border-luminex-yellow/20">
             <div className="space-y-2 group/spec">
                <span className="block text-[8px] uppercase tracking-[0.3em] font-black text-luminex-yellow group-hover:text-white transition-colors">Optics</span>
                <span className="block text-xs font-light text-white">Custom Prism Array</span>
                <div className="w-8 h-px bg-luminex-yellow group-hover:w-full transition-all duration-700 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
             </div>
             <div className="space-y-2 group/spec">
                <span className="block text-[8px] uppercase tracking-[0.3em] font-black text-luminex-yellow group-hover:text-white transition-colors">Control</span>
                <span className="block text-xs font-light text-white">Atmospheric Remote</span>
                <div className="w-8 h-px bg-luminex-yellow group-hover:w-full transition-all duration-700 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailGallery() {
  return (
    <section className="py-40 bg-luminex-black overflow-hidden relative">
      <div className="blob bg-luminex-accent-yellow w-[1000px] h-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
      <div className="blob bg-luminex-accent-purple w-[600px] h-[600px] top-[-100px] right-[-100px] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.03),transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-luminex-yellow/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.5, ease: "circOut" }}
               className="relative rounded-[40px] overflow-hidden border border-white/10 glow-box bg-luminex-dark"
            >
              <img 
                src="LumiFrameV1closeup.png" 
                alt="Etching Detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-luminex-yellow/20 to-transparent mix-blend-overlay pointer-events-none" />
            </motion.div>
            
            {/* Callouts */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-10 top-1/4 bg-white text-black px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-luminex-yellow" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">Micron Precision</span>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">The Craft</span>
              <h2 className="text-5xl md:text-7xl font-serif italic leading-tight capitalize">Exquisite etching<br />for every detail.</h2>
              <p className="text-white/40 max-w-md text-sm leading-relaxed uppercase tracking-widest">
                Our precision etching process ensures every smile is captured with stunning clarity, creating a gift that stays bright forever.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Material</span>
                <p className="text-sm font-light">Optical Grade Acrylic</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Method</span>
                <p className="text-sm font-light">Layered Photon Deposition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-20 px-12 border-t border-white/5 bg-luminex-black/50 backdrop-blur-md overflow-hidden">
      <div className="blob bg-luminex-accent-yellow w-[600px] h-[600px] -bottom-100 -right-100 opacity-15" />
      <div className="blob bg-luminex-accent-purple w-[400px] h-[400px] top-[-200px] left-[-200px] opacity-10" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 relative z-10">
        <div className="col-span-2 space-y-8 text-left">
          <div className="text-2xl font-black tracking-[0.5em] italic">
            LUMI<span className="text-luminex-yellow">N</span>EX.
          </div>
          <p className="text-white/30 max-w-sm text-sm leading-relaxed font-serif italic">
            "Transforming your favorite photos into enchanting, glowing works of art. The unforgettable gift for your loved ones."
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/_.donum/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-all opacity-40 hover:opacity-100">
              <Instagram className="w-3 h-3" />
            </a>
            <a href="https://www.linkedin.com/company/thedonumgroup" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-all opacity-40 hover:opacity-100">
              <Linkedin className="w-3 h-3" />
            </a>
            <a href="https://thedonumgroup.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white transition-all opacity-40 hover:opacity-100">
              <Globe className="w-3 h-3" />
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-widest opacity-30">Navigation</h4>
          <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-widest font-bold">
            <li><a href="#collection" className="hover:text-luminex-yellow transition-colors">The Collection</a></li>
            <li><a href="#collection" className="hover:text-luminex-yellow transition-colors">Gallery</a></li>
            <li><a href="#how-it-works" className="hover:text-luminex-yellow transition-colors">The Process</a></li>
            <li><a href="#reviews" className="hover:text-luminex-yellow transition-colors">Testimonials</a></li>
          </ul>
        </div>

        <div className="space-y-6 text-right md:text-left">
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-widest opacity-40">Shop Status</div>
            <div className="flex items-center gap-3 justify-end md:justify-start">
              <div className="w-2 h-2 rounded-full bg-luminex-yellow shadow-[0_0_100px_rgba(251,191,36,0.6)]"></div>
              <span className="text-xs font-mono text-luminex-yellow">Accepting Orders</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-10">
        <div className="grid grid-cols-2 gap-16 mb-8 md:mb-0">
          <div className="space-y-1">
            <span className="block text-[9px] uppercase opacity-30">Handcrafted in</span>
            <span className="block text-lg font-light tracking-tighter text-white/80">India</span>
          </div>
          <div className="space-y-1">
            <span className="block text-[9px] uppercase opacity-30">Happiness</span>
            <span className="block text-lg font-light tracking-tighter text-white/80">Guaranteed</span>
          </div>
        </div>
        <div className="text-[9px] uppercase tracking-[0.4em] opacity-20 font-bold">
          © 2026 Luminex - Handcrafted with Love
        </div>
      </div>
    </footer>
  );
}
function OrderPage({ onBack }: { onBack: () => void }) {
  const products = [
    { 
      id: 'm1',
      name: 'Luminex M1', 
      tag: 'Flagship Concept',
      price: '₹12,499',
      priceNum: 12499,
      img: 'luminexm1.jpeg',
      features: ['Prism Optics', 'Liquid Titanium', 'Atmospheric Remote']
    },
    { 
      id: 'frame',
      name: 'LumiFrame V1', 
      tag: 'Desktop Minimalist',
      price: '₹1,999',
      priceNum: 1999,
      img: 'LumiFrameV1.png',
      features: ['Optical Acrylic', 'USB Powered', 'Compact Design']
    },
    { 
      id: 'box',
      name: 'LumiBox', 
      tag: 'Premium Series',
      price: '₹3,499',
      priceNum: 3499,
      img: 'LumiBox.png',
      features: ['Deep Etching', 'Hardwood Case', 'Ambient Glow']
    },
    { 
      id: 'chain',
      name: 'LumiChain', 
      tag: 'Pocket Artifact',
      price: '₹599',
      priceNum: 599,
      img: 'LumiChain.jpg',
      features: ['Handcrafted', 'Brass Fittings', 'Key-Safe']
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-luminex-black pt-12 md:pt-32 pb-24 md:pb-40 relative px-4 md:px-6"
    >
      <div className="blob bg-luminex-accent-yellow w-[800px] h-[800px] -top-40 -left-40 opacity-10 blur-3xl pointer-events-none" />
      <div className="blob bg-luminex-accent-purple w-[600px] h-[600px] bottom-0 right-0 opacity-10 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-4 group mb-12 opacity-40 hover:opacity-100 transition-all"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Back to Gallery</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left: Product Selection & Visuals */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16">
            <div className="space-y-6 md:space-y-4">
               <div className="flex items-center justify-between px-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Select Artifact</span>
                  <div className="hidden md:flex gap-2">
                    {products.map((_, i) => (
                      <div key={i} className={cn("w-8 h-1 rounded-full transition-all duration-500", selectedProduct.id === products[i].id ? "bg-luminex-yellow w-12" : "bg-white/10")} />
                    ))}
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {products.map((p) => (
                    <button 
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      className={cn(
                        "relative p-5 md:p-6 rounded-2xl md:rounded-3xl border transition-all text-left group overflow-hidden",
                        selectedProduct.id === p.id 
                          ? "bg-luminex-yellow/10 border-luminex-yellow shadow-[0_0_40px_rgba(251,191,36,0.15)]" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="relative z-10 space-y-2">
                        <span className={cn(
                          "text-[8px] uppercase tracking-widest font-black block transition-colors",
                          selectedProduct.id === p.id ? "text-luminex-yellow" : "text-white/20"
                        )}>
                          {p.tag}
                        </span>
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-bold text-white block truncate tracking-widest uppercase">{p.name}</span>
                          <span className={cn(
                            "text-[10px] font-bold md:hidden",
                            selectedProduct.id === p.id ? "text-luminex-yellow" : "text-white/40"
                          )}>{p.price}</span>
                        </div>
                      </div>
                      {selectedProduct.id === p.id && (
                        <motion.div 
                          layoutId="active-bg"
                          className="absolute inset-0 bg-gradient-to-br from-luminex-yellow/5 to-transparent pointer-events-none"
                        />
                      )}
                    </button>
                  ))}
               </div>
            </div>

            <motion.div 
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl md:rounded-[40px] overflow-hidden border border-white/10 glow-box bg-luminex-dark shadow-2xl"
            >
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.name} 
                className="w-full h-auto object-contain bg-luminex-black/40 min-h-[300px] md:min-h-[600px]" 
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-luminex-black via-luminex-black/40 to-transparent" />
              <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12">
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-luminex-yellow shadow-[0_0_15px_#fbbf24] animate-pulse" />
                    <h2 className="text-2xl md:text-5xl font-serif italic text-white tracking-tight">{selectedProduct.name}</h2>
                 </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div className="glass p-6 md:p-8 rounded-[2rem] space-y-4">
                  <Upload className="w-5 h-5 md:w-6 md:h-6 text-luminex-yellow" />
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest">Memories First</h4>
                  <p className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-wider leading-relaxed">
                    Upload your favorite high-resolution photo. Our AI-assisted etching process ensures every detail is captured.
                  </p>
               </div>
               <div className="glass p-6 md:p-8 rounded-[2rem] space-y-4">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-luminex-yellow" />
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest">Handmade Precision</h4>
                  <p className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-wider leading-relaxed">
                    Each unit undergoes 48 hours of meticulous hand-finishing and inspection.
                  </p>
               </div>
            </div>
          </div>

          {/* Right: Checkout Form */}
          <div className="lg:col-span-5 space-y-12 md:space-y-16 lg:sticky lg:top-32">
            <div className="space-y-6">
              <span className="text-xs font-bold text-white/40 uppercase tracking-[0.4em]">Step 02: Secure Allocation</span>
              <h1 className="text-4xl md:text-7xl font-serif italic leading-none tracking-tighter">Your Legacy,<br />Illuminated.</h1>
            </div>

            <div className="space-y-10">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30">Full Name</label>
                  <input type="text" required className="bg-transparent border-b border-white/10 py-4 focus:border-luminex-yellow outline-none text-xl font-light transition-all" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30">Shipping Address</label>
                  <textarea required className="bg-transparent border-b border-white/10 py-4 focus:border-luminex-yellow outline-none text-xl font-light transition-all resize-none" rows={2} placeholder="Your destination" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30">Contact Information</label>
                  <input type="email" required className="bg-transparent border-b border-white/10 py-4 focus:border-luminex-yellow outline-none text-xl font-light transition-all" placeholder="email@address.com" />
                </div>
              </form>

              <div className="flex flex-col gap-6 pt-10">
                 <div className="flex justify-between items-center text-sm uppercase tracking-widest font-black">
                    <span className="opacity-40">{selectedProduct.name} - {selectedProduct.tag}</span>
                    <span className="text-luminex-yellow text-2xl">{selectedProduct.price}</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-black opacity-40">
                    <span>Priority Shipping (Insured)</span>
                    <span>Included</span>
                 </div>
                 <div className="h-px bg-white/5" />
                 <button 
                  onClick={() => {
                    setIsSubmitting(true);
                    setTimeout(() => {
                      alert("Order Placed Successfully!");
                      setIsSubmitting(false);
                      onBack();
                    }, 2000);
                  }}
                  disabled={isSubmitting}
                  className="w-full py-8 bg-luminex-yellow text-black rounded-2xl text-[12px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all shadow-[0_0_80px_rgba(251,191,36,0.3)] active:scale-95 group flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing Assignment..." : "Confirm Assignment"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10">
                 <div className="flex items-center gap-4 opacity-30">
                    <Truck className="w-5 h-5 text-luminex-yellow" />
                    <span className="text-[8px] uppercase tracking-widest font-black">Global Delivery</span>
                 </div>
                 <div className="flex items-center gap-4 opacity-30">
                    <CreditCard className="w-5 h-5 text-luminex-yellow" />
                    <span className="text-[8px] uppercase tracking-widest font-black">Secure Checkout</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [page, setPage] = useState<'home' | 'order'>('home');

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleOrder = () => {
    setPage('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="selection:bg-luminex-yellow/20 selection:text-white">
      {page === 'home' && <Navbar onOrder={handleOrder} />}
      
      <AnimatePresence mode="wait">
        {page === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 overflow-x-hidden"
          >
            {/* Full-screen Hero Wrapper for Video */}
            <section className="relative h-screen">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <video 
                  src="video100.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luminex-black via-transparent to-luminex-black opacity-80" />
              </div>
              <Hero onOrder={handleOrder} />
            </section>

            <ProductSection onOrder={handleOrder} />

            <DetailGallery />

            <ProcessSection />

            <LimitedEdition onOrder={handleOrder} />
            
            <section id="reviews" className="py-40 border-t border-white/5 overflow-hidden relative">
              <div className="blob bg-luminex-yellow/10 w-[1500px] h-[1000px] -top-1/4 -left-1/4 blur-[180px] pointer-events-none" />
              <div className="blob bg-luminex-accent-yellow w-[800px] h-[800px] bottom-[-200px] right-[-100px] opacity-[0.15] blur-[150px] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_70%)] pointer-events-none" />
              <div className="container mx-auto px-6 mb-20 text-center md:text-left relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="mb-32"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.5em] text-luminex-yellow block mb-8 glow-text">What Our Customers Say</span>
                  <h2 className="text-[12vw] font-serif italic text-luminex-yellow/10 leading-none uppercase select-none drop-shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                    Real<br />Memories
                  </h2>
                </motion.div>
              </div>


              {/* Horizontal Slider */}
              <div className="relative group">
                <motion.div 
                  drag="x"
                  dragConstraints={{ right: 0, left: -2000 }}
                  className="flex gap-8 px-12 cursor-grab active:cursor-grabbing pb-20"
                >
          {[
            { name: "Ananya R.", quote: "The quality of the lamp is just amazing. It's the best gift I've ever given.", role: "Happy Customer", integrity: "5/5" },
            { name: "Vikram S.", quote: "Absolutely beautiful. The light brings the photo to life. Highly recommended!", role: "Verified Buyer", integrity: "5/5" },
            { name: "Rahul K.", quote: "A masterpiece of Indian craftsmanship. My home feels so much warmer now.", role: "Gifted to Family", integrity: "5/5" },
            { name: "Sarah M.", quote: "The way the light catches the etching is beautiful. It's a work of art.", role: "Art Enthusiast", integrity: "5/5" },
            { name: "Priya D.", quote: "Gifted this to my parents for their anniversary; they were mesmerized.", role: "Satisfied Customer", integrity: "5/5" }
          ].map((t, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[550px] max-w-[90vw] glass p-10 md:p-20 relative overflow-hidden flex flex-col justify-between rounded-[40px] border border-white/5 hover:border-luminex-yellow/30 transition-all duration-700 group/card">
              <div className="absolute top-0 right-0 p-6 md:p-10">
                <div className="text-[7px] md:text-[8px] uppercase tracking-[0.5em] text-luminex-yellow font-black">Authentication: {t.integrity}</div>
              </div>
                      
                      <div className="relative">
                        <div className="text-8xl font-serif text-luminex-yellow/10 absolute -top-10 -left-6 select-none italic">"</div>
                        <div className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed relative z-10">
                          {t.quote}
                        </div>
                      </div>

                      <div className="flex items-center gap-6 mt-16">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-gradient-to-tr from-luminex-yellow/20 to-transparent flex items-center justify-center text-[10px] font-bold text-luminex-yellow">
                          {t.name.split(' ')[0][0]}
                        </div>
                        <div>
                          <div className="font-black uppercase tracking-[0.3em] text-[10px] text-white/80">{t.name}</div>
                          <div className="text-[9px] opacity-30 uppercase tracking-[0.2em] mt-1 italic font-serif ">{t.role}</div>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-luminex-yellow/5 blur-[80px] rounded-full group-hover/card:bg-luminex-yellow/10 transition-all duration-700" />
                    </div>
                  ))}
                </motion.div>
                
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Slide to see more stories</span>
                  <div className="w-20 h-px bg-white/20"></div>
                </div>
              </div>
            </section>

            <section className="py-60 text-center relative">
               <div className="blob bg-luminex-accent-yellow w-[1000px] h-[600px] left-1/2 -translate-x-1/2 opacity-10" />
               <h2 className="text-6xl md:text-[8rem] font-serif italic leading-none tracking-tighter mb-16 relative">
                 Gift a<br /><span className="not-italic opacity-40">Memory.</span>
               </h2>
               <button 
                onClick={handleOrder}
                className="group relative px-16 py-8 bg-white text-black rounded-full text-xs font-bold uppercase tracking-[0.5em] overflow-hidden hover:scale-105 transition-all duration-500 shadow-[0_0_80px_rgba(251,191,36,0.1)]"
               >
                 Shop The Collection
               </button>
            </section>

            <Footer />
          </motion.div>
        ) : (
          <OrderPage key="order" onBack={() => setPage('home')} />
        )}
      </AnimatePresence>
    </main>
  );
}
