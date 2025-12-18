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
  },
  reading: {
    label: "En proceso",
    color: "warning",
    icon: <AutoStoriesIcon />,
  },
  read: {
    label: "Leído",
    color: "success",
    icon: <CheckCircleIcon />,
  },
};

export default function BookCard({ book }) {
  const status = statusConfig[book.status];

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
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      {/* Texto */}
      <Stack spacing={0.8} sx={{ px: 2, pb: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} noWrap>
          {book.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" noWrap>
          {book.author}
        </Typography>

        {/* Estado de lectura con icono */}
        <Chip
          size="small"
          icon={status.icon}
          label={status.label}
          color={status.color}
          sx={{ width: "fit-content" }}
        />
      </Stack>
    </Card>
  );
}
