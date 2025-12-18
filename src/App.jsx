import {
  Container,
  Typography,
  Stack,
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
      {/* HEADER */}
      <Stack spacing={4} mb={6}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: "wrap" }}
        >
          <AutoStoriesIcon
            sx={{ fontSize: 36, color: "primary.main" }}
          />

          <Typography
            color="primary"
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "1.25rem",
                sm: "1.6rem",
                md: "2rem",
              },
              lineHeight: 1.3,
              fontWeight: 600,
            }}
          >
            Libros favoritos de Jorge Patricio Santamaría Cherrez
          </Typography>
        </Stack>

        {/* Toggle claro / oscuro */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
            color="primary"
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Stack>

      {/* 👇 TU SEPARADOR ORIGINAL */}
      <div className="divider" />

      {/* DESCRIPCIÓN */}
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

      <BookList books={initialBooks} />
    </Container>
  );
}
