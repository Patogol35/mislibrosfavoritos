import {
  Container,
  Typography,
  Stack,
  IconButton,
  Box,
} from "@mui/material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VisibilityIcon from "@mui/icons-material/Visibility";

import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

/* FUNCIÓN TEXTO LETRA POR LETRA */
const AnimatedText = ({ text, delay = 0 }) => (
  <span className="reveal-text">
    {text.split("").map((l, i) => (
      <span
        key={i}
        style={{ animationDelay: `${delay + i * 0.05}s` }}
      >
        {l === " " ? "\u00A0" : l}
      </span>
    ))}
  </span>
);

export default function App({ mode, setMode }) {
  return (
    <Container
      maxWidth="lg"
      className="container-paper reveal"
      sx={{ pt: 10, pb: 14 }}
    >
      {/* SÍMBOLOS */}
      <div className="sigil sigil-circle" />
      <div className="sigil sigil-triangle" />
      <div className="sigil sigil-star">✶</div>

      {/* HEADER */}
      <Stack spacing={4} alignItems="center" mb={8}>
        <AutoStoriesIcon
          sx={{
            fontSize: 64,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 12px rgba(201,162,77,.8))",
          }}
        />

        <Typography className="title" sx={{ fontSize: { xs: "1.8rem", md: "2.8rem" } }}>
          <AnimatedText text="Biblioteca Personal" />
        </Typography>

        <Typography
          className="mystic-hover"
          sx={{ letterSpacing: ".3em", fontSize: ".9rem" }}
        >
          <AnimatedText
            text="Jorge Patricio Santamaría Cherrez"
            delay={1}
          />
        </Typography>
      </Stack>

      {/* BOTÓN */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 5 }}>
        <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <VisibilityIcon sx={{ color: "var(--gold)" }} />
        </IconButton>
      </Box>

      {/* TEXTO */}
      <Typography
        className="mystic-hover"
        sx={{
          maxWidth: 700,
          mx: "auto",
          textAlign: "center",
          fontStyle: "italic",
          letterSpacing: ".05em",
          lineHeight: 2,
        }}
        mb={6}
      >
        <AnimatedText
          text="Una colección de libros que revelan símbolos, secretos y verdades ocultas."
          delay={2}
        />
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
                                           }
