const BadgeSkeleton = () => {
    // console.log("in badgeskelelele");

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {[...Array(3)].map((_, idx) => {
                return (
                    <div key={idx} className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-[4px_4px_0px_rgba(0,0,0,0.8)] animate-pulse">
                        <div className="rounded-lg w-full h-40 bg-gray-700 mb-4" />
                        <div className="h-4 bg-gray-600 rounded w-3/4 mb-2" />
                        <div className="h-3 bg-gray-600 rounded w-1/2" />
                    </div>
                )
            })}

        </div>
    );
}

export default BadgeSkeleton;
