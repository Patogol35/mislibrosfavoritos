// src/components/BookCard.jsx

import {
  Card,
  CardMedia,
  Typography,
  Box,
  Stack,
  Chip,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const statusConfig = {
  unread: {
    label: "No leído",
    color: "default",
    icon: <HourglassEmptyIcon />,
    animation: "none",
  },
  reading: {
    label: "En proceso",
    color: "warning",
    icon: <AutoStoriesIcon />,
    animation: "pulse",
  },
  read: {
    label: "Leído",
    color: "success",
    icon: <CheckCircleIcon />,
    animation: "bounce",
  },
};

export default function BookCard({ book }) {
  const status = statusConfig[book.status];

  return (
    <Card
      sx={{
        maxWidth: 230,
        width: "100%",
        borderRadius: 3,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.4))",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        border: "1px solid rgba(201,162,77,0.25)",
        display: "flex",
        flexDirection: "column",
        transition: "all .35s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 45px rgba(0,0,0,0.8)",
        },
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          p: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={book.image}
          alt={book.title}
          sx={{
            width: "100%",
            height: 290,
            objectFit: "cover",
            borderRadius: 2,
            transition: "transform .4s ease",
            filter: "contrast(1.05) sepia(0.2)",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />
      </Box>

      {/* Texto */}
      <Stack spacing={0.8} sx={{ px: 2, pb: 2 }}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          noWrap
          sx={{
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.08em",
          }}
        >
          {book.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          sx={{ fontStyle: "italic" }}
        >
          {book.author}
        </Typography>

        {/* Estado con animación */}
        <Chip
          size="small"
          icon={status.icon}
          label={status.label}
          color={status.color}
          sx={{
            width: "fit-content",
            mt: 1,

            "@keyframes pulse": {
              "0%": { opacity: 1 },
              "50%": { opacity: 0.55 },
              "100%": { opacity: 1 },
            },
            "@keyframes bounce": {
              "0%": { transform: "scale(0.6)", opacity: 0 },
              "60%": { transform: "scale(1.15)" },
              "100%": { transform: "scale(1)", opacity: 1 },
            },

            "& .MuiChip-icon": {
              animation:
                status.animation === "pulse"
                  ? "pulse 1.4s ease-in-out infinite"
                  : status.animation === "bounce"
                  ? "bounce 0.6s ease"
                  : "none",
            },
          }}
        />
      </Stack>
    </Card>
  );
        }
