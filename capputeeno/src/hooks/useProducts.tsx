import { ProductsFetchResponse } from "@/types/products-response";
import { mountQuery } from "@/utils/graphql-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import React from "react";
import { useFilter } from "./useFilter";

// Como sabemos que essa variável existe e está definida então não tem problemas
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  // No GraphQL todas as requisição são do tipo post, o que varia é o conteúdo do body
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority, search } = useFilter();

  // Se não utilizarmos esse hook então a cada mudança do input será feita uma nova requisição, então quando o usuário digitar um texto terá muitos disparos.
  // Passamos um estado nesse hook e então ele atualiza esse meu valor só quando esse estado terminar de atualizar
  // Ajuda na performance das aplicações
  const searchDeffered = React.useDeferredValue(search);

  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    // indico para o react query que eu posso utilizar o mesmo cache quando o tipo e a priority forem iguais, se for diferente então ele faz a requisição e depois armazena em cache
    queryKey: ["products", type, priority],
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeffered.toLowerCase())
  );

  return {
    data: filteredProducts,
  };
}
