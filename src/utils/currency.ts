export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("es-mx", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2
  });

  return formatter.format(value);
}
