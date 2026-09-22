import { useEffect, useState } from "react";

function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
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
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(
          350px circle at ${position.x}px ${position.y}px,
          rgba(250, 249, 244, 0.06),
          transparent 70%
        )`,
      }}
    />
  );
}

export default MouseSpotlight;
