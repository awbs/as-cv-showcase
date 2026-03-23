import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "exit">("logo");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("exit"), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== "exit" ? null : null}
      <motion.div
        key="loader"
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ backgroundColor: "hsl(var(--hero-bg))" }}
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => {
          if (phase === "exit") onComplete();
        }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-2xl tracking-wider" style={{ color: "hsl(var(--hero-foreground))" }}>
            AS<span style={{ color: "hsl(var(--hero-accent))" }}>.</span>
          </p>
          <motion.div
            className="mt-4 h-px w-12 mx-auto"
            style={{ backgroundColor: "hsl(var(--hero-accent))" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
