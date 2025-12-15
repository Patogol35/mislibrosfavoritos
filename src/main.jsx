import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

function Main() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
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
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
