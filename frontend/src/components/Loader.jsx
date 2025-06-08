"use client";

import { useEffect, useState } from "react";

const Loader = () => {
    const [animationStage, setAnimationStage] = useState("slideIn"); // slideIn -> slideOut -> done
    const [angle, setAngle] = useState(45);
    const [height, setHeight] = useState();
    useEffect(() => {
        function updateAngle() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const rad = Math.atan2(height, width);
            const deg = rad * (180 / Math.PI);

            // console.log(`angle is: rotate-z-[${Math.floor(deg)}deg]`);

            setAngle(deg);
            setHeight(Math.hypot(width, height)); // diagonal length for red line height if needed
        }

        updateAngle();
        window.addEventListener("resize", updateAngle);
        return () => {window.removeEventListener("resize", updateAngle)};
    }, []);

    useEffect(() => {
        if (animationStage === "slideIn") {
            // After slideIn completes, start slideOut
            const timer = setTimeout(() => setAnimationStage("slideOut"), 200);
            return () => clearTimeout(timer);
        }
        if (animationStage === "slideOut") {
            // After slideOut completes, remove loader
            const timer = setTimeout(() => setAnimationStage("done"), 1800);
            return () => clearTimeout(timer);
        }
    }, [animationStage]);

    if (animationStage === "done") return null;

    return (
        <div className="w-full h-full bg-(--ggreen) z-[99999] ">
            
            <div className=" absolute top-0 w-full h-[50%] bg-(--gred) z-[120] ">

            </div>
            <div className=" absolute bottom-0 w-full h-[50%] bg-(--ggreen) z-[120] "> </div>

            <div
                style={{ transform: `rotate(${270 + angle}deg)` }}
                className={`absolute top-panel ${animationStage === "slideIn" ? "slide-in-top" : ""
                    } ${animationStage === "slideOut" ? "slide-out-top" : ""}`}
            ></div>

            <div
                style={{ transform: `rotate(${270 + angle}deg)` }}

                className={` absolute bottom-panel ${animationStage === "slideIn" ? "slide-in-bottom" : ""
                    } ${animationStage === "slideOut" ? "slide-out-bottom" : ""}`}
            ></div>

            {/* Optional welcome text in center */}
            <div className="fixed inset-0 flex items-center justify-center z-10000 pointer-events-none">
                <h1 className="text-white text-4xl font-bold select-none">Welcome</h1>
            </div>
        </div>
    );
};

export default Loader;
