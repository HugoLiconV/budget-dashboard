export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("es-mx", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
  if (!value || isNaN(value)) {
    return formatter.format(0);
  }
  const formattedValue = formatter.format(value);

  return formattedValue;
}
