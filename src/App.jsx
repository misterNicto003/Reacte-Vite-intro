import { useEffect, useState } from "react";
import {
  DifferencesSection,
  EffectSection,
  Header,
  IntroSection,
  TabSection,
  TeachingSection,
} from "./component";
import FreedBackSeption from "./component/FreedBackSeption/FreedBackSeption";

function App() {
  const [tab, setTab] = useState("effect");
  const [visible, setVisible] = useState(true);

  const active = () => {
    setTab(active);
  };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setVisible(false)
  //   },3000)
  // },[])
  return (
    <>
    {visible && <Header />}
      {/* <Header /> */}
      <main>
        <IntroSection />
        <TabSection active={tab} onChanch={setTab} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FreedBackSeption />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}

export default App;
