import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

// Como sabemos que essa variável existe e está definida então não tem problemas
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  // No GraphQL todas as requisição são do tipo post, o que varia é o conteúdo do body
  return axios.post(API_URL, {
    query: `
      query {
        allProducts {
          id
          name
          price_in_cents
          image_url
        }
      }
      `,
  });
};

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["products"],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
