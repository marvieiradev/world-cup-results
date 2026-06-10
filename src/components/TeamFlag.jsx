export const TeamFlag = ({ team }) => {
    const baseUrl = "https://www.thesportsdb.com/images/icons/svg/flags/";
    const teamName = team.toString().replace(/\s/g, '-').replace('ç', 'c');
    return (
        <div className="border border-white rounded-md overflow-hidden w-8 h-6">
            <img src={`${baseUrl}${teamName}.svg`} alt={team} className="w-full h-full" />
        </div>
    );
}