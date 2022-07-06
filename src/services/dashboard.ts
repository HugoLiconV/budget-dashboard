import { get } from "./api";

export type DashboardResponse = {
  expectedExpenses: number;
  income: number;
  currentExpenses: number;
  totalBalance: number;
  remainingExpenses: number;
};

export async function getDashboard(): Promise<DashboardResponse> {
  const response = await get<DashboardResponse>("/dashboard");
  return response.data;
}
