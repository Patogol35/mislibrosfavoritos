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
      sx={{
        pt: 10,
        pb: 12,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* SÍMBOLOS */}
      <div className="sigil sigil-circle" />
      <div className="sigil sigil-triangle" />
      <div className="sigil sigil-key" />

      {/* HEADER CENTRADO */}
      <Stack
        spacing={3}
        mb={8}
        alignItems="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        <AutoStoriesIcon
          sx={{
            fontSize: 64,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 12px rgba(201,162,77,0.8))",
          }}
        />

        <Typography
          align="center"
          sx={{
            fontSize: {
              xs: "1.7rem",
              sm: "2.4rem",
              md: "3rem",
            },
            fontWeight: 600,
            letterSpacing: "0.4em",
            color: "var(--gold-soft)",
            fontFamily: "'Cinzel', serif",
            textTransform: "uppercase",
            pl: "0.4em", /* compensación óptica */
          }}
        >
          Biblioteca Personal
        </Typography>

        <Typography
          align="center"
          sx={{
            fontSize: "0.9rem",
            letterSpacing: "0.3em",
            color: "rgba(230,207,139,0.75)",
            textTransform: "uppercase",
          }}
        >
          Jorge Patricio Santamaría Cherrez
        </Typography>
      </Stack>

      {/* BOTÓN */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          sx={{
            border: "1px solid rgba(201,162,77,0.4)",
            borderRadius: "50%",
          }}
        >
          <VisibilityIcon
            sx={{
              color: "var(--gold)",
              filter: "drop-shadow(0 0 8px rgba(201,162,77,0.7))",
            }}
          />
        </IconButton>
      </Box>

      {/* TEXTO */}
      <Typography
        sx={{
          maxWidth: 680,
          mx: "auto",
          textAlign: "center",
          fontSize: "1.2rem",
          lineHeight: 2,
          fontStyle: "italic",
          color:
            theme.palette.mode === "dark"
              ? "rgba(245,245,245,0.9)"
              : "rgba(40,40,40,0.85)",
        }}
        mb={6}
      >
        Una colección de libros que revelan símbolos, conspiraciones,
        historia oculta y secretos que esperan ser descifrados.
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
          }
