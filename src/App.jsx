import { Container, Typography, Stack, Divider } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App() {
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

      <Typography
        variant="body1"
        color="text.secondary"
        mb={3}
      >
        Una colección personal de libros que recomiendo.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <BookList books={initialBooks} />
    </Container>
  );
}
