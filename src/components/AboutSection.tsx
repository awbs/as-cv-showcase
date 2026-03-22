import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "23", label: "Projects Delivered" },
  { value: "4", label: "Patents Filed" },
  { value: "3", label: "Publications" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            Engineering precision,
            <br />
            from concept to certification.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            className="space-y-5 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              With a background spanning structural analysis, computational fluid dynamics, 
              and propulsion system design, I bring a multidisciplinary approach to aerospace 
              engineering challenges.
            </p>
            <p>
              Currently focused on next-generation sustainable aviation concepts and 
              advanced composite structures, working at the intersection of performance 
              optimization and regulatory compliance.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-5 bg-card rounded-sm border border-border shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-3xl font-bold text-foreground font-mono">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
