import { TeamFlag } from "./TeamFlag";
import { TeamScore } from "./TeamScore";
import teams from "../data/teams";

export default function HomeTeamCard({ teamName, teamScore, teamFlag, typeTeam }) {
    function getTeamName(teamName) {
        const team = teams.find((t) => t.team === teamName);
        return team ? team.name : teamName;
    }

    function getTeamTag(teamName) {
        const team = teams.find((t) => t.team === teamName);
        return team ? team.tag : teamName;
    }

    return (
        <>
            {typeTeam === "home" ? (
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col gap-1 justify-end items-end">
                        <div className="flex gap-2 items-center justify-center">
                            <h2 className="text-xl md:text-2xl font-bold">{getTeamTag(teamName)}</h2>
                            <TeamFlag team={teamFlag} />
                        </div>
                        <span className="text-sm md:text-base text-gray-700 text-end text-ellipsis">{getTeamName(teamName)}</span>
                    </div>
                    <TeamScore score={teamScore} />
                </div>
            ) : (
                <div className="flex gap-2 items-center justify-center">
                    <TeamScore score={teamScore} />
                    <div className="flex flex-col gap-1 justify-start items-start">
                        <div className="flex gap-2 justify-center items-center">
                            <TeamFlag team={teamFlag} />
                            <h2 className="text-xl md:text-2xl font-bold">{getTeamTag(teamName)}</h2>
                        </div>
                        <span className="text-sm md:text-base text-gray-700 text-start text-ellipsis">{getTeamName(teamName)}</span>
                    </div>

                </div>
            )}

        </>
    );
}

