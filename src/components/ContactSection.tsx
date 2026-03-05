import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Fale conosco
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Entre em Contato
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Endereço",
              info: "Rua da Esperança, 123",
              detail: "Centro, São Paulo - SP",
            },
            {
              icon: Phone,
              title: "Telefone",
              info: "(11) 1234-5678",
              detail: "Seg a Sex, 9h às 17h",
            },
            {
              icon: Mail,
              title: "E-mail",
              info: "contato@igrejadaluz.com",
              detail: "Respondemos em até 24h",
            },
            {
              icon: Clock,
              title: "Secretaria",
              info: "Seg a Sex",
              detail: "09:00 às 17:00",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-foreground font-medium text-sm">{item.info}</p>
              <p className="text-muted-foreground text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
