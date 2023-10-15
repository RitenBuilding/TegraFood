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
  padding: 15px;
  overflow-y: auto;
  background-color: #fff;
`;
