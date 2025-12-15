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
        maxWidth: 260,
        mx: "auto",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 4,
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 10,
        },
      }}
    >
      {/* Portada */}
      <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
        <CardMedia
          component="img"
          image={book.image}
          alt={book.title}
          sx={{
            width: 140,
            height: 210,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Texto */}
      <Stack spacing={0.6} sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {book.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
      </Stack>
    </Card>
  );
}
