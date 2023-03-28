# Phase 12 - External API

## Task

The beauty of web development, that we have a bunch of APIs to work with, on any topic. This is how you can make your projects monstrous.

If you want to "go crazy", you can connect it to the OpenAI API, for example, and get crazy results!

Read more here: https://platform.openai.com/docs/introduction

But for now, we use simple and free API: https://rickandmortyapi.com/

Your task is to add a new button: "Assign Doctor". The doctor will be one of the main charater from rick & morty.

For exmplae, try to call this GET request (copy-paste it to your browser)
```
GET https://rickandmortyapi.com/api/character/2
```

- Add an optional doctor assignment. If we assign a doctor, call a random character from 1-5. 
- Render its name & image on the patient card.
- For now, don't save the assign doctor in the DB.
---

### Solution

<details>
  <summary>Solution</summary>

Modify the Patient interface to include an optional doctor field in types.ts:

```ts
export interface Patient {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  bloodPressure: string;
  bloodSugar: string;
  doctor?: {
    name: string;
    image: string;
  };
}
```

Add a new function assignRandomDoctor in the PatientCard component, and update the component with the "Assign Doctor" button and the doctor's information if available:

```tsx
import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Patient } from "../types";

interface CardProps {
  patient: Patient;
}

export const PatientCard: React.FC<CardProps> = ({ patient }) => {
  const [doctor, setDoctor] = useState(patient.doctor);

  const assignRandomDoctor = async () => {
    const randomId = Math.floor(Math.random() * 5) + 1;
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await response.json();

    const newDoctor = {
      name: data.name,
      image: data.image,
    };

    setDoctor(newDoctor);
  };

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
        {doctor && (
          <>
            <Typography>Doctor: {doctor.name}</Typography>
            <img src={doctor.image} alt={doctor.name} width="100" />
          </>
        )}
        <Button onClick={assignRandomDoctor} variant="contained" size="small">
          Assign Random Doctor
        </Button>
      </CardContent>
    </Card>
  );
};
```

</details>
