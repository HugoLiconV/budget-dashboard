export type DashboardResponse = {
  expectedExpenses: number;
  income: number;
  currentExpenses: number;
  totalBalance: number;
};

export async function getDashboard(): Promise<DashboardResponse> {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          expectedExpenses: 5789.02,
          currentExpenses: 10707.76,
          income: 38527.10,
          totalBalance: 17045.21
        }),
      1000
    );
  });
}
