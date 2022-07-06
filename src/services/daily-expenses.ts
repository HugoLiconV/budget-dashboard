import { get } from "./api";

export type DailyExpense = {
  dailyBudget: number;
  dailyExpenses: number;
  remaining?: number;
};

export async function fetchDailyExpenses(): Promise<DailyExpense> {
  const response = await get<DailyExpense>("/daily-expenses");
  console.log(
    "🚀 ~ file: daily-expenses.ts ~ line 11 ~ fetchDailyExpenses ~ response",
    response
  );
  return response.data;
}
