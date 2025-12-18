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
import AnimatedTitle from "./components/AnimatedTitle";
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
      <div className="sigil sigil-star" />

      {/* HEADER */}
      <Stack spacing={4} mb={8} alignItems="center">
        <AutoStoriesIcon className="icon-hover" />

        <AnimatedTitle text="Biblioteca Personal" />

        <Typography
          sx={{
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(230,207,139,0.75)",
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          Jorge Patricio Santamaría Cherrez
        </Typography>
      </Stack>

      {/* BOTÓN */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="icon-hover"
        >
          <VisibilityIcon />
        </IconButton>
      </Box>

      {/* TEXTO */}
      <Typography
        sx={{
          maxWidth: 700,
          mx: "auto",
          textAlign: "center",
          fontSize: "1.2rem",
          fontStyle: "italic",
          lineHeight: 2,
        }}
        mb={6}
      >
        Una colección de libros que revelan símbolos,
        historia oculta y secretos por descifrar.
      </Typography>

      <div className="divider" />

      <BookList books={initialBooks} />
    </Container>
  );
}
