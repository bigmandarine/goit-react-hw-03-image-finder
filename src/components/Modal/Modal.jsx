import { BackDrop, ModalWindow } from './Modal.styled';
export const Modal = ({ image, onClick }) => {
  return (
    <BackDrop onClick={onClick}>
      <ModalWindow>
        <img src={image} alt="" />
      </ModalWindow>
    </BackDrop>
  );
};
