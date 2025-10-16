import { CalendarCheck, Car, History, UserCircle, Users } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    url: "/cooperative_management/home",
  },
  {
    label: "Voyageur",
    url: "/cooperative_management/traveler",
  },
  {
    label: "Vehicule",
    url: "/cooperative_management/vehicule",
  },
  {
    label: "Conducteur",
    url: "/cooperative_management/driver",
  },
  {
    label: "Reservation",
    url: "/cooperative_management/reservation",
  },
  {
    label: "Historique",
    url: "/cooperative_management/history",
  },
];

export const menuItems = [
  {
    label: "Gestion des Voyageurs",
    url: "/cooperative_management/traveler",
    icon: Users,
  },
  {
    label: "Gestion des vehicules",
    url: "/cooperative_management/vehicule",
    icon: Car,
  },
  {
    label: "Gestion des conducteurs",
    url: "/cooperative_management/driver",
    icon: UserCircle,
  },
  {
    label: "Faire une reservation",
    url: "/cooperative_management/reservation",
    icon: CalendarCheck,
  },
  {
    label: "Historique des voyages",
    url: "/cooperative_management/history",
    icon: History,
  },
];

export const travelers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Traveler ${i + 1}`,
    phone: `034 ${Math.random().toString().slice(2, 5)} ${Math.random().toString().slice(2, 5)} ${Math.random().toString().slice(2, 4)}`,
    gender: i % 2 === 0 ? "Homme" : "Femme",
    idCard: `${Math.random().toString().slice(2, 14)}`
  }));

  export const driver = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Driver ${i + 1}`,
    phone: `034 ${Math.random().toString().slice(2, 5)} ${Math.random().toString().slice(2, 5)} ${Math.random().toString().slice(2, 4)}`,
    gender: i % 2 === 0 ? "Homme" : "Femme",
    idCard: `${Math.random().toString().slice(2, 14)}`,
    address : 'Lot 03 Soamiampita Itaosy'
  }));

  export const vehicule = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    plate: `${Math.random().toString().slice(2, 5)} ${Math.random().toString().slice(2, 4)} TAF`,
    place: i % 2 === 0 ? "12" : "6",
    vehiculeclass: i % 2 === 0 ? "VIP" : "Premium",
    disponibility : i % 2 === 0 ? "Disponible" : "Non disponible"
  }));

  export const history = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: "16 Octobre 2025",
    driver: `Driver ${i + 1}`,
    trajet: i % 2 === 0 ? "TNR-FNR" : "ATS-MJG",
    vehicule: `${Math.random().toString().slice(2, 5)} ${Math.random().toString().slice(2, 4)} TAF`,
  }));