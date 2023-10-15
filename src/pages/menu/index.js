import React, { useState } from "react";
import Image from "next/image";
import * as styles from "./styles";
import logoImage from "../../assets/images/Logo.png";
import Avatar from "../../assets/images/avatar.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { productsMock } from "@/utils/productsMock";
import ProductItem from "./components/productItem";

export default function MenuPage() {
  const listMenu = ["Todos", "Pizza", "Sobremesa", "Pastel", "Açaí", "Bebidas"];
  const topMenuList = ["Produtos", "Todos"];

  const [activeListMenuButton, setActiveListMenuButton] = useState(null);
  const [activeTopMenuButton, setActiveTopMenuButton] = useState(null);
  const [filterProducts, setFilterProducts] = useState(null);

  const handleMenuClick = (index, category) => {
    setActiveListMenuButton(index);

    const filter = productsMock.filter((product) =>
      product.category?.includes(category.toLowerCase())
    );
    setFilterProducts(filter);
  };

  const handleTopClick = (index) => {
    setActiveTopMenuButton(index);
  };

  return (
    <styles.PageContainer>
      <styles.MenuContainer>
        <Image
          src={logoImage}
          style={{
            display: "flex",
            margin: "35px",
          }}
          alt="Tegrafood logo"
        />
        <styles.ListMenu>
          {listMenu.map((text, index) => (
            <styles.ListMenuButton
              key={index}
              onClick={() => handleMenuClick(index, text)}
              className={activeListMenuButton === index ? "active" : ""}
            >
              <styles.ListMenuText>{text}</styles.ListMenuText>
            </styles.ListMenuButton>
          ))}
        </styles.ListMenu>
      </styles.MenuContainer>

      <styles.Container>
        <styles.Navbar>
          <ShoppingCartIcon
            style={{
              color: "#ffffff",
              width: "40px",
              height: "60px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
          <NotificationsIcon
            style={{
              color: "#ffffff",
              width: "40px",
              height: "60px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
          <styles.Avatar src={Avatar} alt="Foto do usuário" />
        </styles.Navbar>

        <styles.HorizontalListMenu>
          {topMenuList.map((title, index) => (
            <styles.HorizontalMenuText
              key={index}
              onClick={() => handleTopClick(index)}
              className={activeTopMenuButton === index ? "active" : ""}
            >
              {title}
            </styles.HorizontalMenuText>
          ))}
        </styles.HorizontalListMenu>

        <styles.CenterContainer>
          {!filterProducts
            ? productsMock.map((product, index) => (
                <ProductItem product={product} index={index} key={index} />
              ))
            : filterProducts.map((product, index) => (
                <ProductItem product={product} index={index} key={index} />
              ))}
        </styles.CenterContainer>
      </styles.Container>
    </styles.PageContainer>
  );
}
