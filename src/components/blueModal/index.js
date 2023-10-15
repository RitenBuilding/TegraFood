import * as styles from "./styles";
import { useRouter } from "next/router";

export default function BlueModal({
  leftText,
  rightText,
  openModal,
  onClose,
  goTo,
}) {
  const router = useRouter();

  const handleGoToCheckout = () => {
    if (typeof goTo === "function") {
      goTo();
      router.push("/menu/checkout");
    }
  };

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return openModal ? (
    <styles.Container>
      <styles.ModalLeftText>{leftText}</styles.ModalLeftText>
      <styles.ModalRightText onClose={handleClose} onClick={handleGoToCheckout}>
        {rightText}
      </styles.ModalRightText>
    </styles.Container>
  ) : (
    <></>
  );
}
