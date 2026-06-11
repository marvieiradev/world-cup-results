import TeamCard from "./TeamCard";
import { FaLocationDot } from "react-icons/fa6";


const MatchCard = ({ match }) => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center bg-white rounded-t-lg rounded-br-lg w-full">
            <div className="flex w-full justify-evenly bg-black rounded-t-lg text-white p-2 items-center">
                <span className="text-sm font-semibold md:text-base">{new Date(match.strTimestamp).toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short" })}</span>
                <div className="flex gap-1 items-center bg-gray-900 rounded-full px-2">
                    <span className="text-sm md:text-base font-semibold text-green-400">Grupo {match.Group}</span>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
                <div className="flex-1 flex justify-end">
                    <TeamCard teamName={match.HomeTeam} teamScore={match.HomeScore} teamFlag={match.HomeTeam} typeTeam="home" />
                </div>
                <p className="text-2xl font-bold">X</p>
                <div className="flex-1 flex justify-start">
                    <TeamCard teamName={match.AwayTeam} teamScore={match.AwayScore} teamFlag={match.AwayTeam} typeTeam="away" />
                </div>
            </div>
            <div className="flex items-center gap-2  mt-2 mb-2">
                <FaLocationDot />
                <span className="text-sm  md:text-base text-gray-800 font-bold">{match.Location}</span>
            </div>
        </div>
    );
}

export default MatchCard;