import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#0b0b0b" : "#f5f5f5",
        paper: mode === "dark" ? "#120909" : "#ffffff",
      },
      primary: {
        main: "#c9a24d", // dorado
      },
      secondary: {
        main: "#7a0c0c", // rojo oscuro
      },
      text: {
        primary: mode === "dark" ? "#f5f5f5" : "#213547",
        secondary: mode === "dark" ? "#cfcfcf" : "#555555",
      },
    },

    typography: {
      fontFamily: "'Cormorant Garamond', serif",

      h4: {
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        fontWeight: 500,
      },
    },

    components: {
      /* ===== FONDO GLOBAL (CLAVE) ===== */
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            minHeight: "100vh",
            transition: "background 0.4s ease",
            backgroundColor:
              mode === "dark" ? "#0b0b0b" : "#f5f5f5",
            backgroundImage:
              mode === "dark"
                ? "radial-gradient(circle at top, #7a0c0c, #0b0b0b 70%)"
                : "none",
          },
        },
      },

      MuiContainer: {
        styleOverrides: {
          root: {
            paddingTop: "64px",
            paddingBottom: "64px",
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: "#c9a24d",
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            border: "1px solid #c9a24d",
            borderRadius: 0,
          },
        },
      },
    },
  });

export default getTheme;
