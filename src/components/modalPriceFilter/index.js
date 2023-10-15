import * as styles from "./styles";

export default function ModalPriceFilter({ openModal, onPriceFilter }) {
  const handlePriceFilterClick = (priceRange) => {
    onPriceFilter(priceRange);
  };

  return openModal ? (
    <styles.ModalContainer>
      <styles.ModalTitle>Filtrar por preço:</styles.ModalTitle>
      <styles.ModalButtonContainer>
        <styles.ModalButton onClick={() => handlePriceFilterClick("5-25")}>
          <styles.ModalButtonText>R$5 à R$25</styles.ModalButtonText>
        </styles.ModalButton>
        <styles.ModalButton onClick={() => handlePriceFilterClick("26-45")}>
          <styles.ModalButtonText>R$26 à R$45</styles.ModalButtonText>
        </styles.ModalButton>
        <styles.ModalButton onClick={() => handlePriceFilterClick("46")}>
          <styles.ModalButtonText>R$46 ou mais</styles.ModalButtonText>
        </styles.ModalButton>
      </styles.ModalButtonContainer>
    </styles.ModalContainer>
  ) : (
    <></>
  );
}
