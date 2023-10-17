import React, { useState } from "react";
import * as styles from "./styles";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "@/contexts/CartContext";

export default function ProductItem({
  product,
  index,
  buttonType,
  deleteIcon,
  onClickDelete,
  onClickBuy,
}) {
  const cartOptions = [1, 2, 3, 4, 5];
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleBuyItem = (id) => {
    onClickBuy(id);
  };

  const handleDeleteItem = (id) => {
    onClickDelete(id);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    dispatch({
      type: "UPDATE_CART",
      payload: updatedCart,
    });
  };

  const isProductInCart = cart.find((item) => item.id === product.id);
  const isDisabled = isProductInCart && isProductInCart.comprado;

  return (
    <styles.Container>
      <styles.ProductsContainer key={index}>
        <Image
          src={product.image}
          style={{
            margin: 12,
            borderRadius: "50px",
          }}
          width={100}
          height={100}
          alt={product.name}
        />
        <styles.Product>
          <styles.ProductItemContainer>
            <styles.ProductTitle>{product.name}</styles.ProductTitle>
            <styles.ProductSubtitle>
              {product.description}
            </styles.ProductSubtitle>
          </styles.ProductItemContainer>

          <styles.ProductPriceContainer>
            <styles.PriceText>R${product.price},00</styles.PriceText>

            {buttonType === "buy" ? (
              <styles.BuyButton
                onClick={() => handleBuyItem(product.id)}
                disabled={isDisabled}
              >
                <styles.ButtonText>Comprar</styles.ButtonText>
              </styles.BuyButton>
            ) : buttonType === "cart" ? (
              <styles.SelectButton
                value={product.quantity}
                onChange={(e) =>
                  handleUpdateQuantity(product.id, parseInt(e.target.value))
                }
              >
                {cartOptions.map((option) => (
                  <styles.SelectOption key={option} value={option}>
                    {`${option}x`}
                  </styles.SelectOption>
                ))}
              </styles.SelectButton>
            ) : (
              <></>
            )}
          </styles.ProductPriceContainer>
        </styles.Product>
      </styles.ProductsContainer>

      {deleteIcon ? (
        <styles.DeleteIconContainer
          onClick={() => handleDeleteItem(product.id)}
        >
          <DeleteIcon />
        </styles.DeleteIconContainer>
      ) : (
        <></>
      )}
    </styles.Container>
  );
}
