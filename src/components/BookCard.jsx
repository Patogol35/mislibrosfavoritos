import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Stack,
} from "@mui/material";

export default function BookCard({ book }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="220"
        image={book.image}
        alt={book.title}
      />
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
          <Typography variant="caption">{book.genre}</Typography>
          <Rating value={book.rating} readOnly />
        </Stack>
      </CardContent>
    </Card>
  );
}
