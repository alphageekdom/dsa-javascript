function calculateTotalSalesWithTax(products, taxRate) {
  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const salesTax = (total * taxRate) / 100;

  const grandTotal = total + salesTax;

  return grandTotal;
}

module.exports = calculateTotalSalesWithTax;
