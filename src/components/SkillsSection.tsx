import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Analysis & Simulation",
    skills: ["FEA (ANSYS, Nastran)", "CFD (Fluent, OpenFOAM)", "Thermal Analysis", "Fatigue & Damage Tolerance"],
  },
  {
    title: "Design & CAD",
    skills: ["CATIA V5/V6", "SolidWorks", "Siemens NX", "GD&T / Tolerancing"],
  },
  {
    title: "Materials & Structures",
    skills: ["Composite Laminates", "Metallic Structures", "Bonded Joints", "Additive Manufacturing"],
  },
  {
    title: "Tools & Programming",
    skills: ["MATLAB / Simulink", "Python (NumPy, SciPy)", "DOORS (Requirements)", "Git / Version Control"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/50" ref={ref}>
      <div className="container max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
            Technical capabilities
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="p-6 bg-card rounded-sm border border-border shadow-sm"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-lg">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
