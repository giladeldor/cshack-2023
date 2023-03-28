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
