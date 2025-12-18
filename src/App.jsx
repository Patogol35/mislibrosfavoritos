import {
  Container,
  Typography,
  Stack,
  IconButton,
  Box,
} from "@mui/material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import VisibilityIcon from "@mui/icons-material/Visibility";

import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App({ mode, setMode }) {
  return (
    <Container maxWidth="lg" sx={{ pt: 6, pb: 10 }}>
      
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
            sx={{
              fontSize: 40,
              color: "var(--gold)",
              filter: "drop-shadow(0 0 6px rgba(201,162,77,0.6))",
            }}
          />

          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "1.3rem",
                sm: "1.8rem",
                md: "2.2rem",
              },
              lineHeight: 1.4,
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "var(--gold-soft)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            Libros favoritos de Jorge Patricio Santamaría Cherrez
          </Typography>
        </Stack>

        {/* BOTÓN ILUMINATI */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
          >
            <VisibilityIcon
              sx={{
                color: "var(--gold)",
                filter: "drop-shadow(0 0 8px rgba(201,162,77,0.7))",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.15)",
                },
              }}
            />
          </IconButton>
        </Box>
      </Stack>

      {/* DESCRIPCIÓN */}
      <Typography
        sx={{
          maxWidth: 620,
          mx: "auto",
          textAlign: "center",
          color: "rgba(245,245,245,0.85)",
          fontSize: "1.05rem",
        }}
        mb={4}
      >
        Esta es mi colección de libros favoritos: algunos ya los he leído,
        otros están en proceso y algunos aún esperan ser descubiertos.
      </Typography>

      {/* SEPARADOR */}
      <div className="divider" />

      {/* LISTA */}
      <BookList books={initialBooks} />

    </Container>
  );
}
