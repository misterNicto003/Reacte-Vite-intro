import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const EffectSection = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  
  const closeModal = () => {
    setModal(false);
  };

  console.log(modal);

  return (
    <section>
      <h3>Effect</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          consequuntur deserunt, laudantium quia aperiam id molestias, iste in
          impedit quod aut magni? Id sit perspiciatis, unde recusandae
          voluptates nihil quae?
        </p>

        <Button onClick={closeModal} >Close Modal</Button>
      </Modal>
    </section>
  );
};

export default EffectSection;
