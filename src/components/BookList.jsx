import { Grid } from "@mui/material";
import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      sx={{
        mt: 2,
      }}
    >
      {books.map((book) => (
        <Grid
          item
          key={book.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
            },
          }}
        >
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
