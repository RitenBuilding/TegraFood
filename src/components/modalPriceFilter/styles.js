import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 463px;
  height: 135px;
  top: 40%;
  left: 40%;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 10px 20px 25px 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const ModalTitle = styled.span`
  display: flex;
  justify-content: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: center;
  margin-bottom: 15px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  width: 125px;
  height: 50px;
  border-radius: 5px;
  justify-content: space-between;
  background: #dc9000;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: none;
  cursor: pointer;
`;

export const ModalButtonText = styled.span`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
