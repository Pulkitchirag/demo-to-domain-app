interface AnimatedBearProps {
  size?: "sm" | "md" | "lg";
  variant?: "wave" | "blush" | "love";
}

const AnimatedBear = ({ size = "md", variant = "wave" }: AnimatedBearProps) => {
  const sizeClasses = {
    sm: "text-6xl",
    md: "text-8xl",
    lg: "text-9xl"
  };

  const getBearEmoji = () => {
    switch (variant) {
      case "blush":
        return "😊🧸";
      case "love":
        return "🥰🧸";
      default:
        return "👋🧸";
    }
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]}`}>
      <div className={`
        ${variant === "wave" ? "animate-wave" : ""}
        ${variant === "blush" ? "animate-blush" : ""}
        ${variant === "love" ? "animate-pulse-soft" : ""}
      `}>
        {getBearEmoji()}
      </div>
      {variant === "blush" && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl animate-float">
          💕
        </div>
      )}
    </div>
  );
};

export default AnimatedBear;
