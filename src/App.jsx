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
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* HEADER */}
      <Stack spacing={2} mb={3}>
        {/* Título centrado */}
        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          alignItems="center"
        >
          <AutoStoriesIcon sx={{ fontSize: 32 }} />
          <Typography variant="h4" fontWeight={700}>
            Mis libros favoritos
          </Typography>
        </Stack>

        {/* Toggle de tema */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Stack>

      {/* DESCRIPCIÓN */}
      <Typography
        color="text.secondary"
        mb={4}
        sx={{ maxWidth: 600 }}
      >
        Esta es mi colección de libros favoritos: algunos ya los he leído,
        otros están en proceso y algunos aún están pendientes por leer.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <BookList books={initialBooks} />
    </Container>
  );
}
