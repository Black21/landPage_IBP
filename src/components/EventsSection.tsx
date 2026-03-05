import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

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
    <section id="eventos" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-light uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Agenda
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Próximos Eventos
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-navy-light/50 border border-cream/10 rounded-xl p-6 hover:bg-navy-light/70 transition-colors group"
            >
              {/* Date badge */}
              <div className="flex-shrink-0 w-20 h-20 bg-accent rounded-xl flex flex-col items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl leading-none">
                  {event.date.split(" ")[0]}
                </span>
                <span className="text-accent-foreground/80 text-xs uppercase mt-1">
                  {event.date.split(" ")[1]}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-cream mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-cream/60 text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                </div>
                <p className="text-cream/50 text-sm">{event.description}</p>
              </div>

              <ArrowRight className="h-5 w-5 text-cream/30 group-hover:text-accent transition-colors hidden sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
