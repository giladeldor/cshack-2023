# Phase 7 - Add to DB

## Task

Now we want to inset each new card to DB. You need to modify the `handleAddPatient` function and use `addPatientDoc`.
nc-await.

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
import { getPatientDocs, addPatientDoc } from "../firebase"; // Add addPatientDoc to the import

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

  const handleAddPatient = async (newPatient: Patient) => {
    // Add the new patient to the Firestore database
    await addPatientDoc(newPatient);

    // Update the local state with the new patient
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
