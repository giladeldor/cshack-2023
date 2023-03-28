import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";

export const QuestionsAndAnswers: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        שאלות ותשובות
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<>➡️</>}>
          <Typography>Question 1: What is CareSync?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Answer: CareSync is a platform that connects healthcare
            professionals and patients, offering a streamlined approach to
            managing healthcare services.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<>➡️</>}>
          <Typography>Question 2: How do I sign up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Answer: To sign up, navigate to our homepage and click on the "Sign
            Up" button. Follow the prompts to create your account.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
