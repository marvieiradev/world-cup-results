import groupMatches from "./data/db"
import datesGroupPhase from "./data/dateOfMatches"
import MatchCard from "./components/MatchCard"
import { GroupPhase } from "./components/GroupPhase"
import { PlayoffPhase } from "./components/PlayoffPhase"
import { Header } from "./components/Header"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

function App() {

  const [phase, setPhase] = useState(0);
  const phases = ["Fase de grupos", "Segunda Fase", "Oitavas-de-Final", "Quartas-de-Final", "Semi-Final", "Terceiro Lugar", "Final"];

  return (
    <div className="bg-linear-to-b from-green-500 to-emerald-500">
      <Header />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-around text-xl md:text-2xl font-bold mb-4 text-white text-center bg-green-950 p-2 items-center">
          <div onClick={() => setPhase((p) => Math.max(0, p - 1))} >
            <FaChevronLeft className={phase === 0 ? "opacity-0" : "opacity-100"} />
          </div>
          <span>{phases[phase]}</span>
          <div onClick={() => setPhase((p) => Math.min(6, p + 1))}>
            <FaChevronRight className={phase === 6 ? "opacity-0" : "opacity-100"} />
          </div>
        </div>
        <div className=" p-4">
          {phase === 0 && <GroupPhase matches={groupMatches} dates={datesGroupPhase} />}
          {phase >= 1 && <PlayoffPhase phase={phases[phase]} />}
        </div>
      </div>
    </div>
  )
}

export default App
