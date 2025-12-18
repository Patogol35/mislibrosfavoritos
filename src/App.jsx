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
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <AutoStoriesIcon
          sx={{ fontSize: 40, color: "primary.main" }}
        />
      </Box>

      {/* TITULO */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
          mb: 1,
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

      {/* 👇 LA LINEA (AQUI SI SE VE) */}
      <div className="divider" />

      {/* DESCRIPCION */}
      <Typography
        color="text.secondary"
        sx={{
          maxWidth: 600,
          mx: "auto",
          textAlign: "center",
        }}
        mb={6}
      >
        Esta es mi colección de libros favoritos: algunos ya los he leído,
        otros están en proceso y algunos aún están pendientes por leer.
      </Typography>

      {/* TOGGLE */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          color="primary"
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>

      <BookList books={initialBooks} />
    </Container>
  );
}
