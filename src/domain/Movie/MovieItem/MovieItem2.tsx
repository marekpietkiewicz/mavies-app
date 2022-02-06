import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TextField from "@mui/material/TextField";

export default function MovieItem2() {
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
            label="Enter the name of the movie"
            name="searchFor"
            autoFocus
          />
        }
      />
      {/* <CardMedia
        component="img"
        height="450"
        image="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg"
        alt="Paella dish"
      /> */}
      <Skeleton variant="rectangular" height={450} animation={false} />
    </Card>
  );
}
