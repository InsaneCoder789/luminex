import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Zap, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar({ onOrder }: { onOrder: () => void }) {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-luminex-yellow/40 blur-xl pointer-events-none" />
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-luminex-yellow text-black py-2 px-6 text-center text-[10px] font-black uppercase tracking-[0.2em] shadow-lg"
      >
        Illuminate Your Home! Handcrafted memory lamps delivered with obsession for detail.
      </motion.div>
      
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="glass mt-4 md:mt-6 px-4 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-4 md:gap-12 border-white/10 shadow-2xl mx-4 md:mx-6 shrink-0"
      >
        <div className="text-sm md:text-lg font-black tracking-[0.4em] uppercase italic cursor-pointer group shrink-0">
          LUMI<span>N</span>EX<span className="text-luminex-yellow">.</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
          <a href="#collections" className="hover:opacity-100 hover:text-luminex-yellow transition-all">Collections</a>
          <a href="#how-it-works" className="hover:opacity-100 hover:text-luminex-yellow transition-all">The Process</a>
          <a href="#reviews" className="hover:opacity-100 hover:text-luminex-yellow transition-all">Testimonials</a>
        </div>

        <button 
          onClick={onOrder}
          className="px-5 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-luminex-yellow hover:text-white transition-all transform hover:scale-105"
        >
          Gift Now
        </button>
      </motion.nav>
    </div>
  );
}

export function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="relative h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="blob bg-luminex-accent-yellow w-[1000px] h-[1000px] top-[-400px] left-[-300px] opacity-15" />
      <div className="blob bg-luminex-accent-purple w-[800px] h-[800px] bottom-[-300px] right-[-200px] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border-thin pointer-events-none opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] border-thin pointer-events-none opacity-10" />

      {/* Side Label */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 flex items-center gap-4 opacity-40 hidden lg:flex">
        <span className="text-[10px] uppercase tracking-[0.4em]">A Donum Original</span>
        <div className="w-[1px] h-20 bg-white/20"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center relative mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.5em] text-luminex-yellow font-bold mb-8 glow-text">
            Custom Glowing Memories
          </span>
          <h1 className="text-5xl md:text-[140px] font-serif italic leading-[1] md:leading-[0.8] tracking-tighter select-none mb-12 uppercase">
            LUMI<span className="text-luminex-yellow px-1">N</span>EX<span className="not-italic text-luminex-yellow text-glow">.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <p className="max-w-md text-xs md:text-base leading-relaxed opacity-60 italic font-serif text-center md:text-left balance">
              "Turn your favorite moments into a beautifully glowing keepsake, crafted to capture emotion, tell your story, and be treasured forever."
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
              <button 
                onClick={onOrder}
                className="flex-1 md:flex-none px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-luminex-yellow hover:text-white transition-all duration-300 pointer-events-auto shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:scale-105"
              >
                Place Order
              </button>
              <button 
              onClick={() => window.location.href = '#how-it-works'}
              className="flex-1 md:flex-none px-8 md:px-10 py-4 md:py-5 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-luminex-yellow hover:text-luminex-yellow transition-all pointer-events-auto">
                The Process
              </button>
            </div>
          </div>
        </motion.div>
      </div>

        {/* Hero Metadata & Watermark Mask */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-luminex-black via-luminex-black/60 to-transparent z-20 pointer-events-none" />
      
      <div className="absolute bottom-10 left-12 hidden lg:block overflow-hidden z-30">
        <div className="absolute inset-x-[-20px] bottom-[-20px] top-[-20px] bg-luminex-black blur-3xl opacity-90" />
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col gap-2 relative z-10"
        >
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-luminex-yellow" />
             <span className="text-[10px] font-mono tracking-widest uppercase text-luminex-yellow/80">Handcrafted in India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ProductSection({ onOrder }: { onOrder: () => void }) {
  const products = [
    { 
      name: 'LumiChain', 
      desc: 'Carry your favorite memory anywhere with our signature handcrafted glowing keychain.', 
      price: '₹299', 
      icon: <Zap />, 
      img: 'LumiChain.jpg'
    },
    { 
      name: 'LumiFrame', 
      desc: 'The perfect minimalist light frame for your desktop, bringing a soft glow to your most cherished moments.', 
      price: '₹699', 
      icon: <Sparkles />, 
      img: 'LumiFrameV1.png'
    },
    { 
      name: 'LumiBox', 
      desc: 'Our signature deep-etched wooden light box designed for the ultimate sentimental gift.', 
      price: '₹999', 
      icon: <Heart />, 
      img: 'LumiBox.png'
    },
  ];

  return (
    <section id="collections" className="py-32 px-6 border-t border-white/5 bg-luminex-black relative overflow-hidden">
      <div className="blob bg-luminex-accent-yellow w-[1000px] h-[1000px] top-[-20%] left-[-20%] opacity-10" />
      <div className="blob bg-luminex-accent-purple w-[800px] h-[800px] bottom-[-10%] right-[-10%] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.03),transparent_70%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">The Collections</span>
            <h2 className="text-5xl md:text-[6rem] font-serif italic leading-none mt-4">Gifting<br />Concepts.</h2>
          </div>
          <div className="flex flex-col items-end gap-6 text-right">
            <div className="w-32 h-[1px] bg-gradient-to-r from-luminex-yellow/40 to-transparent"></div>
            <p className="max-w-xs text-white/30 text-[11px] leading-relaxed uppercase tracking-[0.1em]">
              Premium Gifting articles designed to capture the beauty & essence of memories, transforming timeless moments into illuminated legacies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] md:h-[700px] rounded-[32px] overflow-hidden bg-luminex-dark border border-white/5 transition-all duration-500"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={p.img} 
                  alt={p.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luminex-black via-luminex-black/40 to-transparent opacity-80" />
              </div>

              <div className="flex flex-col h-full justify-between p-10 z-10 relative">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-luminex-yellow font-black opacity-80">Artisan Series</span>
                    <h3 className="text-3xl font-serif italic text-white group-hover:text-luminex-yellow transition-colors">{p.name}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-luminex-yellow transition-all">
                    {p.icon}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-luminex-yellow/60">
                    <Zap className="w-3 h-3" />
                    <span className="text-[8px] uppercase tracking-widest font-black">Memory Optimized</span>
                  </div>
                  
                  <div className="h-px w-full bg-white/10"></div>
                  
                  <div className="space-y-6">
                    <p className="text-white/40 text-[11px] leading-relaxed font-medium uppercase tracking-[0.1em] line-clamp-2">
                      {p.desc}
                    </p>
                    <button 
                      onClick={onOrder}
                      className="w-full py-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden hover:bg-luminex-yellow hover:text-white transition-all shadow-xl active:scale-95"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
