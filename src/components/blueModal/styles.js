import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 1%;
  left: 40%;
  width: 573px;
  height: 66px;
  background: #223263;
  padding: 18px;
`;

export const ModalLeftText = styled.span`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #ffffff;
`;

export const ModalRightText = styled.span`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #e5a11f;
  cursor: pointer;
`;
