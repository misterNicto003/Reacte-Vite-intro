import React, { useState } from "react";
import "./FreedBackSeption.css";
import Button from "../Button/Button";

const FreedBackSeption = () => {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(true);
  const [reason, setReason] = useState("help");

  const handleNameChange = (e) => {
    console.log(e.target.value);

    setName(e.target.value);
    setHasError(e.target.value.trim().length === 0)
  };
  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше Имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border:hasError ? '1px solid red': null,
          }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select id="reason" className="control" value={reason} onChange={ (e ) => setReason(e.target.value)}>
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>


        <Button disabled={hasError} 
        isActive={!hasError}
        >Отправить</Button>
      </form>
    </section>
  );
};
export default FreedBackSeption;
