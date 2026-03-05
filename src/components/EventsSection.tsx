import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    date: "15 Mar",
    title: "Retiro de Jovens",
    location: "Sítio Esperança",
    description: "Um final de semana de renovação espiritual para jovens de 15 a 30 anos.",
  },
  {
    date: "22 Mar",
    title: "Café com Propósito",
    location: "Salão da Igreja",
    description: "Manhã especial para conhecer novos membros e compartilhar testemunhos.",
  },
  {
    date: "05 Abr",
    title: "Cantata de Páscoa",
    location: "Templo Principal",
    description: "Apresentação musical especial celebrando a ressurreição de Cristo.",
  },
];

const EventsSection = () => {
  return (
    <section id="eventos" className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Agenda
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Próximos Eventos
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-dark-light/50 border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all group"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-accent rounded-2xl flex flex-col items-center justify-center">
                <span className="text-accent-foreground font-extrabold text-xl leading-none">
                  {event.date.split(" ")[0]}
                </span>
                <span className="text-accent-foreground/80 text-xs uppercase mt-1">
                  {event.date.split(" ")[1]}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-white/40 text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                </div>
                <p className="text-white/35 text-sm">{event.description}</p>
              </div>

              <ArrowRight className="h-5 w-5 text-white/20 group-hover:text-accent transition-colors hidden sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
