import { get } from "./api";

export type CardsResponse = {
  account: string;
  balance: number;
};

export async function getCards(token: string): Promise<CardsResponse[]> {
  return get("/accounts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
