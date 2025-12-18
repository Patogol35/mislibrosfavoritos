import {
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App({ mode, setMode }) {
  return (
    <Container maxWidth="lg">

      {/* ICONO */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <AutoStoriesIcon
          sx={{
            fontSize: 42,
            color: "primary.main",
            opacity: 0.85,
          }}
        />
      </Box>

      {/* TITULO */}
      <Typography
        className="app-title"
        sx={{
          textAlign: "center",
          mt: 2,
          mb: 1,
          color: "primary.main",
          fontSize: {
            xs: "1.25rem",
            sm: "1.6rem",
            md: "2rem",
          },
          fontWeight: 600,
        }}
      >
        Libros favoritos de Jorge Patricio Santamaría Cherrez
      </Typography>

      {/* LINEA */}
      <div className="divider" />

      {/* DESCRIPCION */}
      <Typography
        className="app-text"
        color="text.secondary"
        sx={{
          maxWidth: 620,
          mx: "auto",
          textAlign: "center",
          fontSize: "1.05rem",
        }}
        mb={6}
      >
        Esta es mi colección de libros favoritos: algunos ya los he leído,
        otros están en proceso y algunos aún esperan ser descubiertos.
      </Typography>

      {/* TOGGLE MODO */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          color="primary"
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>

      {/* LISTA */}
      <BookList books={initialBooks} />
    </Container>
  );
}
