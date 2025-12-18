import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function AnimatedTitle({ text }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Typography
      className="reveal-text"
      sx={{
        textAlign: "center",
        fontFamily: "'Cinzel', serif",
        fontSize: { xs: "1.6rem", sm: "2.4rem", md: "3rem" },
        letterSpacing: "0.35em",
        color: "var(--gold-soft)",
        textTransform: "uppercase",
        zIndex: 1,
      }}
    >
      {text.split("").map((char, i) => (
        <span key={i} style={{ opacity: i < visibleCount ? 1 : 0 }}>
          {char}
        </span>
      ))}
    </Typography>
  );
}
