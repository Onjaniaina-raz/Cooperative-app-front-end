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