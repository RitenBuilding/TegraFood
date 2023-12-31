import Link from "next/link";
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

export const GoBackContainer = styled(Link)`
  margin: 30px 0px 0px 30px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  margin-right: 30px;
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

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  width: 343px;
  height: 48px;
  padding: 0 16px;
  border-radius: 5px;
  border: 1px solid #ebf0ff;
  gap: 10px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const CustomInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
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

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const LoginLink = styled(Link)`
  margin-left: 5px;
  cursor: pointer;

  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #40bfff;
`;

export const ErrorText = styled.p`
  font-family: Poppins;
  color: #ff0000;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
`;
