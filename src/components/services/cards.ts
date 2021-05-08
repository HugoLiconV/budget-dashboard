export type CardsResponse = {
  name: string;
  amount: number;
};


export async function getCards(): Promise<CardsResponse[]> {
  const creditCards: CardsResponse[] = [
    { name: "Banamex Oro", amount: 922.87 },
    { name: "Nu Bank", amount: 329.35 },
    { name: "Santander", amount: 50.37 }
  ];

  return new Promise(resolve => {
    setTimeout(() => resolve(creditCards), 1000);
  });
}
