import { motion } from "framer-motion";
import { Clock, Calendar, BookOpen } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Culto Dominical",
    day: "Domingos",
    time: "09:00 & 18:00",
    description: "Celebração principal com louvor e pregação da Palavra.",
  },
  {
    icon: Calendar,
    title: "Estudo Bíblico",
    day: "Quartas-feiras",
    time: "19:30",
    description: "Momento de aprofundamento nas Escrituras.",
  },
  {
    icon: Clock,
    title: "Oração",
    day: "Sextas-feiras",
    time: "20:00",
    description: "Reunião de oração e intercessão pela comunidade.",
  },
];

const WorshipTimes = () => {
  return (
    <section id="horarios" className="py-24 bg-secondary">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Horários dos Cultos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-accent font-semibold text-lg mb-1">{service.time}</p>
              <p className="text-muted-foreground text-sm font-medium mb-3">{service.day}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
