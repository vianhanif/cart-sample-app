

export const toCurrency = (price, currency = 'IDR') => {
  return price.toLocaleString('id-ID', { style: 'currency', currency: currency });
}