import {
  Container,
  Typography,
  Stack,
  IconButton,
  Box,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import BookList from "./components/BookList";
import { initialBooks } from "./data/books";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

export default function App({ mode, setMode }) {
  const theme = useTheme();

  useEffect(() => {
    document.body.classList.toggle("light-mode", mode === "light");
  }, [mode]);

  return (
    <Container maxWidth="lg" sx={{ pt: 6 }}>
      {/* HEADER */}
      <Stack spacing={3} mb={6}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: "wrap" }}
        >
          <AutoStoriesIcon sx={{ fontSize: 40, color: "primary.main" }} />

          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.18em",
              fontSize: { xs: "1.4rem", md: "2rem" },
            }}
          >
            Libros favoritos de Jorge Patricio Santamaría Cherrez
          </Typography>
        </Stack>

        {/* Separador */}
        <div className="divider" />

        {/* Toggle */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Stack>

      {/* DESCRIPCIÓN */}
      <Typography
        sx={{
          maxWidth: 720,
          mx: "auto",
          textAlign: "center",
          fontSize: { xs: "1.15rem", md: "1.35rem" },
          lineHeight: 1.9,
          letterSpacing: "0.04em",
          fontWeight: 500,
          color: mode === "dark" ? "#f5f5f5" : "#2a1f14",
          textShadow:
            mode === "dark"
              ? "0 2px 6px rgba(0,0,0,.6)"
              : "0 1px 2px rgba(255,255,255,.6)",
        }}
        mb={6}
      >
        Esta es mi colección de libros favoritos: algunos ya los he leído,
        otros están en proceso y algunos aún esperan ser descubiertos.
      </Typography>

      <BookList books={initialBooks} />
    </Container>
  );
              }
