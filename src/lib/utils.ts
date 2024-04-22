import { Currency } from "@/global/types";

export function formatCurrency(
  amount: number,
  currency: Currency = "NGN"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(amount);
}

export function formatCurrencyWithoutSymbol(amount: number): string {
  return new Intl.NumberFormat("en-US").format(amount);
}
