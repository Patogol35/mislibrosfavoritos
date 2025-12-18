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
      <Stack spacing={4} mb={6}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: "wrap" }}
        >
          <AutoStoriesIcon sx={{ fontSize: 38, color: "primary.main" }} />

          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
              color: "var(--aged-gold)",
            }}
          >
            Libros favoritos de Jorge Patricio Santamaría Cherrez
          </Typography>
        </Stack>

        {/* Toggle claro / oscuro */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            color="primary"
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Stack>

      {/* DIVISOR */}
      <div className="divider"></div>

      {/* DESCRIPCIÓN */}
      <Typography component="p" className="description" mb={6}>
        Esta es mi colección de libros favoritos: algunos ya los he leído,
        otros están en proceso y algunos aún esperan ser descubiertos.
      </Typography>

      {/* LIBROS */}
      <BookList books={initialBooks} />
    </Container>
  );
}
