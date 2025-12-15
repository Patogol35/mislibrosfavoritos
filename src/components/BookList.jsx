import { Grid } from "@mui/material";
import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
    >
      {books.map((book) => (
        <Grid
          item
          key={book.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
