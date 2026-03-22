import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, FileText } from "lucide-react";

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
            Let's build something
            <br />
            that flies.
          </h2>
          <p className="text-hero-muted leading-relaxed mb-10">
            Open to new opportunities in structural design, systems engineering, 
            and R&D roles. Feel free to reach out.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-medium rounded-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 border border-hero-muted/30 text-hero-foreground font-medium rounded-sm hover:border-hero-accent/50 active:scale-[0.97] transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 border border-hero-muted/30 text-hero-foreground font-medium rounded-sm hover:border-hero-accent/50 active:scale-[0.97] transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
