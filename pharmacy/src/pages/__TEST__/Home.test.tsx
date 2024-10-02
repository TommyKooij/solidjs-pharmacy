test("Product fetch is succesful", async () => {
  try {
    const products = await fetch("http://localhost:4000/products");
    //Status response 200 for success, 404 for not found
    expect(products.status).toBe(200);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("Review fetch is succesful", async () => {
  try {
    const reviews = await fetch("http://localhost:4001/reviews");
    //Status response 200 for success, 404 for not found
    expect(reviews.status).toBe(200);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("Products is not null", async () => {
  try {
    const products = await fetch("http://localhost:4000/products");
    expect(products).not.toBeNull();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("Reviews is not null", async () => {
  try {
    const reviews = await fetch("http://localhost:4001/reviews");
    expect(reviews.status).not.toBeNull();
  } catch (error) {
    expect(error).toMatch("error");
  }
});
