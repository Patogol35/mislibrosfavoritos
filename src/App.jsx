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
    <Container maxWidth="lg">
      {/* HEADER */}
      <Stack spacing={4} mb={6}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <AutoStoriesIcon
            sx={{ fontSize: 36, color: "primary.main" }}
          />
          <Typography variant="h4" color="primary">
            Libros favoritos de Jorge Patricio Santamaría Cherrez
          </Typography>
        </Stack>

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

      <Divider sx={{ width: 120, mx: "auto", mb: 6 }} />

      <BookList books={initialBooks} />
    </Container>
  );
}
