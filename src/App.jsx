import {
  Container,
  Stack,
  IconButton,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VisibilityIcon from "@mui/icons-material/Visibility";

import AnimatedTitle from "./AnimatedTitle";
import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App({ mode, setMode }) {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      className="container-paper reveal"
      sx={{ pt: 10, pb: 12 }}
    >
      {/* SÍMBOLOS */}
      <div className="sigil sigil-circle" />
      <div className="sigil sigil-triangle" />
      <div className="sigil sigil-star">✶</div>

      {/* HEADER */}
      <Stack spacing={4} alignItems="center" mb={8} sx={{ zIndex: 1 }}>
        <AutoStoriesIcon
          sx={{
            fontSize: 64,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 12px rgba(201,162,77,0.8))",
          }}
        />

        <AnimatedTitle text="Biblioteca Personal" />

        <Typography
          sx={{
            fontSize: "0.9rem",
            letterSpacing: "0.3em",
            color: "rgba(230,207,139,0.8)",
            textTransform: "uppercase",
          }}
        >
          Jorge Patricio Santamaría Cherrez
        </Typography>
      </Stack>

      {/* BOTÓN */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 5 }}>
        <IconButton
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          sx={{ border: "1px solid var(--gold)" }}
        >
          <VisibilityIcon sx={{ color: "var(--gold)" }} />
        </IconButton>
      </Box>

      {/* TEXTO */}
      <Typography
        sx={{
          maxWidth: 680,
          mx: "auto",
          textAlign: "center",
          fontSize: "1.2rem",
          fontStyle: "italic",
          letterSpacing: "0.05em",
          color:
            theme.palette.mode === "dark"
              ? "rgba(245,245,245,0.9)"
              : "rgba(40,40,40,0.9)",
        }}
        mb={6}
      >
        Una colección de libros donde cada página es una clave,
        cada símbolo una advertencia y cada historia un secreto.
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
        }
