import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
{
  period: "2024 – Present",
  company: "Viasat + Inmarsat",
  role: "Capacity Forecasting Engineer",
  description:
  "Forecasting satellite supply and demand to support operations and long-term strategy. Building models combining current and future satellite capacity with projected demand, using Python and geospatial data (beam footprints, H3 grids) for custom reports and visualisations.",
  tech: ["Python", "GCP BigQuery", "H3 Grids", "Geospatial"]
},
{
  period: "2021 – 2024",
  company: "Viasat + Inmarsat",
  role: "Systems Architect",
  description:
  "Independently led simulation and modelling on the Networks Architecture team. Reviewed and improved all link budget analysis tools. Built a self-service site using Jupyter notebooks, Docker and GCP App Engine — calculating expected throughput as a function of location from satellite antenna directivity files and terminal specs.",
  tech: ["Jupyter", "Docker", "GCP App Engine", "Link Budgets"]
},
{
  period: "2019 – 2021",
  company: "Inmarsat",
  role: "Technical & Engineering Graduate",
  description:
  "Rotated across User Terminals, Operations Frequency Planning, and Satellite Resource Engineering. Built a real-time Python monitoring tool and dashboard analysing RF performance data from GCP BigQuery, identifying underperforming terminals. Migrated key reports and automated capacity analysis.",
  tech: ["Python", "GCP BigQuery", "RF Analysis", "Automation"]
},
{
  period: "2016 – 2017",
  company: "Airbus Defence & Space",
  role: "Mechanical Analysis Intern",
  description:
  "Year in Industry in the Stress Analysis Department. Developed a coded solution reducing modal mass mapping time from 3.5 hours to 5 seconds. Created an automated ISIGHT program for spacecraft modal and sine response analysis, presented to 50+ engineers and senior managers.",
  tech: ["Femap", "Nastran", "Isight", "Structural Analysis"]
}];


const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          
          <p className="font-mono text-sm tracking-widest uppercase text-accent mb-4">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
            Professional experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) =>
          <motion.article
            key={exp.role + exp.company}
            className="relative pl-8"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
            
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent" />

              <div className="mb-1">
                <span className="font-mono text-xs tracking-wider text-accent">{exp.period}</span>
                <span className="font-mono text-xs tracking-wider text-muted-foreground"> · {exp.company}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{exp.role}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl text-sm">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) =>
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded-sm">
                
                    {t}
                  </span>
              )}
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

};

export default ExperienceSection;