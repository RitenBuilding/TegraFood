import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #223263;
`;

export const Subtitle = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #9098b1;
`;

export const Input = styled.input`
  width: 343px;
  height: 48px;
  padding: 12px, 16px, 12px, 16px;
  border-radius: 5px;
  border: 1px;
  border-color: #ebf0ff;
  gap: 10px;
  margin-top: 25px;
`;

export const Button = styled.button`
  width: 343px;
  height: 57px;
  padding: 16px;
  border-radius: 5px;
  border-color: transparent;
  gap: 10px;
  background: #dc9000;
  margin-top: 25px;
  cursor: pointer;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
`;
