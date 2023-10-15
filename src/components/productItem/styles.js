import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px 0 0px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  border: 1px solid #0000004d;
  border-radius: 8px;
  height: 130px;
  width: 1000px;
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

export const SelectButton = styled.select`
  width: 95px;
  height: 50px;
  border-radius: 5px;
  justify-content: space-between;
  background: #dc9000;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: none;
  color: #ffffff;
  cursor: pointer;

  font-family: Poppins;
  font-size: 16px;
`;

export const SelectOption = styled.option`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export const DeleteIconContainer = styled.div`
  display: flex;
  position: relative;
  top: 40%;
  left: 1.5%;
  cursor: pointer;
`;
