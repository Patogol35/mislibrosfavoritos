<Stack spacing={4} mb={6} mt={3}>
  <Stack
    direction="row"
    spacing={2}
    justifyContent="center"
    alignItems="center"
    sx={{ flexWrap: "wrap" }}
  >
    <AutoStoriesIcon
      sx={{
        fontSize: 38,
        color: "primary.main",
        opacity: 0.85,
      }}
    />

    <Typography
      sx={{
        textAlign: "center",
        mt: 2,
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.15em",
        color: "primary.main",
        fontSize: {
          xs: "1.25rem",
          sm: "1.6rem",
          md: "2rem",
        },
        lineHeight: 1.3,
        fontWeight: 600,
      }}
    >
      Libros favoritos de Jorge Patricio Santamaría Cherrez
    </Typography>
  </Stack>

  {/* 👇 LINEA JUSTO DEBAJO DEL TITULO */}
  <div className="divider" />

  {/* Toggle modo */}
  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
    <IconButton
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      color="primary"
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  </Box>
</Stack>
