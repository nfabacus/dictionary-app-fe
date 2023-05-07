import { FormControl, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { debounceValue } from "../../utils";

export interface SearchFieldProps {
  searchTerm: string;
  handleSearchTerm: (value: string) => void;
}

export default function SearchField({
  searchTerm,
  handleSearchTerm,
}: SearchFieldProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (searchTerm) {
      setSearchInput(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    debounceValue(searchInput).then((value) =>
      handleSearchTerm(value as string)
    );
  }, [searchInput]);

  const onHandleTextChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setSearchInput(value.toLowerCase());
  };

  return (
    <FormControl className="mb-12">
      <FormLabel hidden>Search words</FormLabel>
      <TextField
        color="secondary"
        className="border border-gray-300 rounded-md shadow-inner"
        label="Search words here"
        type="search"
        value={searchInput}
        onChange={onHandleTextChange}
      />
    </FormControl>
  );
}
