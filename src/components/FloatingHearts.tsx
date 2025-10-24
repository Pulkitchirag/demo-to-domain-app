const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    size: Math.random() * 20 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-30"
          style={{
            left: heart.left,
            top: `${Math.random() * 100}%`,
            animationDelay: heart.animationDelay,
            fontSize: `${heart.size}px`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
