import {
  Card,
  CardMedia,
  Typography,
  Box,
  Stack,
} from "@mui/material";

export default function BookCard({ book }) {
  return (
    <Card
      sx={{
        maxWidth: 220,
        width: "100%",
        borderRadius: 2,
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Imagen */}
      <Box sx={{ p: 2, overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={book.image}
          alt={book.title}
          sx={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            borderRadius: 1,
            transition: "transform .25s ease",
            "&:hover": {
              transform: "scale(1.05)", // hover SOLO imagen
            },
          }}
        />
      </Box>

      {/* Texto */}
      <Stack spacing={0.5} sx={{ px: 2, pb: 2 }}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          noWrap
        >
          {book.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
        >
          {book.author}
        </Typography>
      </Stack>
    </Card>
  );
}
