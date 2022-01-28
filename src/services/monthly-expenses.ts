import { get } from "./api";
import { CategoryOption } from "./records";

type MonthlyExpense = {
  name: string;
  amount: number;
  date?: Date;
  paid: boolean;
  category: CategoryOption;
};

export async function fetchMonthlyExpenses(): Promise<MonthlyExpense[]> {
  const response = await get<MonthlyExpense[]>("/monthly-expenses");
  return response.data;
}
