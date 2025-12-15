import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Paper,
  Rating,
} from "@mui/material";

export default function BookForm({ onAdd }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    rating: 3,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(book);
    setBook({ title: "", author: "", genre: "", image: "", rating: 3 });
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Título"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            required
          />
          <TextField
            label="Autor"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            required
          />
          <TextField
            label="Género"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
          <TextField
            label="URL de portada"
            value={book.image}
            onChange={(e) => setBook({ ...book, image: e.target.value })}
          />
          <Rating
            value={book.rating}
            onChange={(_, value) => setBook({ ...book, rating: value })}
          />
          <Button type="submit" variant="contained">
            Agregar libro
          </Button>
        </Stack>
      </form>
    </Paper>
  );
        }
