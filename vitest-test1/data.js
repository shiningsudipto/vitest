export async function fetchProducts() {
  return [
    { id: 1, name: "Dumbbell", price: 50 },
    { id: 2, name: "Treadmill", price: 500 },
  ];
}

export async function fetchData() {
  return ["Dumbbell", "Treadmill", "Rowing Machine"];
}
