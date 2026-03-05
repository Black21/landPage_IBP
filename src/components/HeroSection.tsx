import { motion } from "framer-motion";
import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior da igreja com luz dourada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-light uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-body"
        >
          Bem-vindo à
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight"
        >
          Igreja da{" "}
          <span className="text-gradient-gold">Luz</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-cream/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Um lugar de fé, amor e comunidade. Venha nos visitar e faça parte desta família.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#horarios"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-gold-dark transition-colors text-base tracking-wide"
          >
            Nossos Cultos
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-cream/40 text-cream font-semibold rounded-lg hover:bg-cream/10 transition-colors text-base tracking-wide"
          >
            Conheça-nos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
