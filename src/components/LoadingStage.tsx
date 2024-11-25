import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { useState } from "react";

interface LoadingStageProps {
  onComplete?: () => void;
}

export const LoadingStage = ({ onComplete }: LoadingStageProps) => {
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const [gapsClosed, setGapsClosed] = useState(false);

  return (
    <motion.div
      className={`grid grid-cols-2 gap-2 h-screen w-screen transition-colors ${
        gapsClosed
          ? "bg-gradient-to-b from-65% from-[#3bbfa0] to-[#54cc96]"
          : "bg-transparent"
      }`}
      animate={logoAnimationComplete && !gapsClosed ? { gap: 0 } : {}}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (logoAnimationComplete) {
          setGapsClosed(true);
          onComplete?.();
        }
      }}
    >
      {!gapsClosed && (
        <>
          <motion.div
            className="bg-emerald-400"
            animate={logoAnimationComplete ? { scale: 1.02 } : {}}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="bg-teal-400"
            animate={logoAnimationComplete ? { scale: 1.02 } : {}}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="bg-teal-400"
            animate={logoAnimationComplete ? { scale: 1.02 } : {}}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="bg-emerald-400"
            animate={logoAnimationComplete ? { scale: 1.02 } : {}}
            transition={{ duration: 0.5 }}
          />
        </>
      )}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Logo onComplete={() => setLogoAnimationComplete(true)} />
      </motion.div>
    </motion.div>
  );
};
