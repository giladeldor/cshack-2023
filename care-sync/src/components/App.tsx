import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import React, { useState, useMemo } from "react";
import { getAppTheme } from "../theme";
import { Header } from "./Header";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers";
import { About } from "./About";
import { HomePage } from "./HomePage";

function App() {
  const theme = useMemo(() => getAppTheme(), []);

  const [activeTab, setActiveTab] = useState(1);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 1:
        return <HomePage />;
      case 2:
        return <About />;
      case 3:
        return <QuestionsAndAnswers />;
      default:
        return <Typography>Content not found</Typography>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderActiveTab()}
      </Container>
    </ThemeProvider>
  );
}

export default App;
