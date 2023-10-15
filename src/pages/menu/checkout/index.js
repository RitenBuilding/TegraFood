import * as styles from "./styles";
import ProductItem from "../../../components/productItem";
import Avatar from "src/assets/images/avatar.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { productsMock } from "../../../utils/productsMock";

export default function Checkout() {
  const handleDeleteItem = (itemId) => {};

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
          {productsMock.map((product, index) => (
            <ProductItem
              product={product}
              index={index}
              key={index}
              buttonType="cart"
              deleteIcon={true}
              onClickDelete={handleDeleteItem}
            />
          ))}
        </styles.CenterContainer>
      </styles.Container>
    </styles.PageContainer>
  );
}
