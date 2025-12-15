import { Container, Typography } from "@mui/material"; import BookList from "./components/BookList"; import { initialBooks } from "./data/books";

export default function App() { return ( <Container sx={{ py: 5 }}> <Typography variant="h4" gutterBottom> 📚 Mis Libros Favoritos </Typography>

{/* Solo mostramos la lista, sin formulario ni estado */}
  <BookList books={initialBooks} />
</Container>

); }
