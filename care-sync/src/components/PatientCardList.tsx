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
