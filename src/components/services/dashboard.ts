import { API_URL } from "../../constants";

export type DashboardResponse = {
  expectedExpenses: number;
  income: number;
  currentExpenses: number;
  totalBalance: number;
  remainingExpenses: number;
};

export async function getDashboard(): Promise<DashboardResponse> {
  const url = `${API_URL}/dashboard`
  return fetch(url)
    .then(r => r.json())
}
