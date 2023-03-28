# Phase 6 - Form

## Task

Lets handle user input!

You need to add a button, that open a modal (search for solution in MUI - Dialog component). Get the input, and store it.

> TIP - Read again about useState hook. We need to store in this state the patient list.

> TIP - How to manage the state for the modal?

If that was easy - try to add some validations! 🦈

---

### Solution

<details>
  <summary>Solution</summary>

HomePage.tsx

read about JS callback and useState.

```tsx
import React from "react";
import { Button, Typography } from "@mui/material";
import { patientsMock } from "../mock-data";
import { Patient } from "../types";
import { PatientCardList } from "./PatientCardList";
import { AddPatientModal } from "./AddPatientModal";

export const HomePage: React.FC = () => {
  const [patients, setPatients] = React.useState<Patient[]>(patientsMock);
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
    <div>
      <Typography variant="h4">עמוד ראשי</Typography>
      <Button variant="contained" onClick={handleOpen}>
        Add New Patient
      </Button>
      <AddPatientModal
        open={open}
        onClose={handleClose}
        onSubmit={handleAddPatient}
      />
      <PatientCardList patients={patients} />
    </div>
  );
};
```

AddPatientMoal.tsx

```tsx
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Patient } from "../types";

interface AddPatientModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (patient: Patient) => void;
}

export const AddPatientModal: React.FC<AddPatientModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [newPatient, setNewPatient] = React.useState<Patient>({
    name: "",
    age: 0,
    gender: "",
    height: 0,
    weight: 0,
    bloodPressure: "",
    bloodSugar: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(newPatient);
    setNewPatient({
      name: "",
      age: 0,
      gender: "",
      height: 0,
      weight: 0,
      bloodPressure: "",
      bloodSugar: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Patient</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          value={newPatient.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          name="age"
          label="Age"
          type="number"
          value={newPatient.age}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          name="gender"
          label="Gender"
          type="text"
          value={newPatient.gender}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          name="height"
          label="Height"
          type="number"
          value={newPatient.height}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          name="weight"
          label="Weight"
          type="number"
          value={newPatient.weight}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          name="bloodPressure"
          label="Blood Pressure"
          type="text"
          value={newPatient.bloodPressure}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          name="bloodSugar"
          label="Blood Sugar"
          type="text"
          value={newPatient.bloodSugar}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Patient</Button>
      </DialogActions>
    </Dialog>
  );
};
```

</details>
