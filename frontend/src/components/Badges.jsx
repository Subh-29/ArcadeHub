import { motion } from 'framer-motion';
import BadgeSkeleton from "./BadgeSkeleton";

const BadgeGrid = ({ data, loading }) => {
    const sections = [
        { key: 'skillBadge', title: 'Skill Badges' },
        { key: 'labFree', title: 'Free Lab Badges' },
        { key: 'games', title: 'Game Badges' },
        { key: 'specGames', title: 'Special Game Badges' },
        { key: 'trivia', title: 'Trivia Badges' },
        { key: 'certifications', title: 'Certifications' },
        { key: 'badges', title: 'All Badges' }
    ];

    return (
        <div className="relative py-6 mt-10 w-full space-y-16">
            {loading ? (
                <BadgeSkeleton />
            ) : (
                sections.map(({ key, title }) => {
                    const badgeList = data[key];
                    if (!badgeList || badgeList.length === 0) return null;

                    return (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="px-4 sm:px-6 py-8 bg-gray-900 border border-gray-600 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]"
                        >
                            <motion.h2
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-center text-3xl md:text-4xl font-extrabold text-white mb-8 drop-shadow-lg tracking-wide"
                            >
                                {title}
                            </motion.h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {badgeList.map((badge, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="bg-gray-800 border border-gray-700 p-5 rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.8)] group hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] hover:shadow-blue-500/50"
                                    >
                                        <img
                                            src={badge?.badgeImage || "https://via.placeholder.com/150"}
                                            alt={badge?.badgeName}
                                            className="rounded-md w-full h-44 object-contain mb-4  "
                                        />
                                        <p className="text-white text-lg font-semibold truncate group-hover:text-blue-400 transition">
                                            {badge?.badgeName}
                                        </p>
                                        <p className="text-gray-400 text-sm mt-1 truncate">
                                            Date: {badge?.badgeDate || "01-01-1970"}
                                        </p>
                                        <p className="text-gray-400 text-sm truncate">
                                            Issuer: {badge?.issuer || "Google Cloud"}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })
            )}
        </div>
    );
};

export default BadgeGrid;
