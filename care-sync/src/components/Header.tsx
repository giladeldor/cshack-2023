import { Typography, Box, Button } from "@mui/material";
import React from "react";

interface HeaderProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Typography variant="h3">CareSync 🤙</Typography>
      <Box sx={{ display: "flex" }}>
        <Button size="large" onClick={() => setActiveTab(3)}>
          <Typography variant="h5"> שאלות ותשובות </Typography>
        </Button>
        <Button size="large" onClick={() => setActiveTab(2)}>
          <Typography variant="h5"> אודות </Typography>
        </Button>
        <Button size="large" onClick={() => setActiveTab(1)}>
          <Typography variant="h5"> עמוד ראשי </Typography>
        </Button>
      </Box>
    </Box>
  );
};
