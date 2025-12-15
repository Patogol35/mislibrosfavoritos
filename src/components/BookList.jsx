import { Grid } from "@mui/material";
import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
