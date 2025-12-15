import { useState } from "react";
import { Container, Typography } from "@mui/material";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import { initialBooks } from "./data/books";

export default function App() {
  const [books, setBooks] = useState(initialBooks);

  const addBook = (book) => {
    setBooks([
      ...books,
      { ...book, id: Date.now() },
    ]);
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        📚 Mis Libros Favoritos
      </Typography>

      <BookForm onAdd={addBook} />
      <BookList books={books} />
    </Container>
  );
}
