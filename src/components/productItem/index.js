import React from "react";
import * as styles from "./styles";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductItem({
  product,
  index,
  buttonType,
  deleteIcon,
  onClickDelete,
  onClickBuy,
}) {
  const cartOptions = [1, 2, 3, 4, 5];

  const handleBuyItem = (id) => {
    onClickBuy(id);
  };

  const handleDeleteItem = (id) => {
    onClickDelete(id);
  };

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
              <styles.BuyButton onClick={() => handleBuyItem(product.id)}>
                <styles.ButtonText>Comprar</styles.ButtonText>
              </styles.BuyButton>
            ) : buttonType === "cart" ? (
              <styles.SelectButton>
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
