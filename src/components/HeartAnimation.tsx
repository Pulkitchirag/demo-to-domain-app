import { useEffect, useState } from "react";

const HeartAnimation = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message after heart is drawn (8 seconds animation + 1 second delay)
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Animated Heart SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-96 h-96 animate-glow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100,170 
             C75,150 30,120 30,80 
             C30,60 45,45 65,45 
             C80,45 90,55 100,70 
             C110,55 120,45 135,45 
             C155,45 170,60 170,80 
             C170,120 125,150 100,170 Z"
          fill="none"
          stroke="#C41E3A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-heart-draw"
        />
      </svg>

      {/* Message that appears after heart is drawn */}
      {showMessage && (
        <div className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in-slow">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 text-accent">
            For You
          </h1>
          <p className="text-2xl md:text-3xl text-center text-muted-foreground max-w-2xl px-6">
            Every line drawn with love,
            <br />
            Every moment thinking of you
          </p>
        </div>
      )}
    </div>
  );
};

export default HeartAnimation;
