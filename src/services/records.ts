import { get, post } from "./api";

export type CategoryOption =
  | "Alimentos y Bebidas"
  | "Compras"
  | "Vivienda"
  | "Transporte"
  | "Vehículos"
  | "Vida y entretenimiento"
  | "Comunicaciones, PC"
  | "Gastos financieros"
  | "Inversiones"
  | "Ingresos"
  | "Transferencia";

export type Record = {
  name: string;
  amount: number;
  category: CategoryOption;
  subcategory: string;
  label?: string;
  account: string;
  date: string;
};

export async function createRecord({
  record,
}: {
  record: Record;
}): Promise<Record> {
  const { name, date, ...rest } = record;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  return post(
    "/records",
    { ...rest, record: name, formatedDate: date },
    {
      headers,
    }
  );
}

type fetchRecordsParams = {
  limit?: number;
};

export async function fetchRecords(
  params?: fetchRecordsParams
): Promise<{ count: number; data: Record[] }> {
  const response = await get<{ count: number; data: Record[] }>("/records", {
    params: params,
  });
  return response.data;
}
