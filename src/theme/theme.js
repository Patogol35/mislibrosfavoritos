import { createTheme } from "@mui/material/styles";

export default function getTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#c9a24d" : "#7a0c0c",
      },
      background: {
        default: mode === "dark" ? "#0b0b0b" : "#f5f5f5",
        paper: mode === "dark" ? "#121212" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "'Cormorant Garamond', serif",
      h1: {
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.12em",
      },
      h2: {
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.12em",
      },
      h3: {
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.12em",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 0.3s ease",
          },
        },
      },
    },
  });
}
