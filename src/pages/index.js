import Image from "next/image.js";
import * as styles from "./styles.js";
import foodImage from "../assets/images/food.jpg";

export default function Login() {
  return (
    <styles.Container>
      <styles.Image>
        <Image
          src={foodImage}
          alt="Food image"
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
          }}
        />
      </styles.Image>
      <styles.Content>
        <styles.Title>Bem vindo!</styles.Title>
        <styles.Subtitle>faça o login para continuar</styles.Subtitle>
        <styles.Input placeholder="Seu e-mail" />
        <styles.Input placeholder="senha" />
        <styles.Button>Entrar</styles.Button>
      </styles.Content>
    </styles.Container>
  );
}
