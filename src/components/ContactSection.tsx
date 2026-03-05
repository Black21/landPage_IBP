import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-dark-light">
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
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            Entre em Contato
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
              className="text-center bg-dark/50 rounded-2xl p-6 border border-white/5"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-white mb-1">{item.title}</h3>
              <p className="text-white/70 font-medium text-sm">{item.info}</p>
              <p className="text-white/40 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
