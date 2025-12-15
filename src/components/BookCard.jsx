import { Card, CardContent, CardMedia, Typography, Rating, Stack, Box, Chip, } from "@mui/material";

export default function BookCard({ book }) { return ( <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3, boxShadow: 3, transition: "all 0.3s ease", '&:hover': { transform: 'translateY(-4px)', boxShadow: 8, }, }} > <Box sx={{ position: "relative" }}> <CardMedia
component="img"
height="260"
image={book.image}
alt={book.title}
/>

{/* Género como etiqueta flotante */}
    <Chip
      label={book.genre}
      size="small"
      sx={{
        position: "absolute",
        top: 12,
        left: 12,
        bgcolor: "rgba(0,0,0,0.7)",
        color: "white",
        fontWeight: 500,
      }}
    />
  </Box>

  <CardContent sx={{ flexGrow: 1 }}>
    <Stack spacing={1.2}>
      <Typography variant="h6" fontWeight={600} noWrap>
        {book.title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontStyle: "italic" }}
      >
        {book.author}
      </Typography>

      <Rating
        value={book.rating}
        precision={0.5}
        readOnly
        size="small"
      />
    </Stack>
  </CardContent>
</Card>

); }
