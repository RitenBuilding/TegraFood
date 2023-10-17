import Image from "next/image";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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

export const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 1000px;
  justify-content: space-between;
  align-self: center;
`;

export const HorizontalListMenu = styled.div`
  display: flex;
  flex-direction: row;
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
  height: 100vh;
  padding: 15px;
  overflow-y: auto;
  background-color: #fff;
`;

export const TotalCheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 130px;
  width: 1000px;
  margin-top: 10px;
  margin-right: 26px;
`;

export const DiscountCoupomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 704px;
  height: 128px;
  border-radius: 8px;
  border: 0.25px solid #0000004d;
  box-shadow: 3px 3px 8px 1px #0000004d;
`;

export const DiscountText = styled.span`
  margin: 45px 0px 0px 20px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.5px;
  color: #223263;
`;

export const DiscountInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 54px;
  margin: 35px 0px 0px 10px;
  border-radius: 6px;
  border: 0.25px solid #00000020;
`;

export const DiscountTypeValue = styled.span`
  font-family: Poppins;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.5px;

  display: flex;
  justify-content: right;
  align-items: center;
  text-align: right;
  height: 53px;
  margin-left: 10px;
`;

export const DiscountInput = styled.input`
  width: 100px;
  height: 40px;
  margin: 6px 0px 0px 3px;
  border: none;
  outline: none;

  font-family: Poppins;
  font-size: 18px;
`;

export const DiscountButton = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  margin-top: 1px;
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

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TotalLeft = styled.div`
  width: 224px;
  height: 54px;
  border-radius: 6px 0px 0px 6px;
  border: 0.25px solid #0000004d;
`;

export const TotalRight = styled.div`
  width: 180px;
  height: 54px;
  left: 224px;
  border-radius: 0px 6px 6px 0px;
  border: 0.25px solid #0000004d;
`;

export const TotalTitle = styled.span`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: center;

  display: flex;
  align-items: center;
  height: 54px;
  margin-left: 15px;
`;

export const PriceText = styled.span`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: center;
  margin: 5px;
  color: #223263;

  display: flex;
  justify-content: right;
  align-items: center;
  text-align: right;
  height: 45px;
  margin-right: 15px;
`;

export const DeliveryText = styled.span`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-decoration: underline;

  display: flex;
  justify-content: right;
  align-items: center;
  text-align: right;
  height: 50px;
  margin-right: 15px;
  cursor: pointer;
`;
