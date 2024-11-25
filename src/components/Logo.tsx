import { motion } from "framer-motion";

interface LogoProps {
  onComplete?: () => void;
}

export const Logo = ({ onComplete }: LogoProps) => (
  <motion.svg
    width="183"
    height="188"
    viewBox="0 0 183 188"
    fill="none"
    className="size-48"
  >
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{
        pathLength: 1,
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
      onAnimationComplete={onComplete}
      stroke="black"
      strokeWidth="2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M87.4455 2.77269C109.979 -2.96038 134.023 -0.169753 152.83 14.5936L152.845 14.606L152.861 14.6183C171.548 29.3665 179.968 51.9437 179.695 75.1789L149.056 74.8203C149.242 58.9954 143.608 46.3243 133.879 38.6369C124.108 30.9753 110.409 28.5052 95.0105 32.423C79.5857 36.3475 63.33 46.5847 50.561 62.7891C37.7868 79.0001 31.6337 97.1807 31.4318 113.071C31.2303 128.931 36.8478 141.653 46.623 149.359C56.3943 157.024 70.0955 159.496 85.4969 155.577C100.922 151.653 117.177 141.415 129.946 125.211C136.288 117.163 141.002 108.575 144.192 99.9282L172.944 110.506C168.645 122.157 162.356 133.561 154.026 144.132C137.452 165.165 115.577 179.499 93.062 185.227C70.5285 190.96 46.4848 188.17 27.6777 173.406L27.6677 173.399L27.6578 173.391C8.86071 158.585 0.498527 135.904 0.793606 112.682C1.08839 89.484 9.91247 64.8946 26.4814 43.8679C43.0555 22.8346 64.9306 8.50104 87.4455 2.77269Z"
    >
      <animate
        attributeName="stroke"
        values="black;white"
        dur="3s"
        fill="freeze"
      />
      <animate
        attributeName="fill"
        values="black;white"
        dur="3s"
        fill="freeze"
      />
    </motion.path>
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{
        pathLength: 1,
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
      stroke="black"
      strokeWidth="2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M151.683 119.854H87.159V89.377H182.786L182.238 188L151.305 187.833L151.683 119.854Z"
    >
      <animate
        attributeName="stroke"
        values="black;white"
        dur="3s"
        fill="freeze"
      />
      <animate
        attributeName="fill"
        values="black;white"
        dur="3s"
        fill="freeze"
      />
    </motion.path>
  </motion.svg>
);
