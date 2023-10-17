import React from 'react';
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

export const HorizontalIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  margin-right: 40px;
`;

export const HorizontalMenuIcon = styled(Image)`
  margin-left: 50px;
  cursor: pointer;
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
