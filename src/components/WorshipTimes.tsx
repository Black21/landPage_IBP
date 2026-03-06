import { motion } from "framer-motion";
import { Clock, Calendar, BookOpen, SunDim } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Escola Bíblica Dominical",
    day: "Domingos",
    time: "09:00",
    description: "Momento de aprofundamento nas Escrituras.",
  },
  {
    icon: Clock,
    title: "Culto de Oração",
    day: "Quartas-feiras",
    time: "19:00",
    description: "Reunião de oração e intercessão pela comunidade.",
  },
  {
    icon: SunDim,
    title: "Amigos de Missão",
    day: "Terças-feiras",
    time: "18:00",
    description: "Reunião das crianças.",
  },
];

const WorshipTimes = () => {
  return (
    <section id="horarios" className="py-24 bg-background dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Programação
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground dark:text-white">
            Horários das Programações
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#3c83f6] text-white dark:bg-dark-light/50 dark:text-foreground backdrop-blur-sm rounded-2xl p-8 text-center border border-white/5 hover:border-accent/30 hover:glow-accent transition-all group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-white dark:text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-accent font-bold text-2xl mb-1">{service.time}</p>
              <p className="text-white dark:text-foreground/40 text-sm font-medium mb-3">{service.day}</p>
              <p className="text-white dark:text-foreground/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorshipTimes;
