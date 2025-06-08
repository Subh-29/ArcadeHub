// components/FirecrackerButton.jsx
"use client";
import confetti from "canvas-confetti";

export default function FirecrackerButton() {
  const burstFireworks = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;

    const defaults = { startVelocity: 15, spread: 360, ticks: 60, zIndex: 9999 };

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Random burst from sides
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6
        }
      });
    }, 250);
  };

  return (
    <span
      onClick={burstFireworks}
    //   className="bg-red-600 text-white px-6 py-3 rounded-md text-xl shadow-md hover:scale-105 transition-transform"
    >
     🎆
    </span>
  );
}
