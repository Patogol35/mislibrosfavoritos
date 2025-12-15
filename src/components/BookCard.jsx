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
        mx: "auto",
        borderRadius: 2,
        boxShadow: 1,
        transition: "box-shadow .2s ease",
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      {/* Imagen */}
      <Box sx={{ p: 2 }}>
        <CardMedia
          component="img"
          image={book.image}
          alt={book.title}
          sx={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            borderRadius: 1,
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
