import {
  Container,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BookList from "./components/BookList";
import { initialBooks } from "./data/books";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa, #e4ecf7)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack
          spacing={1.5}
          alignItems="center"
          textAlign="center"
          mb={6}
        >
          <AutoStoriesIcon
            sx={{
              fontSize: 48,
              color: "primary.main",
            }}
          />
          <Typography variant="h3" fontWeight={800}>
            Mis Libros Favoritos
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            maxWidth={500}
          >
            Una colección personal de libros que han marcado mi camino
            como desarrollador y lector.
          </Typography>
        </Stack>

        <BookList books={initialBooks} />
      </Container>
    </Box>
  );
}
