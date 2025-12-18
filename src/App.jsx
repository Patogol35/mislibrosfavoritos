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
      <div className="sigil sigil-star" />
      <div className="sigil sigil-cross" />

      {/* HEADER */}
      <Stack
        spacing={3}
        mb={8}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        <AutoStoriesIcon
          sx={{
            fontSize: 60,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 12px rgba(201,162,77,0.8))",
          }}
        />

        <Typography
          sx={{
            fontFamily: "'Cinzel', serif",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold-soft)",
          }}
        >
          Biblioteca Personal
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",
            letterSpacing: "0.25em",
            opacity: 0.85,
          }}
        >
          Jorge Patricio Santamaría Cherrez
        </Typography>
      </Stack>

      {/* BOTÓN */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4, zIndex: 2 }}>
        <IconButton
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          sx={{
            border: "1px solid rgba(201,162,77,0.4)",
          }}
        >
          <VisibilityIcon
            sx={{
              color: "var(--gold)",
              transition: "transform .4s",
              "&:hover": {
                transform: "rotate(20deg) scale(1.2)",
              },
            }}
          />
        </IconButton>
      </Box>

      {/* TEXTO */}
      <Typography
        sx={{
          maxWidth: 700,
          mx: "auto",
          textAlign: "center",
          fontStyle: "italic",
          fontSize: { xs: "1.05rem", sm: "1.2rem" },
          lineHeight: 2,
          opacity: 0.9,
          zIndex: 2,
          position: "relative",
        }}
      >
        Una colección de libros donde la historia, los símbolos y los secretos
        se entrelazan esperando ser revelados.
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
}
