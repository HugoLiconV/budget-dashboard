import { API_URL } from "../../constants";

export type CardsResponse = {
  account: string;
  balance: number;
};


export async function getCards(): Promise<CardsResponse[]> {
  const url = `${API_URL}/accounts`
  return fetch(url)
    .then(r => r.json())
}
