# Phase 7 - Empty State

## Task

Lets remove the mock data.

You need to show some empty state when we don't have any cards.

> TIP - read about conditional rendering. If we have data, render it. else, render something else...

---

### Solution

<details>
  <summary>Solution</summary>

HomePage.tsx

```tsx
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Patient } from "../types";
import { PatientCardList } from "./PatientCardList";
import { AddPatientModal } from "./AddPatientModal";

export const HomePage: React.FC = () => {
  const [patients, setPatients] = React.useState<Patient[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddPatient = (newPatient: Patient) => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
    handleClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Button variant="contained" onClick={handleOpen}>
        Add New Patient
      </Button>
      <AddPatientModal
        open={open}
        onClose={handleClose}
        onSubmit={handleAddPatient}
      />
      {patients.length === 0 ? (
        <Typography variant="h6">
          No patients available. Please add a patient.
        </Typography>
      ) : (
        <PatientCardList patients={patients} />
      )}
    </Box>
  );
};
```

</details>
