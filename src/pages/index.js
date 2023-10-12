import Image from "next/image.js";
import * as styles from "./styles.js";
import foodImage from "../assets/images/food.jpg";
import messageImage from "../assets/images/Message.jpg";
import passwordImage from "../assets/images/Password.jpg";
import googleImage from "../assets/images/Google.jpg";

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

        <styles.InputContainer>
          <Image src={messageImage} alt="Ícone mensagem" />
          <styles.CustomInput type="text" placeholder="Seu e-mail" />
        </styles.InputContainer>

        <styles.InputContainer>
          <Image src={passwordImage} alt="Ícone senha" />
          <styles.CustomInput type="password" placeholder="senha" />
        </styles.InputContainer>

        <styles.Button>Entrar</styles.Button>

        <styles.LineContainer>
          <styles.Line />
          <styles.LineText>ou</styles.LineText>
          <styles.Line />
        </styles.LineContainer>

        <styles.GoogleButton>
          <Image src={googleImage} alt="Google" />
          <styles.GoogleButtonText>Entrar com o Google</styles.GoogleButtonText>
        </styles.GoogleButton>

        <styles.RegisterContainer>
          <styles.Subtitle>Não tem uma conta?</styles.Subtitle>
          <styles.RegisterLink>Cadastre</styles.RegisterLink>
        </styles.RegisterContainer>
      </styles.Content>
    </styles.Container>
  );
}
