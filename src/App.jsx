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
      sx={{ pt: 8, pb: 12, position: "relative" }}
    >
      {/* SÍMBOLOS OCULTOS */}
      <div className="sigil sigil-circle" />
      <div className="sigil sigil-triangle" />
      <div className="sigil sigil-key" />

      {/* HEADER – PORTADA */}
      <Stack spacing={3} mb={8} alignItems="center">
        <AutoStoriesIcon
          sx={{
            fontSize: 60,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 12px rgba(201,162,77,0.8))",
          }}
        />

        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.6rem",
              sm: "2.3rem",
              md: "2.9rem",
            },
            fontWeight: 600,
            letterSpacing: "0.35em",
            color: "var(--gold-soft)",
            fontFamily: "'Cinzel', serif",
            textTransform: "uppercase",
          }}
        >
          Biblioteca Personal
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.9rem",
            letterSpacing: "0.28em",
            color: "rgba(230,207,139,0.75)",
            textTransform: "uppercase",
          }}
        >
          Jorge Patricio Santamaría Cherrez
        </Typography>
      </Stack>

      {/* BOTÓN SECRETO */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          sx={{
            border: "1px solid rgba(201,162,77,0.4)",
            borderRadius: "50%",
            p: 1.5,
          }}
        >
          <VisibilityIcon
            sx={{
              color: "var(--gold)",
              filter: "drop-shadow(0 0 8px rgba(201,162,77,0.7))",
              transition: "transform 0.4s ease, opacity 0.4s ease",
              opacity: 0.85,
              "&:hover": {
                transform: "rotate(15deg) scale(1.2)",
                opacity: 1,
              },
            }}
          />
        </IconButton>
      </Box>

      {/* TEXTO LITERARIO */}
      <Typography
        sx={{
          maxWidth: 680,
          mx: "auto",
          textAlign: "center",
          fontSize: {
            xs: "1.05rem",
            sm: "1.15rem",
            md: "1.25rem",
          },
          lineHeight: 2,
          letterSpacing: "0.06em",
          fontStyle: "italic",
          color:
            theme.palette.mode === "dark"
              ? "rgba(245,245,245,0.88)"
              : "rgba(40,40,40,0.85)",
        }}
        mb={6}
      >
        Una colección de libros que revelan símbolos, conspiraciones,
        historia oculta y secretos que aguardan ser descifrados.
      </Typography>

      {/* SEPARADOR */}
      <div className="divider" />

      {/* LISTA */}
      <BookList books={initialBooks} />
    </Container>
  );
            }
