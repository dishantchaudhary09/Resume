import { useEffect, useState } from "react";

function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{
        background: `radial-gradient(
          500px circle at ${position.x}px ${position.y}px,
          rgba(150, 150, 150, 0.10),
          transparent 65%
        )`,
      }}
    />
  );
}

export default MouseSpotlight;
