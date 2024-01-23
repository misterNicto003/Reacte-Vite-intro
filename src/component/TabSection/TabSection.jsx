import React from "react";
import Button from "../Button/Button"

const TabSection = ({active, onChanch}) => {
  return (
    <section style={{marginBottom:'1rem'}}>
      <Button isActive={active==='main'} onClick={()=>onChanch('main')}>Главная</Button>
      <Button isActive={active==='feedback'} onClick={()=>onChanch('feedback')}>Обратная связь</Button>
      <Button isActive={active==='effect'} onClick={()=>onChanch('effect')}>effect</Button>
    </section>
  );
};

export default TabSection;
