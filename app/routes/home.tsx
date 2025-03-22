import type { Route } from "./+types/home";
import { Landing } from "../welcome/landing";
import { VehicleInformation } from "~/welcome/vehicleInformation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <VehicleInformation />;
}
