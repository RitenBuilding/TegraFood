import React from "react";
import * as styles from "./styles";
import Image from "next/image";

export default function ProductItem({ product, index }) {
  return (
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
          <styles.ProductSubtitle>{product.description}</styles.ProductSubtitle>
        </styles.ProductItemContainer>

        <styles.ProductPriceContainer>
          <styles.PriceText>R${product.price},00</styles.PriceText>
          <styles.BuyButton>
            <styles.ButtonText>Comprar</styles.ButtonText>
          </styles.BuyButton>
        </styles.ProductPriceContainer>
      </styles.Product>
    </styles.ProductsContainer>
  );
}
