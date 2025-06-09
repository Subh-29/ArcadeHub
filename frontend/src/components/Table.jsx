const Table = (data) => {
    let totalPoints = 0;
    data?.count?.forEach(element => {
        totalPoints += element.point;
    });


    return (
        <div className="h-full flex flex-col bg-gray-900 text-white rounded-xl border border-gray-700 shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
            <div className="flex bg-gray-800 border-b border-gray-600">
                <div className="w-1/3 px-4 py-3 text-lg">Category</div>
                <div className="w-1/3 px-4 py-3 text-lg">Quantity</div>
                <div className="w-1/3 px-4 py-3 text-lg">Total Points</div>
            </div>

            <div className="flex-1 flex flex-col overflow-y-auto">
                {data?.count?.map((elem, idx) => (
                    <div key={idx} className="flex flex-1 border-t border-gray-700 lg:hover:bg-zinc-800 transition">
                        <div className="w-1/3 px-4 py-3">{elem.key}</div>
                        <div className="w-1/3 px-4 py-3">{elem.count}</div>
                        <div className="w-1/3 px-4 py-3">{elem.point}</div>
                    </div>
                ))}

                <div className="flex bg-gray-800 border-t border-gray-600 text-xl">
                    <div className="w-2/3 px-4 py-3">Total</div>
                    <div className="w-1/3 px-4 py-3">{totalPoints}</div>
                </div>
            </div>
        </div>

    );
};

export default Table;
