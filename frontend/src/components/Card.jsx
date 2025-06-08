// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Profile from "./Profile";
// import axios from "axios";
// import BadgeGrid from "./Badges";
// import { toast } from "react-toastify";
// import Table from "./Table";
// import Public from "./Public";
// import EasterEgg from './EasterEgg'
// import { motion } from 'framer-motion'

// const Card = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm();

//     const [isProfileOpen, setIsProfileOpen] = useState(false);
//     const [profLink, setProfLink] = useState("");
//     const [profileData, setProfileData] = useState(null);
//     const [badgeData, setBadgeData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [profLoading, setProfLoading] = useState(false);
//     const [counts, setCounts] = useState(null);
//     const [hero, setHero] = useState(null);

//     const profileLink = watch("profile_link") || "";
//     const isValidProfile = /^https:\/\/www\.cloudskillsboost\.google\/public_profiles\/.+$/.test(profileLink);

//     const SubmitHandler = async (formData) => {
//         setLoading(true);
//         setCounts(null);
//         setBadgeData(null);
//         setHero(null);
//         // const response = await axios.post("/api/route", formData);
//         // console.log(formData);
//         axios.post("/api/route", { ...formData, flag: true })
//             .then(res => {
//                 // console.log("API Response:", res);
//                 setBadgeData(res?.data?.data);
//                 setHero(res?.data?.data?.profile);
//                 setCounts(res?.data?.data?.counts);
//             })
//             .catch(err => console.error(err))
//             .finally(() => {
//                 setLoading(false);
//             });
//         // You can do something like:
//         // setPoints(response.data.totalPoints);
//     }


//     const ProfileHandler = async () => {
//         if (!isValidProfile) {
//             toast.error("Profile link is invalid");
//             return;
//         }
//         setProfLink(watch("profile_link"));
//         setIsProfileOpen(true);
//         setProfLoading(true);
//         // const response = await axios.post("/api/route", formData);
//         // console.log(formData);
//         const formData = watch();
//         axios.post("/api/route", { ...formData, flag: false })
//             .then(res => {
//                 setProfileData(res?.data?.data);
//                 setHero(res?.data?.data?.profile);
//             })
//             .catch(err => console.error(err))
//             .finally(() => {
//                 setProfLoading(false);
//             });
//         // setIsProfileOpen(false);
//     }
//     // console.log("Hero: ", hero);
//     // console.log("loading in card? ", loading);

//     return (
//         // <div className=" min-h-full">
//         <>

//             <motion.div
//                 initial={{ y: -50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//                 className=" z-10 px-8 md:px-10 lg:px-15 py-15 min-h-full  h-fit grid sm:grid-cols-2 gap-4 justify-center sm:justify-between items-center bg-gray-900 border border-gray-600 rounded-2xl transition-all ease-in-out shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] ">
//                 <div className=" text-3xl sm:text-5xl md:text-6xl text-center ">
//                     <p>Arcade Points Calculator</p>
//                 </div>
//                 <form
//                     onSubmit={handleSubmit(SubmitHandler)}
//                     className="grid grid-cols-1 gap-10 w-full"
//                 >
//                     <div className="flex justify-between items-center gap-8">
//                         {/* Round Button */}
//                         <div className={`w-10 aspect-square ${isValidProfile ? "bg-green-400" : "bg-red-500"} rounded-[50%] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] border-2 border-gray-700`} />

//                         {/* Input with 3 Border Layers */}
//                         <div className=" w-full flex flex-col gap-0 ">

//                             <div className="relative w-full focus-within:scale-115 sm:focus-within:scale-105 sm:hover:scale-115 duration-300">
//                                 <div className="absolute -top-1 -left-1 w-full h-full border-2 border-red-500 rounded-sm z-30 pointer-events-none " />
//                                 <div className="absolute -top-2 -left-2 w-full h-full border-2 border-yellow-500 rounded-sm z-20 pointer-events-none" />
//                                 <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#4283ec] rounded-sm z-10 pointer-events-none" />
//                                 <input
//                                     type="text"
//                                     placeholder="https://www.cloudskillsboost.google/public_profiles/"
//                                     {...register("profile_link", {
//                                         required: "Profile link can't be empty",
//                                         pattern: {
//                                             value: /^https:\/\/www\.cloudskillsboost\.google\/public_profiles\/.+$/,
//                                             message: "Link must start with the required URL and have something after it",
//                                         },
//                                     })}

//                                     className="w-full py-3 px-4 md:text-2xl bg-gray-800 text-white rounded-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] border border-gray-600 focus:outline-none placeholder-gray-400  "
//                                 />
//                             </div>
//                             <small className=" relative top-4.5 text-red-400 text-sm mt-1 ml-2">{errors?.profile_link?.message}</small>
//                         </div>
//                     </div>

//                     {/* Dropdown */}
//                     <div className="w-full transition-transform duration-300 sm:hover:scale-105">
//                         <select
//                             {...register("bonus")}
//                             className=" w-full md:text-2xl outline-none bg-gray-800 px-4 py-3 border border-gray-600 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] rounded-sm text-white"
//                         >
//                             <option value="without">Without Bonus</option>
//                             <option value="with">Add Bonus</option>
//                         </select>
//                     </div>

//                     {/* Icons */}
//                     <div className="flex gap-1.5 sm:gap-3 justify-between items-center">
//                         <button
//                             type="button"
//                             onClick={ProfileHandler}
//                             className="w-fit md:min-w-[100px] h-14 px-2 bg-gray-800  text-white rounded-sm border border-gray-600 shadow-[6px_6px_0px_rgba(0,0,0,0.8)] text-lg md:text-2xl transition-all ease-in duration-200 active:scale-90 md:hover:scale-105 cursor-pointer"
//                         >
//                             Profile
//                         </button>
//                         <div className="w-17 aspect-square bg-gray-800 rounded-full border border-gray-600 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] flex items-center justify-center text-lg md:text-2xl text-white transition-all ease-in duration-200 active:scale-90 md:hover:scale-105 cursor-pointer">
//                             {<EasterEgg />}

//                         </div>
//                         <button
//                             type="submit"
//                             className="w-fit md:min-w-[150px] h-14 px-2 bg-gray-800 rounded-sm border border-gray-600 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] flex items-center justify-center text-lg md:text-2xl text-white transition-all ease-in duration-200 active:scale-90 md:hover:scale-105 cursor-pointer"
//                         >
//                             Calculate
//                         </button>
//                     </div>
//                 </form>
//             </motion.div>
//             {(hero && counts) &&
//                 <div className=" w-full py-5 grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 justify-center items-center md:justify-evenly ">
//                     {hero && <Public profile={hero} />}
//                     {counts && <Table count={counts} />}
//                 </div>}
//             {isProfileOpen && <Profile profileData={profileData} hero={hero} loading={profLoading} onClose={() => { setIsProfileOpen(false); }} />}
//             {
//                 (loading || badgeData) && (
//                     <>

//                         <BadgeGrid data={badgeData || {}} loading={loading} />
//                     </>)}
//             {/* </div> */}
//         </>
//     );
// };

// export default Card;
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Profile from "./Profile";
import axios from "axios";
import BadgeGrid from "./Badges";
import { toast } from "react-toastify";
import Table from "./Table";
import Public from "./Public";
import EasterEgg from './EasterEgg';
import { motion } from 'framer-motion';

const Card = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [profLink, setProfLink] = useState("");
    const [profileData, setProfileData] = useState(null);
    const [badgeData, setBadgeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [profLoading, setProfLoading] = useState(false);
    const [counts, setCounts] = useState(null);
    const [hero, setHero] = useState(null);

    //   const profileLink = watch("profile_link") || "";
    //   const isValidProfile = /^https:\/\/www\\.cloudskillsboost\\.google\/public_profiles\/.+$/.test(profileLink);
    const profileLink = watch("profile_link") || "";
    const isValidProfile = /^https:\/\/www\.cloudskillsboost\.google\/public_profiles\/.+$/.test(profileLink);
    const SubmitHandler = async (formData) => {
        setLoading(true);
        setCounts(null);
        setBadgeData(null);
        setHero(null);
        axios
            .post("/api/route", { ...formData, flag: true })
            .then((res) => {
                setBadgeData(res?.data?.data);
                setHero(res?.data?.data?.profile);
                setCounts(res?.data?.data?.counts);
            })
            .catch((err) => console.error(err))
            .finally(() => {
                setLoading(false);
            });
    };

    const ProfileHandler = async () => {
        if (!isValidProfile) {
            toast.error("Profile link is invalid");
            return;
        }
        setProfLink(watch("profile_link"));
        setIsProfileOpen(true);
        setProfLoading(true);
        const formData = watch();
        axios
            .post("/api/route", { ...formData, flag: false })
            .then((res) => {
                setProfileData(res?.data?.data);
                setHero(res?.data?.data?.profile);
            })
            .catch((err) => console.error(err))
            .finally(() => {
                setProfLoading(false);
            });
    };

    return (
        <>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative z-10 px-8 md:px-10 lg:px-15 py-16 w-full max-w-5xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border border-gray-600 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-arcade  font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Arcade Points Calculator
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Analyze your Google Cloud Arcade Points
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(SubmitHandler)}
                    className="grid gap-8"
                >
                    <div className="flex gap-6 items-center">
                        <div
                            className={`w-10 aspect-square rounded-full ${isValidProfile ? "bg-green-400" : "bg-red-500"} border-2 border-gray-600`}
                        />

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="relative w-full">
                            <div className="absolute -top-1 -left-1 w-full h-full border-2 border-red-500 rounded-sm z-30 pointer-events-none" />
                            <div className="absolute -top-2 -left-2 w-full h-full border-2 border-yellow-500 rounded-sm z-20 pointer-events-none" />
                            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-blue-500 rounded-sm z-10 pointer-events-none" />
                            <motion.input

                                type="text"
                                placeholder="https://www.cloudskillsboost.google/public_profiles/"
                                {...register("profile_link", {
                                    required: "Profile link can't be empty",
                                    pattern: {
                                        value:
                                            /^https:\/\/www\.cloudskillsboost\.google\/public_profiles\/.+$/,
                                        message:
                                            "Link must start with the required URL and have something after it",
                                    },
                                })}
                                className="w-full py-3 px-4 bg-gray-800 text-white rounded-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] border border-gray-600 focus:outline-none placeholder-gray-400"
                            />
                        </motion.div>
                        {errors?.profile_link && <small className="text-red-400 text-sm mt-1">
                            {errors?.profile_link?.message}
                        </small>}
                    </div>

                    <div>
                        <motion.select
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            {...register("bonus")}
                            className="w-full bg-gray-800 px-4 py-3 border border-gray-600 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] rounded-sm text-white text-lg"
                        >
                            <option value="without">Without Bonus</option>
                            <option value="with">Add Bonus</option>
                        </motion.select>
                    </div>

                    <div className="flex gap-4 items-center justify-between">
                        <button
                            type="button"
                            onClick={ProfileHandler}
                            className="flex-1 h-14 bg-gray-800 text-white rounded-sm border border-gray-600 shadow-[6px_6px_0px_rgba(0,0,0,0.8)] text-lg transition-all duration-200 active:scale-90 hover:scale-105"
                        >
                            Profile
                        </button>
                        <div className="w-14 h-14 bg-gray-800 rounded-full border border-gray-600 shadow-[6px_6px_0px_rgba(0,0,0,0.8)] flex items-center justify-center text-white transition-all duration-200 active:scale-90 hover:scale-105">
                            <EasterEgg />
                        </div>
                        <button
                            type="submit"
                            className="flex-1 h-14 bg-gray-800 text-white rounded-sm border border-gray-600 shadow-[6px_6px_0px_rgba(0,0,0,0.8)] text-lg transition-all duration-200 active:scale-90 hover:scale-105"
                        >
                            Calculate
                        </button>
                    </div>
                </form>
            </motion.div>

            {hero && counts && (
                <div className="w-full py-5 grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <Public profile={hero} />
                    <Table count={counts} />
                </div>
            )}

            {isProfileOpen && (
                <Profile
                    profileData={profileData}
                    hero={hero}
                    loading={profLoading}
                    onClose={() => setIsProfileOpen(false)}
                />
            )}

            {(loading || badgeData) && (
                <BadgeGrid data={badgeData || {}} loading={loading} />
            )}
        </>
    );
};

export default Card;
