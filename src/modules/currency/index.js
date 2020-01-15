

export const toCurrency = (price, currency = 'IDR', style = 'currency') => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style,
    currency,
    minimumFractionDigits: 0
  })
  return formatter.format(price)
}