export enum AccountEnum {
  cetes = "Cetes",
  mis_metas = "Mis Metas",
  nomina = "Nómina",
  efectivo = "Efectivo",
  nu_bank = "Tarjeta Nu",
  banamex_oro = "Banamex Oro",
  banamex_costco = "Banamex Costco",
  banorte_oro = "Banorte Oro",
  hsbc_2Now = "HSBC 2Now",
  total = "Total",
}

export type Account = {
  name: AccountEnum;
  balance: string;
};
