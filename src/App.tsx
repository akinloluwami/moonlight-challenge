import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingStage } from "./components/LoadingStage";
import { TransitionStage } from "./components/TransitionStage";
import { ContentStage } from "./components/ContentStage";

function App() {
  const [stage, setStage] = useState(1);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AnimatePresence>
        {stage === 1 && <LoadingStage onComplete={() => setStage(2)} />}

        {stage === 2 && <TransitionStage onComplete={() => setStage(3)} />}

        {stage === 3 && <ContentStage />}
      </AnimatePresence>
    </div>
  );
}

export default App;
