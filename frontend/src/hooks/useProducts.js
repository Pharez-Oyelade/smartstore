import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/products.api";

export function useProducts() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { data, isLoading, error };
}
