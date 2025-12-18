import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "./theme/theme";

/* 🔑 IMPORTA TU CSS GLOBAL */
import "./index.css";

function Root() {
  const [mode, setMode] = React.useState("dark");

  const theme = React.useMemo(
    () => getTheme(mode),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Root />
);
