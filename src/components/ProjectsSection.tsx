import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Structural",
    title: "Composite Wing Box Optimization",
    description:
      "Led the structural redesign of a regional jet wing box using CFRP laminates, achieving 18% weight reduction while maintaining fail-safe damage tolerance requirements.",
    tech: ["ANSYS", "CATIA V5", "HyperSizer"],
  },
  {
    tag: "Propulsion",
    title: "Hydrogen Fuel Cell Integration Study",
    description:
      "Investigated thermal management and packaging constraints for integrating PEM fuel cells into a commuter aircraft, including BoP system architecture.",
    tech: ["MATLAB", "Simulink", "OpenFOAM"],
  },
  {
    tag: "Aerodynamics",
    title: "Natural Laminar Flow Nacelle Design",
    description:
      "Designed and validated an NLF nacelle geometry for a turbofan engine, reducing skin friction drag by 12% at cruise conditions through shape optimization.",
    tech: ["Fluent", "ICEM CFD", "Python"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="projects" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-4">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
            Selected projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group p-6 md:p-8 bg-card rounded-sm border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="font-mono text-xs tracking-wider uppercase text-accent">
                    {project.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-1 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-200 flex-shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
