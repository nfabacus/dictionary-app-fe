import React, { forwardRef, RefObject } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Chip from "@mui/material/Chip";
import DictListItemText from "../ListText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

export interface DictListItemProps {
  label: string;
  text: string;
  className?: string;
}

export type lastWordRef =
  | ((instance: HTMLLIElement | null) => void)
  | RefObject<HTMLLIElement>
  | null
  | undefined;

export default forwardRef(
  ({ label, text, className }: DictListItemProps, ref: lastWordRef) => {
    return (
      <>
        <ListItem ref={ref} className={`listItem ${className}`}>
          <ListItemButton>
            <Chip label={label} className="mr-3" />
            <DictListItemText text={text} />
          </ListItemButton>
        </ListItem>
        <Divider light />
      </>
    );
  }
);
