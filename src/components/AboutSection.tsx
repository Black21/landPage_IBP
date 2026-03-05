import { motion } from "framer-motion";
import communityImage from "@/assets/community.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={communityImage}
              alt="Comunidade da igreja reunida"
              className="rounded-3xl w-full object-cover aspect-square border border-white/5"
            />
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-accent/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Sobre nós
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Uma comunidade de{" "}
              <span className="text-gradient-electric">fé e amor</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Há mais de 30 anos, a Igreja da Luz tem sido um refúgio de esperança e
              transformação. Nossa missão é compartilhar o amor de Deus e construir
              uma comunidade acolhedora para todas as pessoas.
            </p>
            <p className="text-white/45 leading-relaxed mb-8">
              Acreditamos que cada pessoa é única e especial aos olhos de Deus.
              Aqui você encontrará um lugar para crescer na fé, desenvolver amizades
              verdadeiras e servir ao próximo com alegria.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "30+", label: "Anos" },
                { number: "500+", label: "Membros" },
                { number: "15", label: "Ministérios" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-extrabold text-accent">
                    {stat.number}
                  </p>
                  <p className="text-white/40 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
