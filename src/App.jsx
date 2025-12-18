  import {
  Container,
  Typography,
  Stack,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VisibilityIcon from "@mui/icons-material/Visibility";

import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App({ mode, setMode }) {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      className="container-paper reveal"
      sx={{ pt: 8, pb: 12 }}
    >
      {/* SÍMBOLOS */}
      <div className="sigil sigil-circle" />
      <div className="sigil sigil-triangle" />
      <div className="sigil sigil-key" />

      {/* HEADER */}
      <Stack spacing={3} mb={8} alignItems="center" sx={{ position: "relative", zIndex: 2 }}>
        <AutoStoriesIcon sx={{ fontSize: 60, color: "var(--gold)" }} />

        <Typography
          sx={{
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.35em",
            color: "var(--gold-soft)",
            textTransform: "uppercase",
            fontSize: { xs: "1.6rem", md: "2.8rem" },
          }}
        >
          Biblioteca Personal
        </Typography>

        <Typography sx={{ letterSpacing: "0.25em", opacity: 0.8 }}>
          Jorge Patricio Santamaría Cherrez
        </Typography>
      </Stack>

      {/* BOTÓN */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4, zIndex: 2, position: "relative" }}>
        <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <VisibilityIcon sx={{ color: "var(--gold)" }} />
        </IconButton>
      </Box>

      {/* TEXTO */}
      <Typography
        sx={{
          maxWidth: 680,
          mx: "auto",
          textAlign: "center",
          fontStyle: "italic",
          letterSpacing: "0.05em",
          position: "relative",
          zIndex: 2,
        }}
      >
        Una colección de libros que revelan símbolos, historia oculta y
        secretos antiguos.
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
}
