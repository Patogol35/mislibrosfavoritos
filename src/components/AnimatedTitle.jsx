import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function AnimatedTitle({ text }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) =>
        prev < text.length ? prev + 1 : prev
      );
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
        zIndex: 2,
        position: "relative",
        cursor: "default",
        "& span": {
          transition: "opacity 0.4s ease",
        },
        "&:hover span": {
          color: "var(--gold)",
          textShadow: "0 0 12px rgba(201,162,77,0.8)",
        },
      }}
    >
      {text.split("").map((char, i) => (
        <span key={i} style={{ opacity: i < visibleCount ? 1 : 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Typography>
  );
}
