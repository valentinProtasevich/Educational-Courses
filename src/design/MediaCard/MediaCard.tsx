import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import "./MediaCard.scss";

interface MediaCardProps {
  imgUrl: string;
  bgColor: string;
  title: string;
}

export default function MediaCard({ imgUrl, bgColor, title }: MediaCardProps) {
  return (
    <Card className="card">
      <div style={{ backgroundColor: bgColor }} className="imgContainer">
        <CardMedia className="img" component="img" image={imgUrl} />
      </div>
      <CardContent className="cardContent">
        <span className="text">{title}</span>
      </CardContent>
    </Card>
  );
}
