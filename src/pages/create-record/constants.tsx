import { Icons } from "atomic/icon";
import { CategoryOption } from "services/records";

export interface Option {
  name: string;
  value: string;
}
export interface Category extends Option {
  subcategories?: Category[];
}

export const categories: Category[] = [
  {
    name: "Alimentos y Bebidas",
    value: "Alimentos y Bebidas",
    subcategories: [
      {
        name: "Bar, café",
        value: "Bar, café",
      },
      {
        name: "Comestibles",
        value: "Comestibles",
      },
      {
        name: "Restaurante, comida rápida",
        value: "Restaurante, comida rápida",
      },
      {
        name: "Comida chatarra",
        value: "Comida chatarra",
      },
    ],
  },
  {
    name: "Compras",
    value: "Compras",
    subcategories: [
      {
        name: "Casa y jardín",
        value: "Casa y jardín",
      },
      {
        name: "Electrónica, accesorios",
        value: "Electrónica, accesorios",
      },
      {
        name: "Joyas, accesorios",
        value: "Joyas, accesorios",
      },
      {
        name: "Mascotas, animales",
        value: "Mascotas, animales",
      },
      {
        name: "Papelería, herramientas",
        value: "Papelería, herramientas",
      },
      {
        name: "Regalos",
        value: "Regalos",
      },
      {
        name: "Ropa y calzado",
        value: "Ropa y calzado",
      },
      {
        name: "Salud y belleza",
        value: "Salud y belleza",
      },
      {
        name: "Tiempo libre",
        value: "Tiempo libre",
      },
    ],
  },
  {
    name: "Vida y entretenimiento",
    value: "Vida y entretenimiento",
    subcategories: [
      {
        name: "Alcohol, tabaco",
        value: "Alcohol, tabaco",
      },
      {
        name: "Bienestar, belleza",
        value: "Bienestar, belleza",
      },
      {
        name: "Caridad, regalos",
        value: "Caridad, regalos",
      },
      {
        name: "Cuidado de la salud, médico",
        value: "Cuidado de la salud, médico",
      },
      {
        name: "Cultura, eventos deportivos",
        value: "Cultura, eventos deportivos",
      },
      {
        name: "Deporte, fitness",
        value: "Deporte, fitness",
      },
      {
        name: "Educación, desarrollo",
        value: "Educación, desarrollo",
      },
      {
        name: "Eventos especiales",
        value: "Eventos especiales",
      },
      {
        name: "Libros, audio, suscripciones",
        value: "Libros, audio, suscripciones",
      },
      {
        name: "Pasatiempos",
        value: "Pasatiempos",
      },
      {
        name: "TV, streaming",
        value: "TV, streaming",
      },
      {
        name: "Vacaciones, viajes, hoteles",
        value: "Vacaciones, viajes, hoteles",
      },
    ],
  },
  {
    name: "Comunicaciones, PC",
    value: "Comunicaciones, PC",
    subcategories: [
      {
        name: "Internet",
        value: "Internet",
      },
      {
        name: "Software, aplicaciones, juegos",
        value: "Software, aplicaciones, juegos",
      },
      {
        name: "Teléfono, teléfono movil",
        value: "Teléfono, teléfono movil",
      },
    ],
  },
  {
    name: "Vehículos",
    value: "Vehículos",
    subcategories: [
      {
        name: "Combustible",
        value: "Combustible",
      },
      {
        name: "Estacionamientos",
        value: "Estacionamientos",
      },
      {
        name: "Mantenimiento de vehículos",
        value: "Mantenimiento de vehículos",
      },
      {
        name: "Seguro de vehículos",
        value: "Seguro de vehículos",
      },
    ],
  },

  {
    name: "Transporte",
    value: "Transporte",
    subcategories: [
      {
        name: "Taxi",
        value: "Taxi",
      },
      {
        name: "Transporte público",
        value: "Transporte público",
      },
    ],
  },
  {
    name: "Gastos financieros",
    value: "Gastos financieros",
    subcategories: [
      {
        name: "Asesoramiento",
        value: "Asesoramiento",
      },
      {
        name: "Impuestos",
        value: "Impuestos",
      },
      {
        name: "Prestamos, intereses",
        value: "Prestamos, intereses",
      },
      {
        name: "Cargos, tasas",
        value: "Cargos, tasas",
      },
      {
        name: "Seguros",
        value: "Seguros",
      },
    ],
  },
  {
    name: "Vivienda",
    value: "Vivienda",
    subcategories: [
      {
        name: "Energía, utilitarios",
        value: "Energía, utilitarios",
      },
      {
        name: "Mantenimiento, reparaciones",
        value: "Mantenimiento, reparaciones",
      },
    ],
  },
  {
    name: "Inversiones",
    value: "Inversiones",
    subcategories: [
      {
        name: "Ahorros",
        value: "Ahorros",
      },
      {
        name: "Bienes raices",
        value: "Bienes raices",
      },
      {
        name: "Inversiones financieras",
        value: "Inversiones financieras",
      },
    ],
  },
  {
    name: "Otros",
    value: "Otros",
    subcategories: [
      {
        name: "Faltante",
        value: "Faltante",
      },
      {
        name: "Propinas",
        value: "Propinas",
      },
    ],
  },
  {
    name: "Ingresos",
    value: "Ingresos",
    subcategories: [
      {
        name: "Salarios",
        value: "Salarios",
      },
      {
        name: "Venta",
        value: "Venta",
      },
      {
        name: "Reembolsos",
        value: "Reembolsos",
      },
      {
        name: "Prestamos, intereses",
        value: "Prestamos, intereses",
      },
      {
        name: "Intereses, dividendos",
        value: "Intereses, dividendos",
      },
    ],
  },
];

export const labels: Option[] = [
  { name: "Ahorro", value: "Ahorro" },
  { name: "Gasto planeado", value: "Gasto planeado" },
  { name: "Gasto mensual", value: "Gasto mensual" },
];

export const accounts: Option[] = [
  {
    name: "Nómina",
    value: "Nómina",
  },
  {
    name: "Efectivo",
    value: "Efectivo",
  },
  {
    name: "Banamex Oro",
    value: "Banamex Oro",
  },
  {
    name: "Banamex Costco",
    value: "Banamex Costco",
  },
  {
    name: "Nu Bank",
    value: "Tarjeta Nu",
  },
  {
    name: "Cetes",
    value: "Cetes",
  },
  {
    name: "Mis Metas",
    value: "Mis Metas",
  },
  {
    name: "Banorte Oro",
    value: "Banorte Oro",
  },
  {
    name: "HSBC 2Now",
    value: "HSBC 2Now",
  },
  {
    name: "Banamex Priority",
    value: "Banamex Priority",
  },
  {
    name: "Hey Banco Crédito",
    value: "Hey Banco Crédito",
  },
];

export const categoryIcon: Record<CategoryOption, Icons> = {
  "Alimentos y Bebidas": "restaurant_menu",
  Compras: "shopping_bag",
  "Comunicaciones, PC": "computer",
  "Gastos financieros": "monetization_on",
  Ingresos: "payments",
  "Vida y entretenimiento": "face",
  Vehículos: "directions_car",
  Transferencia: "swap_horiz",
  Transporte: "directions_bus",
  Inversiones: "show_chart",
  Vivienda: "house",
};
