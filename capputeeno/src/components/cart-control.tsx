import { useLocalStorage } from "@/hooks/useLocalStorage";
import styled from "styled-components";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0px 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: #fff;

  margin-left: -10px;
`;

const Container = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items", []);

  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
