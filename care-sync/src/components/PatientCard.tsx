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
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${randomId}`
    );
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
