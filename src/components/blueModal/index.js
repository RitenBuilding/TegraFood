import * as styles from "./styles";

export default function BlueModal({
  leftText,
  rightText,
  openModal,
  onClick,
  onClose,
}) {
  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return openModal ? (
    <styles.Container>
      <styles.ModalLeftText>{leftText}</styles.ModalLeftText>
      <styles.ModalRightText onClick={handleClose}>
        {rightText}
      </styles.ModalRightText>
    </styles.Container>
  ) : (
    <></>
  );
}
