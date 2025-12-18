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
import AnimatedTitle from "./AnimatedTitle"; // ✅ AHORA SÍ EXISTE

export default function App({ mode, setMode }) {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      className="container-paper reveal"
      sx={{ pt: 10, pb: 14 }}
    >
      {/* SÍMBOLOS */}
      <div className="sigil sigil-circle" />
      <div className="sigil sigil-triangle" />
      <div className="sigil sigil-eye" />

      {/* HEADER */}
      <Stack spacing={4} mb={8} alignItems="center">
        <AutoStoriesIcon
          sx={{
            fontSize: 64,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 14px rgba(201,162,77,0.9))",
          }}
        />

        <AnimatedTitle text="Biblioteca Personal" />

        <Typography
          sx={{
            textAlign: "center",
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 5 }}>
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
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "rotate(15deg) scale(1.2)",
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
          fontSize: { xs: "1.05rem", sm: "1.2rem" },
          lineHeight: 2,
          fontStyle: "italic",
          letterSpacing: "0.06em",
          color:
            theme.palette.mode === "dark"
              ? "rgba(245,245,245,0.88)"
              : "rgba(40,40,40,0.85)",
        }}
        mb={6}
      >
        Una colección de libros donde cada página es una clave
        y cada historia guarda un secreto.
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
}
