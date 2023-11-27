import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency? : 'INR' | 'USD ',
    notation?: Intl.NumberFormatOptions['notation'],
  } = {}
) {
  const { currency = 'INR', notation = 'standard' } = options

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('en-in', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}