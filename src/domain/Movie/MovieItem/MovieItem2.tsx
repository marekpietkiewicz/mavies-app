import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TextField from "@mui/material/TextField";
import { useMovieFetch } from "@hooks/useData/useData";

export default function MovieItem2() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [enteredText, setEnteredText] = useState<string>("");

  const { data: movies, isLoading } = useMovieFetch(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => setSearchQuery(enteredText), 1000);
    return () => clearTimeout(timeoutId);
  }, [enteredText]);

  return (
    <Card sx={{ minWidth: 350, height: 562 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LiveTvIcon />
          </Avatar>
        }
        title={
          <TextField
            margin="normal"
            required
            fullWidth
            id="searchFor"
            label="Enter the title of the movie"
            name="searchFor"
            autoFocus
            onChange={(e) => setEnteredText(e.target.value)}
            value={enteredText}
          />
        }
      />
      {isLoading || !movies?.Title ? (
        <Skeleton variant="rectangular" height={450} />
      ) : (
        <CardMedia
          component="img"
          height="450"
          image={movies.Poster}
          alt={movies.Title}
        />
      )}
    </Card>
  );
}
