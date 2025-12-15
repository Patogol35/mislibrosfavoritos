import {
  Container,
  Typography,
  Stack,
  Divider,
  TextField,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useState } from "react";
import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App() {
  const [filter, setFilter] = useState("");

  const filteredBooks = initialBooks.filter((book) =>
    book.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        mb={2}
      >
        <AutoStoriesIcon sx={{ fontSize: 32 }} />
        <Typography variant="h4" fontWeight={700}>
          Mis libros favoritos
        </Typography>
      </Stack>

      <Typography color="text.secondary" mb={3}>
        Filtra libros por autor
      </Typography>

      {/* Filtro */}
      <TextField
        label="Buscar por autor"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 4, maxWidth: 360 }}
      />

      <Divider sx={{ mb: 4 }} />

      <BookList books={filteredBooks} />
    </Container>
  );
}
