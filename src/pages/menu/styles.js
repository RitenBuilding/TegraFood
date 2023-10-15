import Image from "next/image";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const MenuContainer = styled.div`
  width: 254px;
  background-color: #6a0000;
  height: 100%;
`;

export const ListMenu = styled.div`
  :hover {
    background-color: #e5a11f;
  }
`;

export const ListMenuButton = styled.div`
  display: flex;
  align-items: center;
  width: 254px;
  height: 45px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;
  background-color: #6a0000;

  &.active {
    background-color: #e5a11f;
  }
`;

export const ListMenuText = styled.p`
  flex: 1;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #dc9000;
  display: flex;
  justify-content: flex-end;
`;

export const Avatar = styled(Image)`
  border-radius: 50px;
  width: 45px;
  height: 45px;
  margin: 18px 10px;
`;

export const HorizontalListMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 20px;

  :hover {
    color: #e5a11f;
  }
`;

export const HorizontalMenuText = styled.p`
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.5px;
  color: #223263;
  margin: 70px 25px 0px 0px;
  cursor: pointer;

  &.active {
    color: #e5a11f;
    text-decoration: underline;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  overflow-y: auto;
`;

export const ProductsContainer = styled.div`
  display: flex;
  border: 1px solid #0000004d;
  border-radius: 8px;
  height: 130px;
  width: 1000px;
  margin: 10px 0px 0 0px;
  box-shadow: 3px 3px 8px 1px #0000004d;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px 0px 20px;
`;

export const ProductTitle = styled.span`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.5px;
  color: #223263;
  text-shadow: 0.1em 0.1em 0.1em #00000040;
`;

export const ProductSubtitle = styled.span`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #00000080;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px;
`;

export const PriceText = styled.span`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: center;
  margin: 5px;
`;

export const BuyButton = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  justify-content: space-between;
  background: #dc9000;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: none;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
`;
