import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background dark:bg-dark-light">
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
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground dark:text-white">
            Entre em Contato
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Endereço",
              info: "Rua Aratangi, 149",
              detail: "Coelho neto - Rio de Janeiro - RJ",
            },
            {
              icon: Instagram,
              title: "Instagram",
              info: "@batistadapaz1",
              detail: "Nos siga",
              url: "https://www.instagram.com/batistadapaz1/",
            }
          ].map((item, i) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center bg-[#3c83f6] text-white dark:bg-dark/50 dark:text-foreground rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-colors cursor-pointer h-full"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-white dark:text-foreground mb-1">{item.title}</h3>
                <p className="text-white dark:text-foreground/70 font-medium text-sm">{item.info}</p>
                <p className="text-white dark:text-foreground/40 text-sm">{item.detail}</p>
              </motion.div>
            );

            return (
              <div key={item.title}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
