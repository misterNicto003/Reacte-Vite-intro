import { useState } from "react";
import { Button, WayToTeach, Header } from "./component";
import { differences, ways } from "./data";

function App() {
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
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.descroption} {...way} />
            ))}
          </ul>
        </section>

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
        </section>

        {/* {contentType ? (
          <p>{differences[contentType]}</p>
        ) : (
          <div>Нажми на кнопку</div>
        )} */}

        {/* {!contentType ? <p>Нажми на кнопку</p>: null}
        {contentType ?  <p>{differences[contentType]}</p>: null} */}
        {/* 
        {!contentType && <p>Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>} */}

        {tabContent}
      </main>
    </div>
  );
}

export default App;
