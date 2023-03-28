# Phase 4 - New Components

## Task

Now, we'd like to separate each tab to a new component. This is an important principle - we strive to split components into logical units as small as possible, and separate them into separate files. This greatly facilitates the development and allows growth in an easy way.

Create a new component for each tab. For Q&A and About tab, add some related conent. Browse MUI Docs to check for cool component that you can use.

<details>
  <summary>Solution</summary>
`App.tsx`

```tsx
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
        return <QuestionsAndAnswers />;
      case 2:
        return <About />;
      case 3:
        return <HomePage />;
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
```

About.tsx

```tsx
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
```

QuestionsAndAnswers.tsx

```tsx
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
```

</details>
