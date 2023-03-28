# Phase 3 - UI - Navigation

Now, we'd like to add some basic functionality.
By clicking a button, we will switch between pages and render different components on each page.

## React's `useState` Hook

React's `useState` hook is a built-in function that allows functional components to have state. It returns an array with two elements: the current state value, and a function to update the state value.

Every time the value of state changes - React reacts, and re-render the subtree. This is how we react to changes and update the DOM!

### Example Usage

Here's an example of how to use `useState` to create a simple counter:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example, we import useState from the react package and use it to declare a state variable called count, initialized to 0. We also declare a function called setCount, which we use to update the value of count.

Inside the return statement of the Counter function, we display the current value of count using interpolation inside a paragraph tag. We also render two buttons, one to increment count and one to decrement it, with their respective onClick functions calling setCount with the updated value.

---

## Task

Add state for the current active page, and by clicking the button - update it, and update the component tree accordingly.

<details>
  <summary>Solution</summary>
  Add the following in `App.tsx`

```tsx
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import React, { useState, useMemo } from "react";
import { getAppTheme } from "../theme";
import { Header } from "./Header";

function App() {
  const theme = useMemo(() => getAppTheme(), []);

  const [activeTab, setActiveTab] = useState(1);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 1:
        return <Typography>Content for שאלות ותשובות</Typography>;
      case 2:
        return <Typography>Content for אודות</Typography>;
      case 3:
        return <Typography>Content for עמוד ראשי</Typography>;
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

Add the following in `Header.tsx`

```tsx
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
        <Button size="large" onClick={() => setActiveTab(1)}>
          <Typography variant="h5"> שאלות ותשובות </Typography>
        </Button>
        <Button size="large" onClick={() => setActiveTab(2)}>
          <Typography variant="h5"> אודות </Typography>
        </Button>
        <Button size="large" onClick={() => setActiveTab(3)}>
          <Typography variant="h5"> עמוד ראשי </Typography>
        </Button>
      </Box>
    </Box>
  );
};
```

</details>
