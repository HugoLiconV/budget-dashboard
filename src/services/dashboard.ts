import { get } from "./api";

export type DashboardResponse = {
  expectedExpenses: number;
  income: number;
  currentExpenses: number;
  totalBalance: number;
  remainingExpenses: number;
};

export async function getDashboard(token: string): Promise<DashboardResponse> {
  return get("/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
