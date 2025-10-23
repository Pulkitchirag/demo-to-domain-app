import { useEffect, useState } from "react";

// Define straight line segments that form the heart shape
const heartLines = [
  // Left top curve (broken into straight segments)
  { x1: 100, y1: 70, x2: 90, y2: 60 },
  { x1: 90, y1: 60, x2: 75, y2: 50 },
  { x1: 75, y1: 50, x2: 65, y2: 45 },
  { x1: 65, y1: 45, x2: 50, y2: 45 },
  { x1: 50, y1: 45, x2: 38, y2: 52 },
  { x1: 38, y1: 52, x2: 30, y2: 65 },
  { x1: 30, y1: 65, x2: 30, y2: 80 },
  
  // Left bottom curve
  { x1: 30, y1: 80, x2: 35, y2: 95 },
  { x1: 35, y1: 95, x2: 45, y2: 110 },
  { x1: 45, y1: 110, x2: 58, y2: 125 },
  { x1: 58, y1: 125, x2: 72, y2: 140 },
  { x1: 72, y1: 140, x2: 85, y2: 155 },
  { x1: 85, y1: 155, x2: 100, y2: 170 },
  
  // Right bottom curve
  { x1: 100, y1: 170, x2: 115, y2: 155 },
  { x1: 115, y1: 155, x2: 128, y2: 140 },
  { x1: 128, y1: 140, x2: 142, y2: 125 },
  { x1: 142, y1: 125, x2: 155, y2: 110 },
  { x1: 155, y1: 110, x2: 165, y2: 95 },
  { x1: 165, y1: 95, x2: 170, y2: 80 },
  
  // Right top curve
  { x1: 170, y1: 80, x2: 170, y2: 65 },
  { x1: 170, y1: 65, x2: 162, y2: 52 },
  { x1: 162, y1: 52, x2: 150, y2: 45 },
  { x1: 150, y1: 45, x2: 135, y2: 45 },
  { x1: 135, y1: 45, x2: 125, y2: 50 },
  { x1: 125, y1: 50, x2: 110, y2: 60 },
  { x1: 110, y1: 60, x2: 100, y2: 70 },
];

const HeartAnimation = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message after heart is drawn (15 seconds animation + 1 second delay)
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 16000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Animated Heart SVG with straight lines */}
      <svg
        viewBox="0 0 200 200"
        className="w-96 h-96"
        xmlns="http://www.w3.org/2000/svg"
      >
        {heartLines.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#C41E3A"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-0"
            style={{
              animation: `drawLine 0.5s ease-in-out ${index * 0.5}s forwards`,
              filter: 'drop-shadow(0 0 8px rgba(196, 30, 58, 0.6))'
            }}
          />
        ))}
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
