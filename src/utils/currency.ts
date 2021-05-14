import { splice } from "./string";

export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("es-mx", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2
  });
  if(!value || isNaN(value)) {
    return formatter.format(0)
  }
  const formattedValue = formatter.format(value)

  if(value >= 1000 && value <= 10000) {
    return splice({
      value: formattedValue,
      start: 2,
      delCount: 0,
      newSubStr: ','
    })
  }

  return formattedValue;
}