import React, { useState } from "react";
import Image from "next/image.js";
import * as styles from "./styles.js";
import foodImage from "../assets/images/food.jpg";
import messageImage from "../assets/images/Message.jpg";
import passwordImage from "../assets/images/Password.jpg";
import googleImage from "../assets/images/Google.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    const validEmail = "admin@tegrafood.com";
    const validPassword = "admin123";

    if (email === validEmail && password === validPassword) {
      router.push("/menu");
      setErrorMessage("");
    } else {
      setErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  const handleGoogleLogin = () => {
    toast.info("Google login não implementado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        textAlign: "start",
        fontFamily: "Poppins",
      },
    });
  };

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
          <styles.CustomInput
            type="text"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </styles.InputContainer>

        <styles.InputContainer>
          <Image src={passwordImage} alt="Ícone senha" />
          <styles.CustomInput
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </styles.InputContainer>

        <styles.Button onClick={handleLogin}>Entrar</styles.Button>
        {errorMessage && <styles.ErrorText>{errorMessage}</styles.ErrorText>}

        <styles.LineContainer>
          <styles.Line />
          <styles.LineText>ou</styles.LineText>
          <styles.Line />
        </styles.LineContainer>

        <styles.GoogleButton onClick={handleGoogleLogin}>
          <Image src={googleImage} alt="Google" />
          <styles.GoogleButtonText>Entrar com o Google</styles.GoogleButtonText>
          <ToastContainer />
        </styles.GoogleButton>

        <styles.RegisterContainer>
          <styles.Subtitle>Não tem uma conta?</styles.Subtitle>
          <styles.RegisterLink href="/signup">Cadastre</styles.RegisterLink>
        </styles.RegisterContainer>
      </styles.Content>
    </styles.Container>
  );
}
