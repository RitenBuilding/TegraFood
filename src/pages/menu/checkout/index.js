import * as styles from "./styles";
import ProductItem from "../../../components/productItem";
import Avatar from "src/assets/images/avatar.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useCart } from "@/contexts/CartContext";
import { formatMoney } from "@/utils/formatMoney";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const [discount, setDiscount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleDeleteItem = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const handleTotalCart = () => {
    let total = 0;

    for (const item of cart) {
      total += item.price * item.quantity;
    }

    if (discountApplied) {
      total -= discount;
    }

    if (total < 0) {
      return formatMoney(0);
    }

    return formatMoney(total);
  };

  const applyDiscount = () => {
    setDiscountApplied(true);
  };

  const handleCalculateDelivery = () => {
    toast.info("Calculo de entrega não implementado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        textAlign: "start",
        fontFamily: "Poppins",
        fontSize: "13px",
      },
    });
  };

  return (
    <styles.PageContainer>
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
          <styles.HorizontalMenuText>Meu carrinho</styles.HorizontalMenuText>
        </styles.HorizontalContainer>

        <styles.CenterContainer>
          {cart.map((product, index) => (
            <ProductItem
              product={product}
              index={index}
              key={index}
              buttonType="cart"
              deleteIcon={true}
              onClickDelete={handleDeleteItem}
            />
          ))}

          <styles.TotalCheckoutContainer>
            <styles.DiscountCoupomContainer>
              <styles.DiscountText>Cupom de desconto</styles.DiscountText>
              <styles.DiscountInputContainer>
                <styles.DiscountTypeValue>R$</styles.DiscountTypeValue>
                <styles.DiscountInput
                  type="number"
                  value={discount === 0 ? "" : discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value))}
                />
                <styles.DiscountButton>
                  <styles.ButtonText onClick={applyDiscount}>
                    Adicionar
                  </styles.ButtonText>
                </styles.DiscountButton>
              </styles.DiscountInputContainer>
            </styles.DiscountCoupomContainer>

            <styles.TotalContainer>
              <styles.TotalRow>
                <styles.TotalLeft>
                  <styles.TotalTitle>SUBTOTAL</styles.TotalTitle>
                </styles.TotalLeft>
                <styles.TotalRight>
                  <styles.PriceText>
                    {formatMoney(handleTotalCart())}
                  </styles.PriceText>
                </styles.TotalRight>
              </styles.TotalRow>
              <styles.TotalRow>
                <styles.TotalLeft>
                  <styles.TotalTitle>ENTREGA</styles.TotalTitle>
                </styles.TotalLeft>
                <styles.TotalRight>
                  <styles.DeliveryText onClick={handleCalculateDelivery}>
                    Calcular
                  </styles.DeliveryText>
                </styles.TotalRight>
              </styles.TotalRow>
              <styles.TotalRow>
                <styles.TotalLeft>
                  <styles.TotalTitle>TOTAL</styles.TotalTitle>
                </styles.TotalLeft>
                <styles.TotalRight>
                  <styles.PriceText>
                    {formatMoney(handleTotalCart())}
                  </styles.PriceText>
                </styles.TotalRight>
              </styles.TotalRow>
            </styles.TotalContainer>
          </styles.TotalCheckoutContainer>
        </styles.CenterContainer>
      </styles.Container>
      <ToastContainer />
    </styles.PageContainer>
  );
}
