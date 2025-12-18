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
    <>
      {/* HERO / HEADER */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
          position: "relative",
        }}
      >
        {/* Toggle modo */}
        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
          <IconButton
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
            color="primary"
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>

        <Stack spacing={3} alignItems="center">
          <AutoStoriesIcon
            sx={{
              fontSize: 48,
              color: "primary.main",
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: {
                xs: "1.6rem",
                sm: "2.2rem",
                md: "2.8rem",
              },
            }}
          >
            Libros favoritos de Jorge Patricio Santamaría Cherrez
          </Typography>

          <Divider sx={{ width: 100 }} />

          <Typography
            sx={{
              maxWidth: 520,
              opacity: 0.75,
              fontStyle: "italic",
            }}
          >
            Misterio · Historia · Conocimiento oculto
          </Typography>
        </Stack>
      </Box>

      {/* CONTENIDO */}
      <Container maxWidth="lg">
        <BookList books={initialBooks} />
      </Container>
    </>
  );
}
