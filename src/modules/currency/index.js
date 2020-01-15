

export const toCurrency = (price, currency = 'IDR') => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })
  return formatter.format(price)
}