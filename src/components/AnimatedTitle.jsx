import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function AnimatedTitle({ text }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
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
      sx={{
        textAlign: "center",
        fontFamily: "'Cinzel', serif",
        fontSize: { xs: "1.4rem", sm: "2.2rem", md: "2.8rem" },
        letterSpacing: { xs: "0.18em", sm: "0.28em", md: "0.35em" },
        color: "var(--gold-soft)",
        textTransform: "uppercase",
        px: 2,
        whiteSpace: "normal",
        zIndex: 3,
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {char}
        </span>
      ))}
    </Typography>
  );
}
