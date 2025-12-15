import {
  Card,
  CardMedia,
  Typography,
  Box,
  Stack,
  Chip,
} from "@mui/material";

export default function BookCard({ book }) {
  return (
    <Card
      sx={{
        maxWidth: 260,
        mx: "auto",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "all .3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Portada */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 3,
          pb: 2,
          background:
            "linear-gradient(180deg, #f0f4ff, #ffffff)",
        }}
      >
        <CardMedia
          component="img"
          image={book.image}
          alt={book.title}
          sx={{
            width: 140,
            height: 210,
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: 4,
          }}
        />
      </Box>

      {/* Texto */}
      <Stack spacing={0.8} sx={{ p: 2.5, textAlign: "center" }}>
        <Typography
          variant="subtitle1"
          fontWeight={700}
          lineHeight={1.3}
        >
          {book.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {book.author}
        </Typography>

        {/* Extra opcional */}
        {book.category && (
          <Chip
            label={book.category}
            size="small"
            sx={{
              mt: 1,
              alignSelf: "center",
              fontWeight: 500,
            }}
          />
        )}
      </Stack>
    </Card>
  );
          }
