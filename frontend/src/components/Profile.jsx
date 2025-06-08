"use client";

import BadgeGrid from "./Badges";

const Profile = (props) => {
    
    return (
        <div className="fixed px-4 py-4 h-full inset-0 z-50 bg-zinc-400/50 backdrop-blur-md bg-opacity-50 flex items-center justify-center ">
            <div className="bg-gray-900 border border-gray-600 rounded-xl p-6 relative w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-lg">
                {/* Close Button */}
                <div className="absolute  ">

                    <button
                        onClick={props.onClose}
                        className="fixed top-2 right-5 text-white text-xl hover:text-red-400"
                    >
                        ✖
                    </button>
                </div>

                {/* Modal Content */}
                <h2 className="text-white text-xl mb-4">Profile Details</h2>
                {<BadgeGrid data={props?.profileData || {}} loading={props.loading} />}
            </div>
        </div>
    );
};

export default Profile;
