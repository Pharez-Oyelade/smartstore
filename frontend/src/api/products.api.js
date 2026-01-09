import api from "@/lib/axios";

export async function fetchProducts() {
  const response = await api.get("/products/get");
  return response.data.data;
}
