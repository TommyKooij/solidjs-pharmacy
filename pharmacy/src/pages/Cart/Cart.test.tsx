test("Rounds price to second decimal", () => {
  const roundedPrice = Math.round(5.98765 * 100) / 100;
  expect(roundedPrice).toBe(5.99);
});
