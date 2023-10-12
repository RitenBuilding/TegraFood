import Image from "next/image.js";
import * as styles from "./styles.js";
import foodImage from "../../assets/images/food.jpg";
import arrowBackImage from "../../assets/images/arrow_back.jpg";
import userImage from "../../assets/images/User.jpg";
import messageImage from "../../assets/images/Message.jpg";
import passwordImage from "../../assets/images/Password.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function SignupPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Senhas não conferem", {
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
          fontSize: "13px",
        },
      });
    } else {
      toast.info("Cadastro de usuário não implementado", {
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
          fontSize: "13px",
        },
      });
    }
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

      <styles.GoBackContainer href="/">
        <Image src={arrowBackImage} alt="Botão de voltar" />
      </styles.GoBackContainer>

      <styles.Content>
        <styles.Title>Vamos começar!</styles.Title>
        <styles.Subtitle>Crie uma nova conta</styles.Subtitle>

        <form onSubmit={handleRegister}>
          <styles.InputContainer>
            <Image src={userImage} alt="Ícone usuário" />
            <styles.CustomInput
              type="text"
              placeholder="Nome completo"
              required
            />
          </styles.InputContainer>

          <styles.InputContainer>
            <Image src={messageImage} alt="Ícone mensagem" />
            <styles.CustomInput type="text" placeholder="Seu e-mail" required />
          </styles.InputContainer>

          <styles.InputContainer>
            <Image src={passwordImage} alt="Ícone senha" />
            <styles.CustomInput
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </styles.InputContainer>

          <styles.InputContainer>
            <Image src={passwordImage} alt="Ícone senha" />
            <styles.CustomInput
              type="password"
              placeholder="confirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </styles.InputContainer>

          <styles.Button type="submit">Entrar</styles.Button>
        </form>

        <ToastContainer />

        <styles.LoginContainer>
          <styles.Subtitle>Já tem uma conta?</styles.Subtitle>
          <styles.LoginLink href="/">Entrar</styles.LoginLink>
        </styles.LoginContainer>
      </styles.Content>
    </styles.Container>
  );
}
