import { Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function AnimatedTitle({ text, variant = "title" }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const theme = useTheme();

  const isAuthor = variant === "author";

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
    }, isAuthor ? 45 : 70); // autor más sutil

    return () => clearInterval(interval);
  }, [text, isAuthor]);

  return (
    <Typography
      sx={{
        textAlign: "center",
        fontFamily: "'Cinzel', serif",

        /* JERARQUÍA VISUAL */
        fontSize: isAuthor
          ? { xs: "0.75rem", sm: "0.85rem" }
          : { xs: "1.4rem", sm: "2.2rem", md: "2.8rem" },

        letterSpacing: isAuthor
          ? "0.35em"
          : { xs: "0.18em", sm: "0.28em", md: "0.35em" },

        textTransform: "uppercase",
        opacity: isAuthor ? 0.85 : 1,
        mt: isAuthor ? -1 : 0,
        mb: isAuthor ? 1 : 0,

        color:
          theme.palette.mode === "light"
            ? isAuthor
              ? "#5a3b18" // tinta firma pergamino
              : "#4a3214"
            : "var(--gold-soft)",

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
