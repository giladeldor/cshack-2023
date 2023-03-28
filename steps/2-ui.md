# Phase 2 - Basic UI

For elements positioning, we use CSS. It can be a terrible job, so we use CSS Flexbox - it helps!

## CSS flexbox

Now, we will start to build the main layout.
First, read about html & css! Those are the basics, and you must have basic knowledge about it.
After that, you need to learn about the flexbox layout module.

Read about it here: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

MUI flexbox: https://mui.com/system/flexbox/

The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).

### MUI Theme & ThemeProvider

The theme object contain all the theme info for out app - colors, sizes, fonts and more!
https://mui.com/material-ui/customization/theming/#themeprovider

> Check the theme.ts file.

---

## Task - Add button

Try to add new button - "About". Just render it, without the functionality

<details>
  <summary>Solution</summary>
  Add the following in `Header.tsx`

```tsx
import { Typography, Box, Button } from "@mui/material";
import React from "react";

export const Header = () => {
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
        <Button size="large">
          <Typography variant="h5"> שאלות ותשובות </Typography>
        </Button>
        <Button size="large">
          <Typography variant="h5"> אודות </Typography>
        </Button>
        <Button size="large">
          <Typography variant="h5"> עמוד ראשי </Typography>
        </Button>
      </Box>
    </Box>
  );
};
```

</details>
