import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-24 md:py-32 bg-hero text-hero-foreground" ref={ref}>
      <div className="container max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-hero-accent mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Let's connect.
          </h2>
          <p className="text-hero-muted leading-relaxed mb-10">
            Open to new opportunities in satellite systems, capacity planning, and 
            data-driven engineering roles.
          </p>

          <div className="space-y-4 mb-10">
            <a href="mailto:adamskitt@btinternet.com" className="flex items-center gap-3 text-hero-foreground hover:text-hero-accent transition-colors duration-200">
              <Mail className="w-4 h-4 text-hero-accent" />
              <span className="text-sm">adamskitt@btinternet.com</span>
            </a>
            <a href="tel:07969106777" className="flex items-center gap-3 text-hero-foreground hover:text-hero-accent transition-colors duration-200">
              <Phone className="w-4 h-4 text-hero-accent" />
              <span className="text-sm">07969-106-777</span>
            </a>
            <div className="flex items-center gap-3 text-hero-foreground">
              <MapPin className="w-4 h-4 text-hero-accent" />
              <span className="text-sm">London, United Kingdom</span>
            </div>
          </div>

          <a
            href="mailto:adamskitt@btinternet.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
