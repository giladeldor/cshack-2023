# Phase 5 - Patient Card

## Task

We would like on the home page to allow the addition of a form, and the display of all forms for the patients currently in treatment.

We will divide this into two parts: displaying all patient deatails (in "cards"), and adding a new form.

- Think how to model each form - witch data we want to take as an input from the user? Try to use TypeScript for the interface.
- How to store (first, locally) the data?

So, for this task - start with displaying patiend data in a component. After you deal with 1 patient, think how to display list of patient details.

> TIP - Start with small form (only Name), and only after it works, expand it for all fields.

> TIP - search MUI Card component, and use it.

> TIP - Start with create mock data - and render it. In the next step, we will handle user input. for example:

<details>
  <summary>Data example</summary>

```ts
const patients: Patient[] = [
  {
    name: "John Doe",
    age: 45,
    gender: "Male",
    height: 180,
    weight: 80,
    bloodPressure: "120/80",
    bloodSugar: "100 mg/dL",
  },
  {
    name: "Jane Smith",
    age: 35,
    gender: "Female",
    height: 165,
    weight: 60,
    bloodPressure: "110/70",
    bloodSugar: "95 mg/dL",
  },
  {
    name: "Bob Brown",
    age: 50,
    gender: "Male",
    height: 175,
    weight: 75,
    bloodPressure: "130/85",
    bloodSugar: "110 mg/dL",
  },
  {
    name: "Alice Green",
    age: 40,
    gender: "Female",
    height: 170,
    weight: 68,
    bloodPressure: "120/75",
    bloodSugar: "105 mg/dL",
  },
];
```

</details>

---

### Solution

<details>
  <summary>Solution</summary>

First, we declare an interface - Patient. You can read about it online or just ask GPT about it :)

So, we created new types.ts file:
types.ts

```ts
export interface Patient {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  bloodPressure: string;
  bloodSugar: string;
}
```

PatientCard.tsx

```tsx
// Card.tsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Patient } from "../types";

interface CardProps {
  patient: Patient;
}

export const PatientCard: React.FC<CardProps> = ({ patient }) => {
  return (
    <Card sx={{ width: 300, marginBottom: 2, border: "2px solid grey" }}>
      <CardContent>
        <Typography>Name: {patient.name}</Typography>
        <Typography>Age: {patient.age}</Typography>
        <Typography>Gender: {patient.gender}</Typography>
        <Typography>Height: {patient.height} cm</Typography>
        <Typography>Weight: {patient.weight} kg</Typography>
        <Typography>Blood Pressure: {patient.bloodPressure}</Typography>
        <Typography>Blood Sugar: {patient.bloodSugar}</Typography>
      </CardContent>
    </Card>
  );
};
```

PatientCardList.tsx

We want to redner a list of cards. We can use `{ }` for insert JS/TS code inside React markup, and then use the `.map` function to iterate and render each card.

```tsx
// CardList.tsx
import React from "react";
import { PatientCard } from "./PatientCard";
import { Box } from "@mui/material";
import { Patient } from "../types";

interface CardListProps {
  patients: Patient[];
}

export const PatientCardList: React.FC<CardListProps> = ({ patients }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {patients.map((patient, index) => (
        <PatientCard key={index} patient={patient} />
      ))}
    </Box>
  );
};
```

</details>
