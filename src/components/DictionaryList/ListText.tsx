import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

export interface DictListItemTextProps {
  text: string;
  align?: "center" | "right" | "left" | "inherit" | "justify" | undefined;
  className?: string;
}

export default function DictListItemText({
  text,
  align,
  className,
}: DictListItemTextProps) {
  return (
    <ListItemText
      primary={
        <Typography
          component="p"
          variant="h6"
          className={className}
          align={align}
        >
          {text}
        </Typography>
      }
    />
  );
}
