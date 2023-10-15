import React, { useState } from "react";
import Image from "next/image";
import * as styles from "./styles";
import logoImage from "../../assets/images/Logo.png";
import Avatar from "../../assets/images/avatar.jpg";
import FilterIcon from "../../assets/images/filter_alt.png";
import SortIcon from "../../assets/images/sort_by_alpha.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProductItem from "../../components/productItem";
import { productsMock } from "../../utils/productsMock";
import ModalPriceFilter from "../../components/modalPriceFilter";
import BlueModal from "../../components/blueModal";

export default function MenuPage() {
  const listMenu = ["Todos", "Pizza", "Sobremesa", "Pastel", "Açaí", "Bebidas"];
  const topMenuList = ["Produtos", "Todos"];

  const [activeListMenuButton, setActiveListMenuButton] = useState(null);
  const [activeTopMenuButton, setActiveTopMenuButton] = useState(null);
  const [filterProducts, setFilterProducts] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [openSortModal, setOpenSortModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [myCart, setMyCart] = useState([]);
  const [redirectToCheckout, setRedirectToCheckout] = useState(false);

  const handleMenuClick = (index, category) => {
    setActiveListMenuButton(index);

    const filter = productsMock.filter((product) =>
      product.category?.includes(category.toLowerCase())
    );
    setFilterProducts(filter);
    setOpenModal(false);
  };

  const handleTopClick = (index) => {
    setActiveTopMenuButton(index);
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    if (openModal) {
      return setOpenModal(false);
    }
    setOpenModal(true);
  };

  const handlePriceFilter = (priceRange) => {
    const products = filterProducts ? filterProducts : productsMock;

    const filteredProducts = products.filter((product) => {
      if (priceRange === "5-25") {
        return product.price >= 5 && product.price <= 25;
      }
      if (priceRange === "26-45") {
        return product.price >= 26 && product.price <= 45;
      }
      if (priceRange === "46") {
        return product.price >= 46;
      }
    });

    setFilterProducts(filteredProducts);
    setOpenModal(false);
  };

  const handleSortProducts = () => {
    const products = filterProducts ? filterProducts : productsMock;

    const sortedProducts = products.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === "asc") {
        setSortOrder("desc");
        return nameA.localeCompare(nameB);
      } else {
        setSortOrder("asc");
        return nameB.localeCompare(nameA);
      }
    });

    setOpenModal(false);
    setOpenSortModal(true);
    setFilterProducts(sortedProducts);
  };

  const handleCloseSortModal = () => {
    setOpenSortModal(false);
  };

  const handleBuyItem = (itemId) => {
    const product = productsMock.find((item) => item.id === itemId);

    const isProductInCart = myCart.some((item) => item.id === itemId);

    if (!isProductInCart) {
      setMyCart([...myCart, product]);
      setOpenCartModal(true);
    }
  };

  const handleRedirectToCheckout = () => {
    setRedirectToCheckout(true);
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

        <styles.HorizontalContainer>
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
          <styles.HorizontalIconContainer>
            <styles.HorizontalMenuIcon
              src={FilterIcon}
              onClick={() => handleOpenModal()}
            />
            <styles.HorizontalMenuIcon
              src={SortIcon}
              onClick={() => handleSortProducts()}
            />
          </styles.HorizontalIconContainer>
        </styles.HorizontalContainer>

        <styles.CenterContainer>
          {!filterProducts
            ? productsMock.map((product, index) => (
                <ProductItem
                  product={product}
                  index={index}
                  key={index}
                  buttonType="buy"
                  onClickBuy={() => handleBuyItem(product.id)}
                />
              ))
            : filterProducts.map((product, index) => (
                <ProductItem
                  product={product}
                  index={index}
                  key={index}
                  buttonType="buy"
                  onClickBuy={() => handleBuyItem(product.id)}
                />
              ))}
        </styles.CenterContainer>
      </styles.Container>
      <ModalPriceFilter
        openModal={openModal}
        onPriceFilter={handlePriceFilter}
      />
      <BlueModal
        openModal={!!openSortModal}
        leftText={`Ítens organizados de ${
          sortOrder !== "asc" ? "A à Z" : "Z à A"
        } `}
        rightText="Cancelar"
        onClose={handleCloseSortModal}
      />
      <BlueModal
        openModal={!!openCartModal}
        leftText="Ítem adicionado ao carrinho"
        rightText="ir para o carrinho"
        goTo={handleRedirectToCheckout}
        cart={myCart}
      />
    </styles.PageContainer>
  );
}
