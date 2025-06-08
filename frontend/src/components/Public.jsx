"use client";

const Public = ({ profile }) => {
  if (!profile) return null;

  const {
    profAv = "https://via.placeholder.com/100",
    profName = "N/A",
    league = "N/A",
    score = "N/A",
    leagueImage = ""
  } = profile;

  return (
    <div className="w-full h-full  p-4 bg-gray-900 border border-gray-700 rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.8)] text-white space-y-4">
      
      {/* Avatar + Name */}
      <div className="flex items-center gap-4">
        <img
          src={profAv}
          alt="Avatar"
          className="w-22 aspect-square drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)] rounded-full border border-gray-600 object-cover"
        />
        <div>
          <h3 className="text-3xl font-bold drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">{profName}</h3>
          <p className="text-gray-400 text-sm">Public Profile</p>
        </div>
      </div>

      {/* League Info */}
      <div className="bg-gray-800 p-3 rounded-xl border border-gray-600 drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-xl">League</span>
          <span className="font-semibold text-lg">{league}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-xl">Score</span>
          <span className="font-semibold text-lg">{score}</span>
        </div>
      </div>

      {/* League Badge */}
      {leagueImage && (
        <div className="flex justify-center">
          <img
            src={leagueImage}
            alt="League Badge"
            className="h-24 object-contain border border-gray-700 p-2 rounded-lg bg-gray-700 drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)]"
          />
        </div>
      )}
    </div>
  );
};

export default Public;
