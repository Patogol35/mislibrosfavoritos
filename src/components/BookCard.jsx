import { Card, CardContent, CardMedia, Typography, Rating, Box, Stack, } from "@mui/material";

export default function BookCard({ book }) { return ( <Card sx={{ height: "100%", borderRadius: 5, overflow: "hidden", backgroundColor: "#111", color: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.35)", transition: "all .4s cubic-bezier(.25,.8,.25,1)", '&:hover': { transform: 'scale(1.03)', boxShadow: '0 30px 60px rgba(0,0,0,0.45)', }, }} > {/* Portada */} <Box sx={{ position: "relative", aspectRatio: "2 / 3" }}> <CardMedia component="img" image={book.image} alt={book.title} sx={{ height: "100%", objectFit: "cover", filter: "brightness(0.85)", }} />

{/* Overlay gradiente fuerte */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0) 100%)",
      }}
    />

    {/* Texto sobre portada */}
    <Stack
      spacing={0.6}
      sx={{
        position: "absolute",
        bottom: 0,
        p: 2.2,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight={700}
        lineHeight={1.15}
      >
        {book.title}
      </Typography>
      <Typography variant="caption" sx={{ opacity: 0.8 }}>
        {book.author}
      </Typography>
    </Stack>
  </Box>

  {/* Info inferior minimal */}
  <CardContent
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      px: 2,
      py: 1.4,
      backgroundColor: "#111",
    }}
  >
    <Typography variant="caption" sx={{ opacity: 0.7 }}>
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
