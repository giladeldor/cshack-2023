import { Container, ThemeProvider, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { getAppTheme } from "../theme";
import { Header } from "./Header";

function App() {
  const theme = useMemo(() => getAppTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Header />
        <Typography> היי עולם </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
