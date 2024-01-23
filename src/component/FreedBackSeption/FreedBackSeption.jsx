import React, { useRef, useState } from "react";
import "./FreedBackSeption.css";
import Button from "../Button/Button";

const StatevsRef = () => {
  const input = useRef();
  const [show, setShow] = useState(false);


  console.log(input);
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShow(true);
    }
  };

  return (
    <div>
      <h3>input value: {show && input.current.value}</h3>
      <input
        type="text"
        ref={input}
        onKeyDown={handleKeyDown}
        className="control"
      />
    </div>
  );
};

const FreedBackSeption = () => {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  const handleNameChange = (e) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }));
  };

  return (
    <section>
      <h3>Обратная связь</h3>

      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше Имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, reason: e.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
        <hr />
      </form>

      <StatevsRef />
    </section>
  );
};
export default FreedBackSeption;
