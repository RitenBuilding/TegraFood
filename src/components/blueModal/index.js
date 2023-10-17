import * as styles from "./styles";
import { useRouter } from "next/router";

export default function BlueModal({
  leftText,
  rightText,
  openModal,
  onClose,
  onClick,
}) {
  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return openModal ? (
    <styles.Container>
      <styles.ModalLeftText>{leftText}</styles.ModalLeftText>
      <styles.ModalRightText onClose={handleClose} onClick={handleClick}>
        {rightText}
      </styles.ModalRightText>
    </styles.Container>
  ) : (
    <></>
  );
}
