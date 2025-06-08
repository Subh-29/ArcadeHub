const Table = ( data ) => {


    let totalPoints = 0;
    data?.count?.forEach(element => {
        totalPoints += element.point;
    });


    return (
        <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-[6px_6px_0px_rgba(0,0,0,0.8)] bg-gray-900 text-white">
            <table className="min-w-full table-auto text-left">
                <thead className="bg-gray-800 border-b border-gray-600">
                    <tr>
                        <th className="px-4 py-3 text-lg">Category</th>
                        <th className="px-4 py-3 text-lg">Quantity</th>
                        <th className="px-4 py-3 text-lg">Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.count?.map((elem, idx) => {
                        // const qty = data[key]?.length || 0;
                        // const total = qty * points;

                        return (
                            <tr key={idx} className="border-t border-gray-700 lg:hover:bg-zinc-800 transition">
                                <td className="px-4 py-3">{elem.key}</td>
                                <td className="px-4 py-3">{elem.count}</td>
                                <td className="px-4 py-3">{elem.point}</td>
                            </tr>
                        );
                    })}
                    <tr className="bg-gray-800 border-b border-gray-600 text-xl">
                                <td colSpan={2} className="px-4 py-3">Total</td>
                                {/* <td className="px-4 py-3">Total</td> */}
                                <td className="px-4 py-3">{totalPoints}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
