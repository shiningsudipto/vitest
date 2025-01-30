export async function fetchProducts() {
  const response = await fetch("https://api.example.com/products");
  return response.json();
}
