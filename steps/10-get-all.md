# Phase 10 - Get all from DB

## Task

Now, we want to get all items from DB and render them.

> TIP - read about useEffect - We want to do API call for DB before we start to render all items.

> Read about async-await AGAIN.

>

---

### Solution

<details>
  <summary>Solution</summary>

HomePage.tsx

```tsx
import React, { useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Patient } from "../types";
import { PatientCardList } from "./PatientCardList";
import { AddPatientModal } from "./AddPatientModal";
import { getPatientDocs } from "../firebase"; // Add this import

export const HomePage: React.FC = () => {
  const [patients, setPatients] = React.useState<Patient[]>([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchPatients = async () => {
      const patientDocs = await getPatientDocs();
      setPatients(patientDocs);
    };

    fetchPatients();
  }, []);

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
