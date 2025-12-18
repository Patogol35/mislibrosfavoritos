import { createTheme } from "@mui/material/styles";

export default function getTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#c9a24d",
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
      },
      h2: {
        fontFamily: "'Cinzel', serif",
      },
      h3: {
        fontFamily: "'Cinzel', serif",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body:
            mode === "dark"
              ? {
                  background: `
                    radial-gradient(
                      circle at top,
                      rgba(122, 12, 12, 0.6),
                      #0b0b0b 70%
                    ),
                    repeating-linear-gradient(
                      45deg,
                      rgba(255, 255, 255, 0.02),
                      rgba(255, 255, 255, 0.02) 1px,
                      transparent 1px,
                      transparent 6px
                    )
                  `,
                }
              : {
                  background: "#f5f5f5",
                },
        },
      },
    },
  });
}
