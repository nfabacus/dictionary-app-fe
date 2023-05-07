import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DictionaryList from "./components/DictionaryList";
import PageTitle from "./components/Elements/PageTitle";
import SearchField from "./components/SearchField";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm") || "";
    setSearchTerm(storedSearchTerm);
  }, []);

  const handleSearchTerm = (value: string) => {
    setSearchTerm(value);
    localStorage.setItem("searchTerm", value);
  };

  return (
    <Box className="App bg-slate-50">
      <CssBaseline />
      <Container
        component="main"
        className="relative h-screen flex flex-col items-center"
      >
        <PageTitle title="Dictionary App" />
        <SearchField
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
        <DictionaryList searchTerm={searchTerm} />
      </Container>
    </Box>
  );
}

export default App;
