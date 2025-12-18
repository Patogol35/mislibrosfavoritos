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

import BookList from "./components/BookList";
import AnimatedTitle from "./components/AnimatedTitle";
import { initialBooks } from "./data/books";

export default function App({ mode, setMode }) {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      className="container-paper reveal"
      sx={{ pt: 10, pb: 14, position: "relative" }}
    >
      {/* SÍMBOLOS */}
<div className="sigil sigil-circle" />
<div className="sigil sigil-triangle" />
<div className="sigil sigil-star">✶</div>

      {/* HEADER */}
      <Stack spacing={4} mb={8} alignItems="center">
        <AutoStoriesIcon
          sx={{
            fontSize: 60,
            color: "var(--gold)",
            filter: "drop-shadow(0 0 12px rgba(201,162,77,0.8))",
            zIndex: 2,
          }}
        />

        <AnimatedTitle text="Biblioteca Personal" />

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.85rem",
            letterSpacing: "0.28em",
            color: "rgba(230,207,139,0.75)",
            textTransform: "uppercase",
            zIndex: 2,
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
          fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.25rem" },
          lineHeight: 2,
          letterSpacing: "0.06em",
          fontStyle: "italic",
          color:
            theme.palette.mode === "dark"
              ? "rgba(245,245,245,0.88)"
              : "rgba(40,40,40,0.85)",
          mb: 6,
        }}
      >
Aquí comparto algunos de mis libros favoritos: algunos ya los he leído, otros los estoy leyendo y otros pienso leerlos próximamente.
      
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
}
