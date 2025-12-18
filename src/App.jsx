import {
  Container,
  Typography,
  Stack,
  Divider,
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
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        background:
          "radial-gradient(circle at top, #7a0c0c, #0b0b0b 70%)",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <Stack spacing={4} mb={6}>
        {/* TÍTULO */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <AutoStoriesIcon
            sx={{
              fontSize: 36,
              color: "#c9a24d",
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#e0c878",
              fontSize: "1.8rem",
            }}
          >
            Mis libros favoritos
          </Typography>
        </Stack>

        {/* TOGGLE DE TEMA */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
            sx={{
              color: "#c9a24d",
              border: "1px solid #c9a24d",
              borderRadius: 0,
            }}
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Stack>

      {/* DESCRIPCIÓN */}
      <Typography
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          color: "#f5f5f5",
          fontSize: "1.1rem",
          letterSpacing: "0.04em",
        }}
        mb={6}
      >
        Esta es mi colección de libros favoritos: algunos ya los he leído,
        otros están en proceso y algunos aún están pendientes por leer.
      </Typography>

      {/* DIVIDER */}
      <Divider
        sx={{
          width: 120,
          margin: "0 auto 48px",
          borderColor: "#c9a24d",
        }}
      />

      {/* LISTA */}
      <BookList books={initialBooks} />
    </Container>
  );
}
