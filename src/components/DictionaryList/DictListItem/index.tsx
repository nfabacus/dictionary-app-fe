import React, { forwardRef, RefObject } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Chip from "@mui/material/Chip";
import DictListItemText from "../ListText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

export interface DictListItemProps {
  label: string;
  text: string;
}

export type lastWordRef =
  | ((instance: HTMLLIElement | null) => void)
  | RefObject<HTMLLIElement>
  | null
  | undefined;

export default forwardRef(
  ({ label, text }: DictListItemProps, ref: lastWordRef) => {
    return (
      <>
        <ListItem ref={ref}>
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
