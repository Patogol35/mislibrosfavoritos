import {
  Card,
  CardMedia,
  Typography,
  Box,
  Stack,
  Chip,
  useTheme,
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
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const status = statusConfig[book.status];

  return (
    <Card
      sx={{
        maxWidth: 230,
        width: "100%",
        borderRadius: 3,

        background: isDark
          ? "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.45))"
          : "linear-gradient(180deg, rgba(255,248,230,0.95), rgba(235,220,190,0.9))",

        color: isDark
          ? "rgba(245,245,245,0.9)"
          : "rgba(45,35,20,0.95)",

        boxShadow: isDark
          ? "0 10px 30px rgba(0,0,0,0.5)"
          : "0 8px 24px rgba(120,90,40,0.35)",

        border: "1px solid rgba(201,162,77,0.35)",
        display: "flex",
        flexDirection: "column",
        transition: "all .35s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: isDark
            ? "0 20px 45px rgba(0,0,0,0.8)"
            : "0 14px 32px rgba(120,90,40,0.45)",
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
            filter: isDark ? "contrast(1.05) sepia(0.2)" : "contrast(1.05)",
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
            color: isDark ? "inherit" : "#3b2a14",
          }}
        >
          {book.title}
        </Typography>

        <Typography
          variant="body2"
          noWrap
          sx={{
            fontStyle: "italic",
            color: isDark
              ? "rgba(220,220,220,0.75)"
              : "rgba(70,55,30,0.75)",
          }}
        >
          {book.author}
        </Typography>

        {/* Estado */}
        <Chip
          size="small"
          icon={status.icon}
          label={status.label}
          color={status.color}
          sx={{
            width: "fit-content",
            mt: 1,
            backgroundColor: isDark
              ? undefined
              : "rgba(255,240,200,0.9)",
            color: isDark ? undefined : "#3b2a14",
            border: isDark
              ? undefined
              : "1px solid rgba(201,162,77,0.4)",

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
