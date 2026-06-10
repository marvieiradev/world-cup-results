export function PlayoffPhase({ phase }) {
    return (
        <div className="min-h-screen">
            {phase === 'Segunda Fase' && <p className="text-center text-white text-2xl font-bold min-h-screen">Segunda Fase em breve...</p>}
            {phase === 'Oitavas-de-Final' && <p className="text-center text-white text-2xl font-bold min-h-screen">Oitavas-de-Final em breve...</p>}
            {phase === 'Quartas-de-Final' && <p className="text-center text-white text-2xl font-bold min-h-screen">Quartas-de-Final em breve...</p>}
            {phase === 'Semi-Final' && <p className="text-center text-white text-2xl font-bold min-h-screen">Semi-Final em breve...</p>}
            {phase === 'Terceiro Lugar' && <p className="text-center text-white text-2xl font-bold min-h-screen">Terceiro lugar em breve...</p>}
            {phase === 'Final' && <p className="text-center text-white text-2xl font-bold min-h-screen">Final em breve...</p>}
        </div>
    )
}