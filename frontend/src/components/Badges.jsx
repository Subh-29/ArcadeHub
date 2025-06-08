import BadgeSkeleton from "./BadgeSkeleton";

const BadgeGrid = ({ data, loading }) => {
    const sections = [
        { key: 'skillBadge', title: 'Skill Badges' },
        { key: 'labFree', title: 'Free Lab Badges' },
        { key: 'games', title: 'Game Badges' },
        { key: 'specGames', title: 'Special Game Badges' },
        { key: 'trivia', title: 'Trivia Badges' },
        { key: 'certifications', title: 'Certifications' },
        { key: 'badges', title: 'All Badges' } // fallback when flag is false
    ];
    //   console.log("New Data: ",data.data);
    // console.log(":", loading);

    return (
        <div className=" relative py-3 mt-10 w-full space-y-12">
            {loading
                ? <BadgeSkeleton />
                : sections.map(({ key, title }) => {
                    const badgeList = data[key];
                    if (!badgeList || badgeList.length === 0) return null;

                    return (
                        <div key={key} className="px-4 py-6 bg-gray-900 border border-gray-600 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]">
                            <h2 className="text-2xl sm:text-3xl text-white font-bold text-center mb-6">{title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                                {badgeList.map((badge, idx) => (
                                    <div key={idx} className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={badge?.badgeImage || "https://via.placeholder.com/150"}
                                            alt={badge?.badgeName}
                                            className="rounded-lg w-full h-40 object-contain mb-4 border border-gray-700"
                                        />
                                        <p className="text-white font-semibold truncate text-lg">{badge?.badgeName}</p>
                                        <p className="text-gray-400 text-sm mt-1 truncate">Date: {badge?.badgeDate || "01-01-1970"}</p>
                                        <p className="text-gray-400 text-sm mt-1 truncate">Issuer: {badge?.issuer || "Google Cloud"}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default BadgeGrid;
