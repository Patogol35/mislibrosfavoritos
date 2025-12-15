import { Card, CardContent, CardMedia, Typography, Rating, Box, } from "@mui/material";

export default function BookCard({ book }) { return ( <Card sx={{ height: "100%", borderRadius: 4, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.12)", transition: "transform .35s ease, box-shadow .35s ease", '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 18px 45px rgba(0,0,0,0.18)', }, }} > {/* Imagen con proporción real de libro */} <Box sx={{ position: "relative", aspectRatio: "2 / 3" }}> <CardMedia component="img" image={book.image} alt={book.title} sx={{ height: "100%", objectFit: "cover", }} />

{/* Gradiente inferior */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0) 70%)",
      }}
    />

    {/* Texto sobre la imagen */}
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        p: 2,
        color: "white",
      }}
    >
      <Typography variant="subtitle1" fontWeight={600} lineHeight={1.2}>
        {book.title}
      </Typography>
      <Typography variant="caption" sx={{ opacity: 0.85 }}>
        {book.author}
      </Typography>
    </Box>
  </Box>

  {/* Footer limpio */}
  <CardContent
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      py: 1.5,
    }}
  >
    <Typography variant="caption" color="text.secondary">
      {book.genre}
    </Typography>

    <Rating
      value={book.rating}
      precision={0.5}
      readOnly
      size="small"
    />
  </CardContent>
</Card>

); }
