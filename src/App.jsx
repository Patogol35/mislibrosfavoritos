import { Container, Typography, Stack } from "@mui/material"; import AutoStoriesIcon from "@mui/icons-material/AutoStories"; import BookList from "./components/BookList"; import { initialBooks } from "./data/books";

export default function App() { return ( <Container sx={{ py: 6 }}> {/* Título profesional con icono */} <Stack direction="row" spacing={1.5} alignItems="center" mb={4}> <AutoStoriesIcon color="primary" sx={{ fontSize: 36 }} /> <Typography
variant="h4"
fontWeight={700}
letterSpacing={0.4}
> Mis Libros Favoritos </Typography> </Stack>

<BookList books={initialBooks} />
</Container>

); }
