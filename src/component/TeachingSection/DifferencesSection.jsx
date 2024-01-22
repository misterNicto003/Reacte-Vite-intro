import React, { useState } from 'react'
import Button from '../Button/Button'
import { differences } from '../../data';

const DifferencesSection = () => {

  const [contentType, setContentType] = useState(null);


    let tabContent = null;

  if (contentType) {
    tabContent = <p>{differences[contentType]}</p>;
  } else {
    tabContent = <p>Нажми на кнопку</p>;
  }

  const handleClick = (type) => {
    setContentType(type);
    console.log(contentType);
  };
  return (
    <section>
          <h3> Чем мы отличаемся от других</h3>
          <Button
            isActive={contentType === "way"}
            onClick={() => handleClick("way")}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === "easy"}
            onClick={() => handleClick("easy")}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === "program"}
            onClick={() => handleClick("program")}
          >
            Концентрация
          </Button>
          {tabContent}
        </section>
  )
}

export default DifferencesSection