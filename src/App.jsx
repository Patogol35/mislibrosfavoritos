import {
  Container,
  Typography,
  Stack,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App({ mode, setMode }) {
  const [filter, setFilter] = useState("");

  const filteredBooks = initialBooks.filter((book) =>
    book.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* HEADER */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        position="relative"
        mb={2}
      >
        {/* Título centrado */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <AutoStoriesIcon sx={{ fontSize: 32 }} />
          <Typography variant="h4" fontWeight={700}>
            Mis libros favoritos
          </Typography>
        </Stack>

        {/* Toggle dark / light */}
        <IconButton
          onClick={() =>
            setMode(mode === "light" ? "dark" : "light")
          }
          sx={{ position: "absolute", right: 0 }}
        >
          {mode === "light" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
      </Stack>

      <Typography color="text.secondary" mb={3}>
        Filtra libros por autor
      </Typography>

      {/* FILTRO */}
      <TextField
        label="Buscar por autor"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ maxWidth: 360, mb: 4 }}
      />

      <Divider sx={{ mb: 4 }} />

      <BookList books={filteredBooks} />
    </Container>
  );
            }
