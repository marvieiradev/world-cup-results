import MatchCard from "./MatchCard";
import { useState } from "react";

export function GroupPhase({ matches, dates }) {
    const [groupMode, setGroupMode] = useState(false);

    const matchesByGroup = matches.reduce((acc, match) => {
        const group = match.Group;

        if (!acc[group]) {
            acc[group] = [];
        }

        acc[group].push(match);

        return acc;
    }, {});

    return (
        <div className="justify-center items-center">
            <div className="flex items-center justify-between px-2 -mb-4 -mt-4 bg-white py-2 rounded-full w-full max-w-md mx-auto">
                <button onClick={() => setGroupMode(false)} className={`px-6 py-2  text-white rounded-full ${!groupMode ? 'bg-black' : 'bg-green-600'}`}>Jogos por Data</button>
                <button onClick={() => setGroupMode(true)} className={`px-6 py-2 text-white rounded-full ${groupMode ? 'bg-black' : 'bg-green-600'}`}>Jogos por Grupo</button>
            </div>
            {groupMode ? (
                <div className="p-2 w-full">
                    {
                        Object.keys(matchesByGroup)
                            .sort()
                            .map((group) => (
                                <div key={group}>
                                    <h2 className="text-base md:text-2xl font-semibold mb-4 mt-6 text-white text-center bg-black rounded-lg py-1 px-2">
                                        Grupo {group}
                                    </h2>

                                    {matchesByGroup[group].map((match) => (
                                        <div key={match.idEvent} className="w-full mb-4">
                                            <MatchCard
                                                match={match}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))
                    }
                </div>
            ) : (
                <div className="p-2 w-full">
                    {
                        dates.map((date) => (
                            <div key={date}>
                                <h2 className="text-base md:text-2xl font-semibold mb-4 mt-6 text-white text-center bg-black rounded-lg py-1 px-2">{new Date(date).toLocaleString("pt-BR", { dateStyle: "medium", timeZone: "UTC", })}</h2>
                                {matches
                                    .filter((match) => match.strTimestamp.startsWith(date))
                                    .map((match) => (
                                        <div key={match.idEvent} className="w-full mb-4">
                                            <MatchCard match={match} />
                                        </div>
                                    ))}
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    );
}