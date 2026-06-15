export const TeamScore = ({ score }) => {
    return (
        <div className="flex gap-2 items-center justify-center w-10 h-12 bg-green-100 rounded-sm border border-gray-200">
            <span className="text-3xl font-bold py-2">{score}</span>
        </div>
    );
}
