import { get } from "./api";

export type DailyExpense = {
  dailyBudget: number;
  dailyExpenses: number;
  remaining?: number;
};

export async function fetchDailyExpenses(): Promise<DailyExpense> {
  const response = await get<DailyExpense>("/daily-expenses");
  return response.data;
}
