import Typography from "@mui/material/Typography";
import React from "react";

export interface PageTitleProps {
  title: string;
}
export default function PageTitle({ title }: PageTitleProps) {
  return (
    <Typography
      component="h1"
      variant="h1"
      className="py-8 px-4"
      sx={{
        backgroundImage: `linear-gradient(10deg, #8b5cf6, #ec4899)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {title}
    </Typography>
  );
}
