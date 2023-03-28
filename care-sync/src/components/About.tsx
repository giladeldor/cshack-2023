import { Typography, Box } from "@mui/material";
import React from "react";

export const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        אודות
      </Typography>
      <Typography paragraph>
        CareSync is a revolutionary platform designed to connect healthcare
        professionals and patients in a seamless, user-friendly environment. Our
        mission is to improve the healthcare experience for both providers and
        patients by simplifying communication, appointment scheduling, and
        information sharing.
      </Typography>
      <Typography paragraph>
        Our team consists of passionate individuals from diverse backgrounds,
        including healthcare professionals, software engineers, and business
        experts. We are dedicated to creating a platform that addresses the
        needs of our users and contributes to the ongoing improvement of the
        healthcare industry.
      </Typography>
      <Typography paragraph>
        If you have any questions or feedback, please feel free to reach out to
        our team. We're always here to help and continuously strive to enhance
        the CareSync experience.
      </Typography>
    </Box>
  );
};
